import React, {useState, useEffect, useMemo, useRef, useCallback} from 'react';
import Styles from './styles';

interface Props {
  suggestions: string[];
  notFoundContent?: string | React.ReactNode;
  onSearching?: (searchContent: string) => void;
  onDoneSearching?: (result: string[]) => void;
  inputWidth?: string;
  inputHeight?: string;
  placeHolder?: string;
}

export default function AutoComplete<T extends Props>(props: T) {
  let timeOut: any;

  const [inputData, setInputData] = useState('');
  const inputRef = useRef(document.createElement('input'));

  // EVENT HANDLERS

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeOut);
    event.persist();
    timeOut = setTimeout(() => {
      setInputData(event.target.value);
      props.onSearching?.(event.target.value);
    }, 280);
  };

  const onClickSuggestion = (suggestion: string) => () => {
    setInputData(suggestion);
    inputRef.current.value = suggestion;
  };

  const suggestionsGenerator = useCallback(
    (inputData: string, suggestions: string[]) => {
      return suggestions.filter(str =>
        str.toLowerCase().toLowerCase().startsWith(inputData.toLowerCase()),
      );
    },
    [],
  );

  const filteredSuggestions = useMemo(() => {
    return suggestionsGenerator(inputData, props.suggestions);
  }, [inputData, props.suggestions, suggestionsGenerator]);

  const suggestionElements = useMemo(() => {
    return filteredSuggestions.map((item, index) => (
      <Styles.Result
        key={item + index}
        height={props.inputHeight}
        onClick={onClickSuggestion(item)}>
        {item}
      </Styles.Result>
    ));
  }, [filteredSuggestions, props.inputHeight]);

  const isSearching = useMemo(() => {
    return filteredSuggestions.length > 2 && inputData.length > 0;
  }, [filteredSuggestions.length, inputData]);

  // EFFECTS

  useEffect(() => {
    return () => {
      clearTimeout(timeOut);
    };
  }, [timeOut]);

  useEffect(() => {
    if (!isSearching && inputData) {
      props.onDoneSearching?.(filteredSuggestions); // Call when done searching
    }
  }, [filteredSuggestions, inputData, isSearching, props.onDoneSearching]);

  // MAIN RETURN
  return (
    <Styles.Wrapper {...props}>
      <Styles.Input
        className="legend-input"
        onChange={onInputChange}
        height={props.inputHeight}
        placeholder={props.placeHolder || ''}
        ref={inputRef}
      />
      <Styles.ResultContainer
        className="result-box"
        inputWidth={inputRef.current.clientWidth + 'px' || ''}>
        {isSearching && suggestionElements}
        {filteredSuggestions.length === 0 && (
          <Styles.ErrorMessage>
            {props.notFoundContent || 'Nothing found 😞'}
          </Styles.ErrorMessage>
        )}
      </Styles.ResultContainer>
    </Styles.Wrapper>
  );
}

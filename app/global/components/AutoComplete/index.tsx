import React, {useState} from 'react';
import Styles from './styles';

interface Props {
  data: string[];
  inputWidth?: string;
  inputHeight?: string;
}

const suggestionsGenerator = (inputData: string, suggestions: string[]) => {
  return suggestions
    .filter(str => str.toLowerCase().includes(inputData.toLowerCase()))
    .sort(first =>
      !first.toLowerCase().startsWith(inputData.toLowerCase()) ? 1 : -1,
    )
    .map((item, index) => (
      <Styles.Result key={item + index}>{item}</Styles.Result>
    ));
};

export default function AutoComplete<T extends Props>(props: T) {
  const [inputData, setInputData] = useState('');

  // EVENT HANDLERS

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  // MAIN RETURN
  return (
    <Styles.Wrapper {...props}>
      <Styles.Input
        value={inputData}
        onChange={handleOnChange}
        width={props.inputWidth}
        height={props.inputHeight}
      />
      <Styles.ResultContainer inputWidth={props.inputWidth}>
        {inputData && suggestionsGenerator(inputData, props.data)}
      </Styles.ResultContainer>
    </Styles.Wrapper>
  );
}

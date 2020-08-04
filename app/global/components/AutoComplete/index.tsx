import React, {useState} from 'react';
import Styles from './styles';

interface Props {
  data: string[];
  inputWidth?: string;
  inputHeight?: string;
}

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
      <Styles.ResultContainer>
        {inputData &&
          props.data
            .filter(item => item.includes(inputData.toUpperCase()))
            .map((item, index) => (
              <Styles.Result key={item + index}>{item}</Styles.Result>
            ))}
      </Styles.ResultContainer>
    </Styles.Wrapper>
  );
}

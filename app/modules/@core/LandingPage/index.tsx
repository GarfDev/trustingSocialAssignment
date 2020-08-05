import React from 'react';
import AutoComplete from '@/global/components/AutoComplete';
import Styles from './styles';
import {words} from './constants';

export default function LandingPage() {
  return (
    <Styles.Container>
      <Styles.Column className="column">
        <AutoComplete
          suggestions={words}
          placeHolder="Try Vietnam.."
          inputHeight={'5vh'}
        />
      </Styles.Column>
    </Styles.Container>
  );
}

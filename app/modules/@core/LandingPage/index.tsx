import React from 'react';
import AutoComplete from '@/global/components/AutoComplete';
import Styles from './styles';
import {words} from './constants';

export default function LandingPage() {
  return (
    <Styles.Container>
      <AutoComplete
        data={words}
        inputWidth="80vw"
        styles={{gridColumn: '3/4'}}
      />
    </Styles.Container>
  );
}

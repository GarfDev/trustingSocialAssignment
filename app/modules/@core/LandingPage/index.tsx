import React from 'react';
import AutoComplete from '@/global/components/AutoComplete';
import Styles from './styles';
import {words} from './constants';

export default function LandingPage() {
  return (
    <Styles.Container>
      <AutoComplete
        suggestions={words}
        inputWidth="50vw"
        placeHolder="Search something.."
      />
    </Styles.Container>
  );
}

import React from 'react';
import AutoComplete from '@/global/components/AutoComplete';
import Styles from './styles';

export default function LandingPage() {
  return (
    <Styles.Container>
      <AutoComplete data={[]} inputWidth="70vw" />
    </Styles.Container>
  );
}

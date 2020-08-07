/* eslint-disable max-len */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AutoComplete from '@/global/components/AutoComplete';
import Styles from './styles';
import {words} from './constants';

const backgroundImageQuerier = (
  keywords: string,
  callback: (full: string, small: string) => void,
) => {
  return axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=iLpC0mZUXQjpasN9sYbr8RhaVikJkVSGOOuQTgGppRQ&query=${keywords}`,
    )
    .then(response => {
      if (!response.data.total) {
      } else {
        callback(
          response.data.results[0].urls.full,
          response.data.results[0].urls.small,
        );
      }
    });
};

export default function LandingPage() {
  const [keywords, setKeywords] = useState('');
  const [backgroundURI, setBackgroundURI] = useState({full: '', small: ''});
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const callback = (full: string, small: string) => {
      setBackgroundURI({full, small});
    };
    backgroundImageQuerier(keywords, callback);
  }, [keywords]);

  useEffect(() => {
    setBackgroundImage('');
    const backgroundImageLoader = new Image();
    backgroundImageLoader.src = backgroundURI.full;

    backgroundImageLoader.onload = () => {
      setBackgroundImage(backgroundURI.full);
    };
  }, [backgroundURI]);

  const onSearchingDone = (keywordList: string[]) => {
    setKeywords(keywordList[0]);
  };

  return (
    <Styles.Container
      backgroundImage={backgroundImage ? backgroundImage : backgroundURI.small}
      isBluring={!backgroundImage}>
      <Styles.Column className="column">
        <AutoComplete
          suggestions={words}
          placeHolder="Try Vietnam.."
          onDoneSearching={onSearchingDone}
          inputHeight={'5vh'}
        />
      </Styles.Column>
    </Styles.Container>
  );
}

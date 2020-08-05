import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild;
  url: string;
}

export default function LinkFn<T extends Props>(props: T) {
  return <Link href={props.url}>{props.children}</Link>;
}

const Link = styled.a`
  text-decoration: none;
  margin-right: 0.6rem;
  color: ${({theme}) => theme.color};
  font-weight: bolder;
`;

import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild;
  url: string;
}

export default function LinkFn<T extends Props>(props: T) {
  return (
    <Link className="nav-link" href={props.url}>
      {props.children}
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  margin: 0.6rem;
  color: ${({theme}) => theme.color};
  font-weight: bolder;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid;
  }
`;

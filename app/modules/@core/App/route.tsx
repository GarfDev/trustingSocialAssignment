import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
// Import Resources

function HelloWord() {
  return <>Hello</>;
}

export default function RootRouter() {
  return (
    <Suspense fallback={<></>}>
      <Route exact path="/" component={HelloWord} />
    </Suspense>
  );
}

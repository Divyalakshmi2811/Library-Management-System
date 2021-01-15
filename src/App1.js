import ClassExample from './classcomponent';

import React from 'react';
export function App1(props) {
  const { name } = props;
  return (
    <React.StrictMode>
      <div>
        <h1>Welcome to !! {name}</h1>
      </div>
      <ClassExample name={name} />
    </React.StrictMode>
 );
}

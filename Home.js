import React from 'react';
import About from './About';

export function Home() {
  const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Victor Wayne' },
    { id: 3, name: 'Jane Doe' },
  ];
  const childToParent = () => {
    alert('This is an alert from the Child Component');
  };

  return (
    <div className="App">
      <div className="child">
        <About childToParent={childToParent} data={data} data1="message" />
        {data.map((user) => (
          <div>{Object.values(user)}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;

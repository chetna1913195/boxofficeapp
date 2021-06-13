import React from 'react';
import Nav from './Nav';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title title="Box office" subtitle="this is a box office app" />
      <Nav />

      {children}
    </div>
  );
}

export default MainPageLayout;

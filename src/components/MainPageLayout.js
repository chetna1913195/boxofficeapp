import React from 'react';
import Nav from './Nav';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title
        title="Box office"
        subtitle="Are you looking for a show or an actor?"
      />
      <Nav />

      {children}
    </div>
  );
}

export default MainPageLayout;

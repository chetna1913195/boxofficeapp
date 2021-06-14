import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  const [input, setInput] = useState('');
  const onChangeHandler = ev => {
    setInput(ev.target.value);
  };
  const onClickHandler = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json)
      .then(result => {
        console.log(result);
      });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) onClickHandler();
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onChangeHandler}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onClickHandler}>
        search
      </button>
    </MainPageLayout>
  );
}

export default Home;

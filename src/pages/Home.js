import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

function Home() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onClickHandler = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
  };
  const onChangeHandler = ev => {
    setInput(ev.target.value);
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onClickHandler();
    }
  };
  const showResult = () => {
    if (results && results.length === 0) {
      return <div>no results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
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
      {showResult()}
    </MainPageLayout>
  );
}

export default Home;

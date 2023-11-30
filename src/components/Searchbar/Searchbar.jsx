import { useState } from 'react';
import { Header } from './Searchbar.styled';

export const Searchbar = props => {
  const [input, setInput] = useState();

  function onType(e) {
    const value = e.target.value;
    setInput(value);
  }

  return (
    <Header className="searchbar">
      <form className="SearchForm" onSubmit={props.onSubmit}>
        <button type="submit" className="SearchForm-button" name="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="input"
          value={input || ''}
          onChange={onType}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </Header>
  );
};

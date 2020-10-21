import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Button } from '../common';

export default function SearchBar() {
  const [text, setText] = useState('');
  const router = useRouter();

  const onChangeInput = ev => {
    const {
      target: { value },
    } = ev;

    setText(value);
  };

  const onSearch = ev => {
    ev.preventDefault();
    if (text !== '') {
      router.push(`/?term=${encodeURI(text)}`);
    }
    return false;
  };

  return (
    <form onSubmit={onSearch} className="searchbar__container">
      <Input label="Filter" id="search-bar" type="text" value={text} onChange={onChangeInput} />
      <Button
        type="button"
        onClick={onSearch}
        className="outdoorsy__button--action"
        text="Filter"
      />
    </form>
  );
}

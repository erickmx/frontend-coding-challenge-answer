import React from 'react';

import { Title, SearchBar } from '../components';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 outdoorsy__body">
      <Title title="Campervans" />
      <SearchBar />
    </div>
  );
}

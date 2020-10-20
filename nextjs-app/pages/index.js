import React from 'react';

import { Title, SearchBar, ListVehicles } from '../components';
import api from '../utils/api';

export default function Home({ listVehicles }) {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 outdoorsy__body">
      <Title title="Campervans" />
      <SearchBar />
      <ListVehicles vehicles={listVehicles} />
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { term } = query;
  let filter = term ? `filter[type]=${term}&` : '';

  const { data } = await api.get(`?${filter}address=san%20francisco`);

  return {
    listVehicles: data.data,
  };
};

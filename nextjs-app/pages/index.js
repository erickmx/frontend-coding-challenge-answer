import React, { useEffect } from 'react';

import { Title, SearchBar, ListVehicles, Loading } from '../components';
import usePagination from '../hooks/usePagination';
import isMobile from '../utils/isMobile';
import api from '../utils/api';
import { Button } from '../components/common';

export default function Home({ term }) {
  /*eslint no-unused-vars: ["warn", { "caughtErrorsIgnorePattern": "^ignore" }]*/
  const [listData, loading, from, setFrom, setLimit, setData] = usePagination(
    api,
    term ? `?filter[type]=${term}&address=san%20francisco` : '?address=san%20francisco',
    0,
    isMobile() ? 3 : 8,
  );

  useEffect(() => {
    setData([]);
    setFrom(0);
  }, [term]);

  return (
    <div className="outdoorsy__body">
      <Title title="Campervans" />
      <SearchBar />
      <ListVehicles vehicles={listData} />
      <div className="loading__footer">
        {loading ? (
          <Loading />
        ) : (
          <Button
            onClick={() => setFrom(from + 1)}
            type="button"
            text="Loard More"
            className="outdoorsy__button--action"
          />
        )}
      </div>
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { term } = query;
  let filter = term ? `filter[type]=${term}&` : '';

  const { data } = await api.get(`?${filter}address=san%20francisco&page[limit]=8`);

  return {
    listVehicles: data.data,
    term,
  };
};

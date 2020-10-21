import { useState, useCallback, useEffect } from 'react';

export default function usePagination(
  apiProvider,
  baseURL = '',
  initialFrom = 0,
  initialLimit = 10,
  initialData = [],
) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [from, setFrom] = useState(initialFrom);
  const [limit, setLimit] = useState(initialLimit);

  const loadData = useCallback(async () => {
    setLoading(true);
    const paginationParams = `page[limit]=${limit}&page[offset]=${from * limit}`;
    const urlComplement = baseURL.includes('?') ? `&${paginationParams}` : `?${paginationParams}`;

    const { data: requestData } = await apiProvider.get(`${baseURL}${urlComplement}`);

    if (from === 0) {
      setData([...requestData.data]);
    } else if (requestData.data.length) {
      setData([...data, ...requestData.data]);
    } else {
      setData([]);
    }
    setLoading(false);
  }, [from, limit, baseURL]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return [data, loading, from, setFrom, setLimit, setData];
}

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
    const { data: requestData } = await apiProvider.get(`${baseURL}/${urlComplement}`);
    setData([...data, ...requestData.data]);
    setLoading(false);
  }, [from, limit]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return [data, loading, from, setFrom, setLimit];
}

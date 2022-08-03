import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

const useFetchUser = () => {
	// A function to get the SWR key of each page,
	// its return value will be accepted by `fetcher`.
	// If `null` is returned, the request of that page won't start.
	const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
		let index = pageIndex;

		index += 1;

		const pageResult =
			index <= 1 ? 32 : (previousPageData?.results.length || 0) + 8; // make sure to fetch 8 users on succeeding call

		if (previousPageData && !previousPageData.results.length) return null; // reached the end
		return `https://randomuser.me/api/?page=1&results=${pageResult}&seed=1`; // SWR key
	};

	const { data, error, size, setSize } = useSWRInfinite(getKey, {
		revalidateFirstPage: false,
	});
	const latestData = data?.at(-1);
	const users = latestData?.results;
	const isLoadingMore = data && typeof data[size - 1] === 'undefined';

	return {
		users: users || [],
		isEmpty: users?.length <= 0,
		isLoading: !error && !data,
		isLoadingMore,
		isError: !!error,
		size,
		setSize,
		isNothingToLoad: users?.length >= 64,
	};
};

export default useFetchUser;

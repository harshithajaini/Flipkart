async function fetchProductsByPage(query,page,resultsPerPage,currentIndex) {
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}&page=${page}&limit=${resultsPerPage}&skip=${currentIndex}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;

}

export default fetchProductsByPage;

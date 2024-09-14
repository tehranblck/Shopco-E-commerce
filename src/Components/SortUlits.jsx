
export const sortByPrice = (data) => {
    console.log(data)
    return [...data].sort((a, b) => a.price - b.price);
  };
  


function SearchAllProducts(data, searchValue) {
    const searchTerms = searchValue.toLowerCase().split(' ').filter(term => term);

    const searchedItems = data.filter((item) => {
      const { name, desc, category, sex, tags } = item;
  
      return searchTerms.every(term => 
        (name && name.toLowerCase().includes(term)) ||
        (desc && desc.toLowerCase().includes(term)) ||
        (category && category.toLowerCase().includes(term)) ||
        (sex && sex.toLowerCase().includes(term)) ||
        (tags && tags.some(tag => tag.toLowerCase().includes(term)))
      );
    });
  
    return searchedItems; // Filtrelenmiş veriyi döndürüyoruz.
  }
export default SearchAllProducts  
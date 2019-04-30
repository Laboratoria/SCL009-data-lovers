/*const filterData = (data, rol) => {
  const nowFilter = data.filter ((element) => {
      return (element.tags[0] === rol || element.tags[1] === rol );
  });
 return nowFilter;
};
window.filterData =  filterData; */

const filterData = (data, rol) => {
  const nowFilter = data.filter((element) => {
    return element.tags.includes(rol);
  });
  return nowFilter;
};
window.filterData = filterData;

/*const sortData = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    return a - b;

  });
}
window.sortData = sortData; */
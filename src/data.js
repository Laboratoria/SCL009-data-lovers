/*const filterData = (data, rol) => {
  const nowFilter = data.filter ((element) => {
      return (element.tags[0] === rol || element.tags[1] === rol );
  });
 return nowFilter;
};
window.filterData =  filterData; */

const filterData = (data, rol) => {
  const nowFilter = data.filter ((element) => {
    return element.tags.includes(rol);
  });
  return nowFilter;
};
window.filterData =  filterData; 

const sortData = (data, sortBy, sortOrder) => {
  const nowSort = data.sort ((low, high)=> {
    if (low.name > high.name) {
      return 1;
    } if (low.name < high.name) {
      return 0;
    }
  });
  return sortData;
};
window.sortData = sortData;
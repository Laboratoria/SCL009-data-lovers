const filterData = (data, rol) => {
  const nowFilter = data.filter((element) => {
    return element.tags.includes(rol);
  });
  return nowFilter;
};
window.filterData = filterData;

const sortData = (data, sortOrder) => {
  const nowSort = data.sort ((a, z)=> {
    if (a.name > z.name) {
      return 1;
    } if (a.name < z.name) {
      return 0;
    }
  });
  /*if (sortOrder === '00') {
    return nowSort;
  }
  if (sortOrder === '01') {
    nowSort.reverse();
  }
  return 0;*/
};
window.sortData = sortData;


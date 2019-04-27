const filterData = (data, rol) => {
  const nowFilter = data.filter ((element) => {
      return (element.tags[0] === rol || element.tags[1] === rol );
  });
 return nowFilter;
};
window.filterData =  filterData;

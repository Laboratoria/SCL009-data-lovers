const filterData = (data, rol) => {
  const nowFilter = data.filter((element) => {

    return element.tags.includes(rol);
  });
  return nowFilter;
};
window.filterData = filterData;


const sortData = (data, sortBy) => { //intentar con split
  let newData = [];
  data.forEach((element) => {

    newData.push(element);
    newData.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    if (sortBy === true) {
      return newData;
    } else {
      return newData.reverse();
    }

  });
  return newData;
};

window.sortData = sortData;

const sortDifficulty = (data, sortOrder) => {
  const sortDif = data.sort((a, b) => {
    if (a.info.difficulty > b.info.difficulty) {
      return 1;
    }
    if (a.info.difficulty < b.info.difficulty) {
      return -1;
    }
    return 0;
  });
  if (sortOrder === true) {
    return sortDif;
  } else {
    return sortDif.reverse();
  }
}

window.sortDifficulty = sortDifficulty;

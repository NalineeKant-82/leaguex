const RANGE = {
  0: [0, 250],
  250: [250, 450],
  450: [450, 800],
};

export const filterItem = (data, filterData) => {
  const newArr = [...(data || [])];

  const checkData = Object.keys(filterData).filter(
    (item) =>
      Object.keys(filterData[item]).filter((ii) => filterData[item][ii])
        .length > 0
  );

  if (checkData.length) {
    const filterArr = newArr.filter((obj) => {
      const checkFilterData = checkData.map((key) => {
        if (key === "price") {
          const objArr = Object.keys(filterData?.price);
          return (
            objArr.filter((filterPrice) => {
              const range = RANGE[filterPrice];
              return filterData.price[filterPrice]
                ? range[0] < obj.price && range[1] >= obj.price
                : false;
            }).length > 0
          );
        } else {
          return filterData[key][obj[key]];
        }
      });

      return (
        checkFilterData.filter((item) => item).length === checkFilterData.length
      );
    });

    return filterArr;
  } else {
    return newArr;
  }
};

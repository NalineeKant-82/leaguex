export const addToCart = ({ arr, id, product = {}, count }) => {
  const prevArr = [...arr];
  const index = arr.findIndex((item) => item.id === id);
  if (index !== -1) {
    const count2 = count ? count : prevArr[index].count + 1;
    debugger;
    if (count2 > prevArr[index].quantity) {
      alert(`sorry you can't add more then${prevArr[index].quantity} quantity`);
    } else {
      prevArr[index] = {
        ...prevArr[index],
        count: count2,
      };
    }
  } else {
    prevArr.push({ ...product, count: 1 });
  }
  return prevArr;
};

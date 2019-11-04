
// Оставляем в массиве checkedToggle только те тоглы, у которых значение true
export default function (filterToggleData) {
  let checkedToggle = [[], []];
  if (filterToggleData) {
    const keys = Object.keys(filterToggleData);
    for (let i = 0; i < keys.length; i++) {
      const categoryKeys = Object.keys(filterToggleData[keys[i]]);
      categoryKeys.forEach((key) => {
        if (filterToggleData[keys[i]][key]) {
          checkedToggle[i].push(key);
        }
      });
    }
  }
  return checkedToggle;
}
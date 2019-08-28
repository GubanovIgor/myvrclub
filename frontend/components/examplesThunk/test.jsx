import {requestGetClubs} from "../../redux/actions";

export const getClubsAC = (filterToggleData) => (
  async (dispatch) => {

    // Оставляем в массиве checkedToggle только те тоглы, у которых значение true
    let checkedToggle = [[], []];
    if(filterToggleData) {
      const keys = Object.keys(filterToggleData);
      for (let i = 0; i < keys.length; i++) {
        const categoryKeys = Object.keys(filterToggleData[keys[i]]);
        categoryKeys.forEach((key) => {
          if (filterToggleData[keys[i]][key]) {
            checkedToggle[i].push(key)
          }
        })
      }
    }

    console.log(checkedToggle)

    const filterData = {
      checkedToggle,
    }

    const resp = await fetch('http://localhost:3100/club', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filterData),
    });
    const data = await resp.json();
    dispatch(requestGetClubs(data));
  }
);
/////////////////////////////////////////////////////////////
///// THIS FUNCTION TAKES THE FIRST LETTER FROM EACH STRING AS INITIAL
///// IT IS BEING USED IN MenuSection.jsx (1 Place)
export const setInitialName = (str) => {
  const arr = str.split(" ");
  const firstName = arr[0];
  const lastName = arr[1];
  return firstName[0] + lastName[0];
};

/////////////////////////////////////////////////////////////
///// THIS FUNCTION TAKES THE FIRST WORD FROM A STRING
///// IT IS BEING USED IN AppArea.jsx (1 Place)
export const setFirstName = (str) => {
  const arr = str.split(" ");
  return arr[0];
};

/////////////////////////////////////////////////////////////
///// THIS FUNCTION RETURNS CURRENT DATE AND TIME
///// IT IS BEING USED IN MessageInput.jsx
export const setNewDate = () => {
  const now = new Date();
  const day = `${now.getDate()}`.padStart(2, 0);
  const month = `${now.getMonth() + 1}`.padStart(2, 0);
  const year = now.getFullYear();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);

  return `${day}.${month}.${year}, ${hour}:${min}`;
};

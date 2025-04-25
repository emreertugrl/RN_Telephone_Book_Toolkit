const capitalize = text => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const compareName = (name, surname) => {
  return `${capitalize(name)} ${capitalize(surname)}`;
};

const getInitialNameSurname = (name, surname) => {
  const nameInitial = name[0].charAt().toUpperCase();
  const surnameInitial = surname[0].charAt().toUpperCase();
  return nameInitial + surnameInitial;
};

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70 + Math.random() * 30; // %70-100 arası
  const lightness = 70 + Math.random() * 10; // %70-80 arası
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export {compareName, getInitialNameSurname, getRandomColor};

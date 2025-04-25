const compareName = (name, surname) => {
  return `${name} ${surname}`;
};

const getInitialNameSurname = (name, surname) => {
  const nameInitial = name[0].charAt().toUpperCase();
  const surnameInitial = surname[0].charAt().toUpperCase();
  return nameInitial + surnameInitial;
};
export {compareName, getInitialNameSurname};

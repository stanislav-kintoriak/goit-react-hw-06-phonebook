import { nanoid } from 'nanoid';

export const formSubmit = ({ name, number }) => {
  return {
    type: 'data/formSubmit',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const contactDelete = id => {
  return {
    type: 'data/contactDelete',
    payload: id,
  };
};

export const filterChange = filterValue => {
  return {
    type: 'filter/filterChange',
    payload: filterValue,
  };
};

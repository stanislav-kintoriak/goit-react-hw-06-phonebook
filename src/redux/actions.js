import { nanoid } from 'nanoid';

export const onFormSubmit = ({ name, number }) => {
  return {
    type: 'data/onFormSubmit',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const contactDelete = id => {
  return {
    type: 'date/contactDelete',
    payload: id,
  };
};

export const filterChange = filterValue => {
  return {
    type: 'filter/filterChange',
    payload: filterValue,
  };
};

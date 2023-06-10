import { ListItem } from './ListItem/ListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  // console.log(contacts);
  // console.log(filterValue);

  const getFoundedContacts = () => {
    const filterInLowercase = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterInLowercase)
    );
  };

  const renderList = getFoundedContacts();

  return (
    <ul className={css.contact__list}>
      {renderList.map(renderedItem => (
        <ListItem key={renderedItem.id} giveContact={renderedItem} />
      ))}
    </ul>
  );
};

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterChange } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filterChangeHandler = evt => {
    const filterValue = evt.currentTarget.value;

    dispatch(filterChange(filterValue));
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={filterChangeHandler}
      />
    </div>
  );
};

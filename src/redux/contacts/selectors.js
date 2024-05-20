import { selectNameFilter } from '../../redux/filters/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  ({ items }, nameFilter) => {
    const pattern = nameFilter.toLowerCase().trim();
    const filteredName = items.filter(({ name }) =>
      name.toLowerCase().includes(pattern)
    );
    if (!filteredName.length) {
      return items.filter(({ number }) =>
        number.toLowerCase().includes(pattern)
      );
    }

    return filteredName;
  }
);

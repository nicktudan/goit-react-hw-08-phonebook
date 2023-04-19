import { useDispatch } from 'react-redux';

import { filterText } from 'redux/filterSlice';

import { FilterInput, FilterContainer, FilterLabel } from './Filter.style';

export const Filter = () => {
    const dispatch = useDispatch();

    return (
      <FilterContainer>
        <FilterLabel>Find contacts by name</FilterLabel>
        <FilterInput
          type="text"
          name="filter"
          onChange={event => dispatch(filterText(event.target.value))}
        />
      </FilterContainer>
    );
}

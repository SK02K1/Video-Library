import { useEffect } from 'react';
import { useCategories } from '../../contexts';
import { useAxios } from '../../hooks';
import { CATEGORIES_ACTIONS } from '../../utils';
import './FilterChipBar.css';

export const FilterChipBar = () => {
  const { data } = useAxios('/api/categories');

  const {
    categoriesState: { categories, selectedCategory },
    dispatchCategories,
  } = useCategories();

  useEffect(() => {
    if (data) {
      dispatchCategories({
        type: CATEGORIES_ACTIONS.INITIALIZE_CATEGORIES,
        payload: { categories: data.categories },
      });
    }
  }, [data, dispatchCategories]);

  const filterChipClickHandler = (categoryName) =>
    dispatchCategories({
      type: CATEGORIES_ACTIONS.UPDATE_SELECTED_CATEGORY,
      payload: { selectedCategory: categoryName },
    });

  return (
    <div className='filter-chip-bar m-sm-b'>
      {categories.map(({ _id, categoryName }) => {
        return (
          <div
            onClick={() => filterChipClickHandler(categoryName)}
            className={`filter-chip filter-active-${
              selectedCategory === categoryName
            }`}
            key={_id}
          >
            {categoryName}
          </div>
        );
      })}
    </div>
  );
};

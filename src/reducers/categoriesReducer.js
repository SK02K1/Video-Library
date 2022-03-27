import { CATEGORIES_ACTIONS } from '../utils';

export const categoriesReducer = (state, { type, payload }) => {
  switch (type) {
    case CATEGORIES_ACTIONS.INITIALIZE_CATEGORIES:
      return { ...state, categories: payload.categories };
    case CATEGORIES_ACTIONS.UPDATE_SELECTED_CATEGORY:
      return { ...state, selectedCategory: payload.selectedCategory };
    default:
      return { ...state };
  }
};

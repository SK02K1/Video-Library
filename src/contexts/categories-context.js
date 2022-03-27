import { createContext, useReducer, useContext } from 'react';
import { categoriesReducer } from '../reducers';

const CategoriesContext = createContext(null);

const categoriesInitialState = {
  categories: [],
  selectedCategory: 'All',
};

const CategoriesProvider = ({ children }) => {
  const [categoriesState, dispatchCategories] = useReducer(
    categoriesReducer,
    categoriesInitialState
  );
  return (
    <CategoriesContext.Provider value={{ categoriesState, dispatchCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => useContext(CategoriesContext);

export { CategoriesProvider, useCategories, categoriesInitialState };

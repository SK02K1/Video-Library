import './Home.css';
import { CategoryCard, Hero } from '../../components';
import { CATEGORIES_ACTIONS, featuredCategories } from '../../utils';
import { useDocumentTitle } from '../../hooks';
import { useCategories } from '../../contexts';
import { useEffect } from 'react';

export const Home = () => {
  useDocumentTitle('Home');
  const { dispatchCategories } = useCategories();
  useEffect(() => {
    dispatchCategories({
      type: CATEGORIES_ACTIONS.UPDATE_SELECTED_CATEGORY,
      payload: { selectedCategory: 'All' },
    });
  }, [dispatchCategories]);
  return (
    <div className='content'>
      <Hero />
      <main className='grid-container auto categories'>
        {featuredCategories.map((categoryData) => {
          return <CategoryCard key={categoryData.id} data={categoryData} />;
        })}
      </main>
    </div>
  );
};

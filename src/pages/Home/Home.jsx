import './Home.css';
import { CategoryCard, Hero } from '../../components';
import { featuredCategories } from '../../utils';
import { useDocumentTitle } from '../../hooks';

export const Home = () => {
  useDocumentTitle('Home');
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

import { useNavigate } from 'react-router-dom';
import { useCategories } from '../../contexts';
import { CATEGORIES_ACTIONS } from '../../utils';
import './CategoryCard.css';

export const CategoryCard = ({ data: { category, imgURL } }) => {
  const { dispatchCategories } = useCategories();
  const navigate = useNavigate();
  const handleCardClick = () => {
    dispatchCategories({
      type: CATEGORIES_ACTIONS.UPDATE_SELECTED_CATEGORY,
      payload: { selectedCategory: category },
    });
    navigate('/videos');
  };
  return (
    <div onClick={handleCardClick} className='category-card'>
      <div className='category-card-overlay'>
        <h2 className='overlay-text'>{category}</h2>
      </div>
      <img className='category-card-img' src={imgURL} alt={category} />
    </div>
  );
};

import './CategoryCard.css';

export const CategoryCard = ({ data: { category, imgURL } }) => {
  return (
    <div className='category-card'>
      <div className='category-card-overlay'>
        <h2 className='overlay-text'>{category}</h2>
      </div>
      <img className='category-card-img' src={imgURL} alt={category} />
    </div>
  );
};

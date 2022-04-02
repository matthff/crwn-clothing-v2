import CategoryContainer from '../category-container/category-container.component';

import './categories-holder.styles.scss';

const CategoriesHolder = ({categories}) => {
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <CategoryContainer key={category.id} category={category}/>
            ))}
        </div>
    );
}

export default CategoriesHolder;

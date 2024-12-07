import MovieCategoryTwo from '@data/movie-category-data-two';
import React from 'react';

const Categories = ({selectCategory}) => {
    return (
      <div className="widget fm-widget widget-category mb-40">
        <h4 className="fm-widget-heading-1-6 mb-20">Categories</h4>
        <div className="fm-widget-categories-list-1-6 category-btn">
          <ul>
            {MovieCategoryTwo?.map((item) => (
              <li key={item.id}>
                <button onClick={() => selectCategory(item.category)}>
                  {item.category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Categories;
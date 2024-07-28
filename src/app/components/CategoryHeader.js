import React from 'react';

const CategoryHeader = ({ name }) => {
  return (
    <div className="sport-category-container">
      <h2 className="section-title">All Posts Tagged</h2>
      <h4 className="sport-basketball">&quot;{name}&quot;</h4>
      <hr className="divider" />
    </div>
  );
}

export default CategoryHeader;



const Categories =({categories, selected, handelSelection}) => {
    return (
        <div className="btn__container">
            {categories.map((category) => {
                return (
                    <button className={category.id === selected ? 'filter__btn filter__btn__selected' : 'filter__btn'} 
                    key={category.id} onClick={() => handelSelection(category)}>
                {category.name}
                </button>
                )
            })}
        </div>
    );
};
export default Categories;
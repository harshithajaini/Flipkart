import "./style.css";
import categories from "./categories";
function Categories() {
  return (
    <div>
      <div className="categories">
        <div className="category-list">
          {categories.map((category) => (
            <div className="category" key={category.id}>
              <img src={category.img} alt={category.alt} />
              <span className="category-name">{category.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;

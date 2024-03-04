import './style.css'
function Categories() {
  return (
    <div>
      <div className="categories">
        <div className="category-list">
          <div className="category" title="Grocery">
            <div className="category-img">
              <img alt="Grocery" src="/grocery.webp" />
            </div>
            <span className="category-name">Grocery</span>
          </div>
          <div className="category" title="Mobiles">
            <div className="category-img">
              <img alt="Mobiles" src="/mobiles.webp" />
            </div>
            <span className="category-name">Mobiles</span>
          </div>
          <div className="category" title="Mobiles">
            <div className="category-img">
              <img alt="Mobiles" src="/fashion.webp" />
            </div>
            <span className="category-name">Fashion</span>
          </div>
          <div className="category" title="Electronics">
            <div className="category-img">
              <img alt="Fashion" src="/electronics.webp" />
            </div>
            <span className="category-name">Electronics</span>
          </div>
          <div className="category" title="Furniture">
            <div className="category-img">
              <img alt="Electronics" src="/home&furniture.webp" />
            </div>
            <span className="category-name">Furniture</span>
          </div>
          <div className="category" title="Appliances">
            <div className="category-img">
              <img alt="Appliances" src="/appliances.webp" />
            </div>
            <span className="category-name">Appliances</span>
          </div>
          <div className="category" title="Travel">
            <div className="category-img">
              <img alt="Travel" src="/travel.webp" />
            </div>
            <span className="category-name">Travel</span>
          </div>
          <div className="category" title="Beauty, Toys & More">
            <div className="category-img">
              <img alt="Beauty, Toys &amp; More" src="/beauty-toys&more.webp" />
            </div>
            <span className="category-name">Beauty, Toys & More</span>
          </div>
          <div className="category" title="Two-wheelers">
            <div className="category-img">
              <img alt="Two Wheelers" src="/two-wheelers.webp" />
            </div>
            <span className="category-name">Two Wheelers</span>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Categories;

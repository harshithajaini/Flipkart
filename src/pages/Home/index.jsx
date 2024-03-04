import Header from '../../components/Header'
import Categories from '../../components/Categories'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import ProductsList from '../../components/ProductsList'
function Home() {
  return (
    <>
    <Header />
    <Categories />
    <Carousel />
    <ProductsList categoryName="smartphones" />
    <ProductsList categoryName="laptops" />
    <ProductsList categoryName="fragrances" />
    <ProductsList categoryName="skincare" />
    <ProductsList categoryName="groceries"  />
    <Footer />


  </>
  )
}

export default Home;

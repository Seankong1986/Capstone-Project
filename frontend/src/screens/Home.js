import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import data from '../data';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>PS5 Games</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <div className="product-title">
              <img className="logo" src={product.logo} alt={product.category} />
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
            </div>
            <div className="product-img">
              <Link to={`/product/${product.slug}`}>
                <img className="pic" src={product.image} alt={product.name} />
              </Link>
            </div>
            <div className="product-info">
              <p className="brand">Brand:{product.brand}</p>
              <p className="price">${product.price}</p>
              <button className="cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;

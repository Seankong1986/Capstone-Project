import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Home() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>PS5 Games</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <div className="product" key={product.slug}>
              <div className="product-title">
                <img
                  className="logo"
                  src={product.logo}
                  alt={product.category}
                />
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
          ))
        )}
      </div>
    </div>
  );
}
export default Home;

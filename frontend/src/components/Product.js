import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import axios from 'axios';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry, the stock of product is not enough for your order!');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <img className="logo" src={product.logo} alt={product.category} />
        <Link className="title-link" to={`/product/${product.slug}`}>
          <Card.Title className="product-name">{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text className="p-price">${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button disabled>Out of Stock</Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;

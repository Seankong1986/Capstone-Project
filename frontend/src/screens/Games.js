import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Rating from '../components/Rating';
import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Games() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <h1>{product.name}</h1>
      <Row>
        <Col md={5}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={2} className="mid-pic">
          <img
            className="img-mid"
            src={product.detail01}
            alt={product.name}
          ></img>
          <img
            className="img-mid"
            src={product.detail02}
            alt={product.name}
          ></img>
          <img
            className="img-mid"
            src={product.detail03}
            alt={product.name}
          ></img>
        </Col>
        <Col md={1}></Col>
        <Col md={4} className="p-details">
          <ListGroup variant="flush">
            <ListGroup.Item className="list-box">
              <img
                className="p-logo"
                src={product.logo}
                alt={product.category}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
            <ListGroup.Item>
              <div className="detail-Price">
                <span>${product.price}</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        product.countInStock > 10 ? (
                          <Badge bg="success">In Stock</Badge>
                        ) : (
                          <Badge bg="warning">Limited Stock</Badge>
                        )
                      ) : (
                        <Badge bg="danger">Out of Stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 ? (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                ) : (
                  <div>
                    <span>Not Available Now</span>
                  </div>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Games;

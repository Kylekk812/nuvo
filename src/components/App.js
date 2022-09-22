import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Product from './Product/Product.js';
import Overview from './Overview/Overview.js';

function App() {
  const [items, SetItems] = useState(null);
  const [overview, changeOv] = useState(null)

  // similar to componentDidMount (setState with fetched data from REST API)
  //---------------------------//
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=5')
      .then(res => {
        SetItems(res.data)
      })
  }, [overview])

  //callback to pass into Product component to get correct product to show overview 
  const getProduct = (id) => {
    const toShow = items[id - 1];
    changeOv(toShow);
  }

  return (
    // will implement flex style to show both products and overview (left and right)
    <div className='container'>

      <div className="Products">
        {/* conditionall renders Products since it takes time to get data from API preventing crash */}
        {items ? <Product item={items} getProduct={getProduct} /> : null}
      </div>
      <div className="Overview">
        {/* conditionall renders Overview until onClick event in Product */}
        {overview ? <Overview overview={overview} /> : null}
      </div>
    </div>
  );
}

export default App;

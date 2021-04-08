/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from 'react';
import './App.css';
import Product from "./components/Product";

function App() {
  const pName = useRef(null);

  let products = [
    {
      id: 1,
      name: "iPhone 11 Pro Max 64GB",
      price: "2099000000",
      image: "https://didongviet.vn/pub/media/catalog/product//9/9/99-min.jpg",
      status: true
    },
    {
      id: 2,
      name: "iPhone 11 256GB",
      price: "1859000000",
      image: "https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/p/iphone-11-tim_2.jpg",
      status: false
    },
    {
      id: 3,
      name: "iPhone 12 Mini 64GB",
      price: "2159000000",
      image: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-12-mini-128gb_3.jpg",
      status: true
    }
  ]

  let productElements = products.map((p, index) => {
    return (
      p.status &&
      <Product
        key={index}
        price={p.price}
        image={p.image}
      >
        {p.name}
      </Product>
    )
  });

  const onClickBtn = () => {
    console.log('This is app component');
  }

  const onAddProduct = () => {
    console.log(pName.current.value);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand">Props</a>
        <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <label htmlFor="name">Product name</label>
              <input type="text" className="form-control" id="name" ref={pName}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onAddProduct}>Save</button>
          </div>
        </div>
        <div className="row mt-5">
          {productElements}
        </div>
        <div className="row mt-5">
          <button className="btn btn-warning" onClick={onClickBtn}>
            Click Me !
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
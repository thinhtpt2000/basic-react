/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(
    {
      products: [
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
      ],
      isActive: true
    }
  );

  let productElements = state.products.map((p, index) => {
    return (
      state.isActive &&
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{p.name}</td>
        <td><span className="badge badge-success">{p.price} VND</span></td>
      </tr>
    )
  });

  const onSetActive = () => {
    setState({
      ...state,
      isActive: !state.isActive
    })
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand">State</a>
        <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
      <div className="container">
        <div className="row mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {productElements}
            </tbody>
          </table>
          <button className="btn btn-warning" onClick={onSetActive}>
            Active: {state.isActive ? "true" : "false"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
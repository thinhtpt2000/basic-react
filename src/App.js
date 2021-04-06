/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function showInfoProduct(product) {
  if (product.status) {
    return (
      <div className={"product-" + product.id}>
        <h2>Product Info</h2>
        <h3>ID: {product.id}</h3>
        <h3>Name: {product.name}</h3>
        <h3>Price: {product.price} VND</h3>
        <h3>Status: { product.status ? "Active" : "Pending"}</h3>
      </div>
    );
  }
}

function App() {
  let a = 5;
  let b = 10;
  let name = "ThinhTPT";
  let product = {
    id: 1,
    name: "iPhone 11 Pro Max",
    price: 20000000,
    status: true
  };

  let users = [
    {
      id: 1,
      name: "ThinhTPT",
      age: 21
    },
    {
      id: 2,
      name: "UyenDP",
      age: 20
    },
    {
      id: 3,
      name: "ThaiTTQ",
      age: 19
    }
  ]

  let elements = users.map((user, index) => {
    return (
      <div key={index}>
        <h2>{ user.name }</h2>
        <h3>Age: { user.age }</h3>
      </div>
    );
  });

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand">JSX Components</a>
        <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="my-nav" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Components</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-2">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h2>Expression</h2>
            <h3>a: {a}</h3>
            <h3>b: {b}</h3>
            <h3>a + b = {a + b}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h3>Name: {name}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {showInfoProduct(product)}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {elements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
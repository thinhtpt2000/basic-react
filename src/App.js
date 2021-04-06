/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./logo.svg";
import './App.css';

function App() {
  let a = 5;
  let b = 10;
  let name = "ThinhTPT";
  let product = {
    id: 1,
    name: "iPhone 11 Pro Max",
    price: 20000000
  };

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
      <div className="container mt-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card-group">
              <div className="card">
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <h2>Product Info</h2>
            <h3>ID: {product.id}</h3>
            <h3>Name: {product.name}</h3>
            <h3>Price: {product.price} VND</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
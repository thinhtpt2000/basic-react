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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand">JSX Components</a>
        <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="my-nav" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Components</a>
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
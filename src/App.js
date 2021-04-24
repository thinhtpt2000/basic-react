import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    txtUsername: "thinhtpt",
    txtPassword: "12345",
    txtNote: "Demo Note",
    sltGender: 1,
    rdoLang: "EN",
    chkStatus: true
  });

  const onHandleChange = (event) => {
    let target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    setData({
      ...data,
      [name]: value
    })
  }

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-8 col-xs-8 col-md-8 col-lg-8 mx-auto">
            <div className="card">
              <div className="card-header bg-success text-light font-weight-bold">
                Form
              </div>
              <div className="card-body">
                <form onSubmit={onHandleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="txtUsername"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                      value={data.txtUsername}
                      onChange={onHandleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="txtPassword"
                      className="form-control"
                      id="password"
                      value={data.txtPassword}
                      onChange={onHandleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="note">Note</label>
                    <textarea
                      className="form-control"
                      id="note"
                      rows="3"
                      name="txaNote"
                      value={data.txtNote}
                      onChange={onHandleChange}
                    >
                    </textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      className="form-control"
                      id="gender"
                      name="sltGender"
                      value={data.sltGender}
                      onChange={onHandleChange}
                    >
                      <option
                        value={0}
                      >Female</option>
                      <option
                        value={1}
                      >Male</option>
                    </select>
                  </div>
                  <label>Languages</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rdoLang"
                      id="rdoLang-1"
                      value="EN"
                      onChange={onHandleChange}
                      checked={data.rdoLang === "EN"}
                    />
                    <label className="form-check-label" htmlFor="rdoLang-1">
                      English
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rdoLang"
                      id="rdoLang-2"
                      value="JP"
                      onChange={onHandleChange}
                      checked={data.rdoLang === "JP"}
                    />
                    <label className="form-check-label" htmlFor="rdoLang-2">
                      Japanese
                    </label>
                  </div>
                  <div className="form-check my-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="chkStatus"
                      name="chkStatus"
                      checked={data.chkStatus}
                      onChange={onHandleChange}
                    />
                    <label className="form-check-label" htmlFor="chkStatus">Active</label>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button type="reset" className="btn btn-danger ml-2">Reset</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

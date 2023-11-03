import React from "react";


export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <a href="http://localhost/shopping-project" className="logo-img">
              <img
                src="https://media.istockphoto.com/id/1251362621/photo/shopping-cart-vector-art-closeup-view.jpg?s=1024x1024&w=is&k=20&c=a8IFbSzW0jhgJKnJGhx0TCDEKYOfDRNUFB_6ODy_oJI="
                alt=""
                style={{ width: "100px" }}
              />
            </a>
          </div>

          <div className="col-md-7">
            <form action="search.php" method="GET">
              <div className="input-group search">
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  placeholder="Search for..."
                />
                <span className="input-group-btn">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Search"
                  />
                </span>
              </div>
            </form>
          </div>
          <div className="col-md-3">
            <ul className="header-info d-flex">
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                  <i className="fa fa-user"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      data-toggle="modal"
                      data-target="#userLogin_form"
                      href="#"
                    >
                      login
                    </a>
                  </li>
                  <li>
                    <a href="register.php">Register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="wishlist.php">
                  <i className="fa fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="cart.php">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>

          <div
            className="modal fade"
            id="userLogin_form"
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <form id="" method="POST">
                    <div className="customer_login">
                      <h2>login here</h2>
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="email"
                          className="form-control username"
                          placeholder="Username"
                          autocomplete="off"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control password"
                          placeholder="password"
                          autocomplete="off"
                          required=""
                        />
                      </div>
                      <input
                        type="submit"
                        name="login"
                        className="btn"
                        value="login"
                      />
                      <span>
                        Don't Have an Account{" "}
                        <a href="register.php">Register</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

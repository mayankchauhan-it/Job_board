import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header id="topnav" class="defaultscroll sticky">
        <div class="container">
          <a class="logo" href="index.html">
            <span class="logo-light-mode">
              <img src="images/logo-dark.png" class="l-dark" alt="" />
              <img src="images/logo-light.png" class="l-light" alt="" />
            </span>
            <img src="images/logo-light.png" class="logo-dark-mode" alt="" />
          </a>

          <div class="menu-extras">
            <div class="menu-item">
              <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                <div class="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul class="buy-button list-inline mb-0">
            <li class="list-inline-item ps-1 mb-0">
              <div class="dropdown">
                <button
                  type="button"
                  class="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-feather="search" class="icons"></i>
                </button>
                <div
                  class="dropdown-menu dd-menu dropdown-menu-end bg-white rounded border-0 mt-3 p-0"
                  style={{ width: "240px" }}
                >
                  <div class="search-bar">
                    <div id="itemSearch" class="menu-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchItemform"
                        class="searchform"
                      >
                        <input
                          type="text"
                          class="form-control rounded border"
                          name="s"
                          id="searchItem"
                          placeholder="Search..."
                        />
                        <input
                          type="submit"
                          id="searchItemsubmit"
                          value="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="list-inline-item ps-1 mb-0">
              <div class="dropdown dropdown-primary">
                <button
                  type="button"
                  class="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="images/team/01.jpg"
                    class="img-fluid rounded-pill"
                    alt=""
                  />
                </button>
                <div class="dropdown-menu dd-menu dropdown-menu-end bg-white rounded shadow border-0 mt-3">
                  <a
                    href="candidate-profile.html"
                    class="dropdown-item fw-medium fs-6"
                  >
                    <i
                      data-feather="user"
                      class="fea icon-sm me-2 align-middle"
                    ></i>
                    Profile
                  </a>
                  <a
                    href="candidate-profile-setting.html"
                    class="dropdown-item fw-medium fs-6"
                  >
                    <i
                      data-feather="settings"
                      class="fea icon-sm me-2 align-middle"
                    ></i>
                    Settings
                  </a>
                  <div class="dropdown-divider border-top"></div>
                  <a
                    href="lock-screen.html"
                    class="dropdown-item fw-medium fs-6"
                  >
                    <i
                      data-feather="lock"
                      class="fea icon-sm me-2 align-middle"
                    ></i>
                    Lockscreen
                  </a>
                  <a href="login.html" class="dropdown-item fw-medium fs-6">
                    <i
                      data-feather="log-out"
                      class="fea icon-sm me-2 align-middle"
                    ></i>
                    Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div id="navigation">
            <ul class="navigation-menu nav-right nav-light">
              <li class="has-submenu parent-menu-item">
                <Link to="/" class="sub-menu-item">Home</Link>
              </li>

              <li class="has-submenu parent-parent-menu-item">
                <Link to="/job_category" class="sub-menu-item">Jobs</Link>
              </li>

              <li class="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Employers</a>
                <span class="menu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <a href="employers.html" class="sub-menu-item">
                      Employers
                    </a>
                  </li>
                  <li>
                    <a href="employer-profile.html" class="sub-menu-item">
                      Employer Profile
                    </a>
                  </li>
                </ul>
              </li>

              <li class="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Candidates</a>
                <span class="menu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <a href="candidates.html" class="sub-menu-item">
                      Candidates
                    </a>
                  </li>
                  <li>
                    <a href="candidate-profile.html" class="sub-menu-item">
                      Candidate Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="candidate-profile-setting.html"
                      class="sub-menu-item"
                    >
                      Profile Setting
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li class="has-submenu parent-parent-menu-item">
                <a href="javascript:void(0)">Pages</a>
                <span class="menu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <a href="aboutus.html" class="sub-menu-item">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="services.html" class="sub-menu-item">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="pricing.html" class="sub-menu-item">
                      Pricing{" "}
                    </a>
                  </li>

                  <li class="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Helpcenter </a>
                    <span class="submenu-arrow"></span>
                    <ul class="submenu">
                      <li>
                        <a
                          href="helpcenter-overview.html"
                          class="sub-menu-item"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a href="helpcenter-faqs.html" class="sub-menu-item">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="helpcenter-guides.html" class="sub-menu-item">
                          Guides
                        </a>
                      </li>
                      <li>
                        <a href="helpcenter-support.html" class="sub-menu-item">
                          Support
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Blog </a>
                    <span class="submenu-arrow"></span>
                    <ul class="submenu">
                      <li>
                        <a href="blogs.html" class="sub-menu-item">
                          {" "}
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a href="blog-sidebar.html" class="sub-menu-item">
                          {" "}
                          Blog Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-detail.html" class="sub-menu-item">
                          {" "}
                          Blog Detail
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Auth Pages </a>
                    <span class="submenu-arrow"></span>
                    <ul class="submenu">
                      <li>
                        <a href="login.html" class="sub-menu-item">
                          {" "}
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="signup.html" class="sub-menu-item">
                          {" "}
                          Signup
                        </a>
                      </li>
                      <li>
                        <a href="reset-password.html" class="sub-menu-item">
                          {" "}
                          Forgot Password
                        </a>
                      </li>
                      <li>
                        <a href="lock-screen.html" class="sub-menu-item">
                          {" "}
                          Lock Screen
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Utility </a>
                    <span class="submenu-arrow"></span>
                    <ul class="submenu">
                      <li>
                        <a href="terms.html" class="sub-menu-item">
                          Terms of Services
                        </a>
                      </li>
                      <li>
                        <a href="privacy.html" class="sub-menu-item">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Special </a>
                    <span class="submenu-arrow"></span>
                    <ul class="submenu">
                      <li>
                        <a href="comingsoon.html" class="sub-menu-item">
                          {" "}
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="maintenance.html" class="sub-menu-item">
                          {" "}
                          Maintenance
                        </a>
                      </li>
                      <li>
                        <a href="error.html" class="sub-menu-item">
                          {" "}
                          404! Error
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}

              <li>
                <Link to="/aboutus" class="sub-menu-item">About Us</Link>
              </li>

              <li>
                <Link to="/contactus" class="sub-menu-item">Contact Us</Link>
              </li>

            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

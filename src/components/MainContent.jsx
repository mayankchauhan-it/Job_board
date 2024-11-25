import React from "react";

const MainContent = () => {
  return (
    <>
      <section
        className="bg-half-260 pb-lg-0 pb-md-4 bg-primary d-table w-100"
        style={{ background: "url('images/hero/bg3.jpg') center center" }}
        id="home"
      >
        <div className="bg-overlay bg-black" style={{ opacity: 0.8 }}></div>
        <div className="container">
          <div className="row g-4 position-relative z-1">
            <div className="col-lg-7 col-md-6 col-12 mt-lg-5">
              <div className="title-heading">
                <h1 className="heading text-white title-dark mb-4">
                  Find a new job and <br /> build career
                </h1>
                <p className="para-desc text-white-50">
                  Find Jobs, Employment & Career Opportunities. Some of the
                  companies we've helped recruit excellent applicants over the
                  years.
                </p>

                <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-2 mt-4">
                  <form className="card-body text-start">
                    <div className="registration-form text-dark text-start">
                      <div className="row g-lg-0">
                        <div className="col-lg-9 col-md-8 col-12">
                          <div className="mb-3 mb-sm-0">
                            <label
                              htmlFor="job-keyword"
                              className="form-label d-none fs-6"
                            >
                              Search :
                            </label>
                            <div className="filter-search-form position-relative filter-border">
                              <i
                                data-feather="search"
                                className="fea icon-20 icons"
                              ></i>
                              <input
                                name="name"
                                type="text"
                                id="job-keyword"
                                className="form-control filter-input-box bg-light border-0"
                                placeholder="Search your keywords"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-12">
                          <input
                            type="submit"
                            id="search"
                            name="search"
                            style={{ height: "60px" }}
                            className="btn btn-primary searchbtn w-100"
                            value="Search"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mt-2">
                  <span className="text-white-50">
                    <span className="text-white">Popular Searches :</span>{" "}
                    Designer, Developer, Web, IOS, PHP Senior Engineer
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-12">
              <div className="bg-white rounded shadow p-2 position-relative">
                <img
                  src="images/hero.jpg"
                  className="img-fluid rounded"
                  alt="Hero"
                />

                <div className="position-absolute top-50 start-50 translate-middle">
                  <a
                    href="#!"
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox"
                  >
                    <i className="mdi mdi-play mdi-24px text-primary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;

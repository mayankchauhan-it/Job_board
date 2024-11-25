import React from "react";

function Aboutus() {
  return (
    <>
      <section className="bg-half-170 d-table w-100" style={{ background: "url('images/hero/bg.jpg')" }} >
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  About Us
                </h5>
              </div>
            </div>
          </div>

          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Jobnova</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About us
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6 mb-5">
              <div className="about-left">
                <div className="position-relative shadow rounded img-one">
                  <img
                    src="images/about/ab01.jpg"
                    className="img-fluid rounded"
                    alt="work-image"
                  />
                </div>

                <div className="img-two shadow rounded p-2 bg-white">
                  <img
                    src="images/about/ab02.jpg"
                    className="img-fluid rounded"
                    alt="work-image"
                  />

                  <div className="position-absolute top-0 start-50 translate-middle">
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

            <div className="col-lg-6 col-md-6">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-3">
                  Millions of jobs. <br /> Find the one that's right for you.
                </h4>
                <p className="text-muted para-desc mb-0">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>

                <ul className="list-unstyled text-muted mb-0 mt-3">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="mdi mdi-check-circle-outline align-middle"></i>
                    </span>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="mdi mdi-check-circle-outline align-middle"></i>
                    </span>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="mdi mdi-check-circle-outline align-middle"></i>
                    </span>
                    Create your own skin to match your brand
                  </li>
                </ul>

                <div className="mt-4">
                  <a href="aboutus.html" className="btn btn-primary">
                    About Us{" "}
                    <i className="mdi mdi-arrow-right align-middle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center mb-4 pb-2">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title mb-3">
                  Here's why you'll love it Jobnova
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
              <div className="position-relative features text-center p-4 rounded shadow bg-white">
                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                  <i data-feather="phone" className="fea icon-ex-md"></i>
                </div>

                <div className="mt-4">
                  <a href="#" className="title h5 text-dark">
                    24/7 Support
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Many desktop publishing now use and a search for job.
                  </p>
                  <div className="mt-3">
                    <a href="#" className="btn btn-link primary text-dark">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
              <div className="position-relative features text-center p-4 rounded shadow bg-white">
                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                  <i data-feather="cpu" className="fea icon-ex-md"></i>
                </div>

                <div className="mt-4">
                  <a href="#" className="title h5 text-dark">
                    Tech & Startup Jobs
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Many desktop publishing now use and a search for job.
                  </p>
                  <div className="mt-3">
                    <a href="#" className="btn btn-link primary text-dark">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
              <div className="position-relative features text-center p-4 rounded shadow bg-white">
                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                  <i data-feather="activity" className="fea icon-ex-md"></i>
                </div>

                <div className="mt-4">
                  <a href="#" className="title h5 text-dark">
                    Quick & Easy
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Many desktop publishing now use and a search for job.
                  </p>
                  <div className="mt-3">
                    <a href="#" className="btn btn-link primary text-dark">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
              <div className="position-relative features text-center p-4 rounded shadow bg-white">
                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                  <i data-feather="clock" className="fea icon-ex-md"></i>
                </div>

                <div className="mt-4">
                  <a href="#" className="title h5 text-dark">
                    Save Time
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Many desktop publishing now use and a search for job.
                  </p>
                  <div className="mt-3">
                    <a href="#" className="btn btn-link primary text-dark">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
              <div className="position-relative features text-center p-4 rounded shadow bg-white">
                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                  <i data-feather="file-text" className="fea icon-ex-md"></i>
                </div>

                <div className="mt-4">
                  <a href="#" className="title h5 text-dark">
                    Apply with confidence
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Many desktop publishing now use and a search for job.
                  </p>
                  <div className="mt-3">
                    <a href="#" className="btn btn-link primary text-dark">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
              <div className="position-relative features text-center p-4 rounded shadow bg-white">
                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                  <i data-feather="codesandbox" className="fea icon-ex-md"></i>
                </div>

                <div className="mt-4">
                  <a href="#" className="title h5 text-dark">
                    Reduce Hiring Bias
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Many desktop publishing now use and a search for job.
                  </p>
                  <div className="mt-3">
                    <a href="#" className="btn btn-link primary text-dark">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
              <div className="position-relative features text-center p-4 rounded shadow bg-white">
                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                  <i data-feather="users" className="fea icon-ex-md"></i>
                </div>

                <div className="mt-4">
                  <a href="#" className="title h5 text-dark">
                    Proactive Employers
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Many desktop publishing now use and a search for job.
                  </p>
                  <div className="mt-3">
                    <a href="#" className="btn btn-link primary text-dark">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
              <div className="position-relative features text-center p-4 rounded shadow bg-white">
                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                  <i data-feather="user-check" className="fea icon-ex-md"></i>
                </div>

                <div className="mt-4">
                  <a href="#" className="title h5 text-dark">
                    No Missed Opportunities
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Many desktop publishing now use and a search for job.
                  </p>
                  <div className="mt-3">
                    <a href="#" className="btn btn-link primary text-dark">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Our Minds</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-0">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="card team team-primary text-center">
                <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                  <img src="images/team/04.jpg" className="img-fluid" alt="" />
                  <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                  <ul className="list-unstyled team-social mb-0">
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="facebook"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="instagram"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="twitter"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content mt-3">
                  <a
                    href="page-team-detail.html"
                    className="text-dark h5 mb-0 title"
                  >
                    Jack John
                  </a>
                  <h6 className="text-muted mb-0 fw-normal">Job Seeker</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12">
              <div className="card team team-primary text-center">
                <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                  <img src="images/team/05.jpg" className="img-fluid" alt="" />
                  <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                  <ul className="list-unstyled team-social mb-0">
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="facebook"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="instagram"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="twitter"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content mt-3">
                  <a
                    href="page-team-detail.html"
                    className="text-dark h5 mb-0 title"
                  >
                    Krista John
                  </a>
                  <h6 className="text-muted mb-0 fw-normal">Job Seeker</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12">
              <div className="card team team-primary text-center">
                <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                  <img src="images/team/06.jpg" className="img-fluid" alt="" />
                  <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                  <ul className="list-unstyled team-social mb-0">
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="facebook"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="instagram"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="twitter"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content mt-3">
                  <a
                    href="page-team-detail.html"
                    className="text-dark h5 mb-0 title"
                  >
                    Roger Jackson
                  </a>
                  <h6 className="text-muted mb-0 fw-normal">Job Seeker</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12">
              <div className="card team team-primary text-center">
                <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                  <img src="images/team/07.jpg" className="img-fluid" alt="" />
                  <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                  <ul className="list-unstyled team-social mb-0">
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="facebook"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="instagram"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-pills btn-icon"
                      >
                        <i
                          data-feather="twitter"
                          className="icons fea-social"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content mt-3">
                  <a
                    href="page-team-detail.html"
                    className="text-dark h5 mb-0 title"
                  >
                    Johnny English
                  </a>
                  <h6 className="text-muted mb-0 fw-normal">Job Seeker</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Questions & Answers</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4 pt-2">
            <div className="col-md-6 col-12">
              <div className="d-flex">
                <i
                  data-feather="help-circle"
                  className="fea icon-ex-md text-primary me-2 mt-1"
                ></i>
                <div className="flex-1">
                  <h5 className="mt-0">
                    How our <span className="text-primary">Jobnova</span> work ?
                  </h5>
                  <p className="answer text-muted mb-0">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance: human perception is
                    tuned to recognize certain patterns and repetitions in
                    texts.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="d-flex">
                <i
                  data-feather="help-circle"
                  className="fea icon-ex-md text-primary me-2 mt-1"
                ></i>
                <div className="flex-1">
                  <h5 className="mt-0">
                    {" "}
                    What is the main process open account ?
                  </h5>
                  <p className="answer text-muted mb-0">
                    If the distribution of letters and 'words' is random, the
                    reader will not be distracted from making a neutral
                    judgement on the visual impact
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 mt-4 pt-2">
              <div className="d-flex">
                <i
                  data-feather="help-circle"
                  className="fea icon-ex-md text-primary me-2 mt-1"
                ></i>
                <div className="flex-1">
                  <h5 className="mt-0"> How to make unlimited data entry ?</h5>
                  <p className="answer text-muted mb-0">
                    Furthermore, it is advantageous when the dummy text is
                    relatively realistic so that the layout impression of the
                    final publication is not compromised.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 mt-4 pt-2">
              <div className="d-flex">
                <i
                  data-feather="help-circle"
                  className="fea icon-ex-md text-primary me-2 mt-1"
                ></i>
                <div className="flex-1">
                  <h5 className="mt-0">
                    {" "}
                    Is <span className="text-primary">Jobnova</span> safer to
                    use with my account ?
                  </h5>
                  <p className="answer text-muted mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-md-5 pt-md-3 mt-4 pt-2 justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                <p className="text-muted para-desc mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Jobnova</span> that can
                  provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
                <a href="contactus.html" className="btn btn-primary mt-3">
                  <i className="uil uil-phone"></i> Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;

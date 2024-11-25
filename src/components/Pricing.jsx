import React from 'react'

function Pricing() {
  return (
   <>
   <section className="bg-half-170 d-table w-100" style={{background: "url('images/hero/bg.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Pricing Plans</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><a href="index.html">Jobnova</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row g-4 align-items-lg-center">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="pricing text-center rounded position-relative shadow">
                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                <h5 className="price-title text-white title-dark">Starter</h5>
                                <p className="mb-0 text-white-50">Suitable for Starter</p>
                            </div>
                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                <span className="h6 mb-0">$</span>
                                <span className="price h4 mb-0 ms-1">0.00</span>
                                <span className="h6 align-self-end mb-1">/mo</span>
                            </div>
                            <div className="pricing-features text-start">
                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                    <li className="feature-list text-muted"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Full Access</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Enhanced Security</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Source Files</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>1 Domain Free</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Free Appointments</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Free Installment</li>
                                </ul>
                                <div className="border-top text-center py-4">
                                    <a href="javascript:void(0)" className="btn btn-dark">Free Signup</a>                                        
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="pricing text-center rounded position-relative overflow-hidden shadow">
                            <div className="ribbon ribbon-right overflow-hidden"><span className="text-center bg-warning d-block shadow small h6">Best</span></div>
                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                <h5 className="price-title text-white title-dark">Professional</h5>
                                <p className="mb-0 text-white-50">Suitable for Regular</p>
                            </div>
                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                <span className="h6 mb-0">$</span>
                                <span className="price h4 mb-0 ms-1">9.99</span>
                                <span className="h6 align-self-end mb-1">/mo</span>
                            </div>
                            <div className="pricing-features text-start">
                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                    <li className="feature-list text-muted"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Full Access</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Enhanced Security</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Source Files</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>1 Domain Free</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Free Appointments</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Free Installment</li>
                                </ul>
                                <div className="border-top text-center py-4">
                                    <a href="javascript:void(0)" className="btn btn-dark">Subscribe Now</a>                                        
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="pricing text-center rounded position-relative shadow-lg bg-light">
                            <div className="price-header rounded-top bg-primary pt-5 pb-5">
                                <h5 className="price-title text-white title-dark">Standerd</h5>
                                <p className="mb-0 text-white-50">Suitable for Business</p>
                            </div>
                            <div className="d-flex justify-content-center bg-light border-bottom py-5">
                                <span className="h6 mb-0">$</span>
                                <span className="price h4 mb-0 ms-1">19.99</span>
                                <span className="h6 align-self-end mb-1">/mo</span>
                            </div>
                            <div className="pricing-features text-start">
                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                    <li className="feature-list text-muted"><i data-feather="arrow-right-circle" className="fea icon-sm text-primary me-2"></i>Full Access</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-primary me-2"></i>Enhanced Security</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-primary me-2"></i>Source Files</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-primary me-2"></i>1 Domain Free</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-primary me-2"></i>Free Appointments</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-primary me-2"></i>Free Installment</li>
                                </ul>
                                <div className="border-top text-center py-5">
                                    <a href="javascript:void(0)" className="btn btn-primary">Buy Now</a>                                        
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="pricing text-center rounded position-relative shadow">
                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                <h5 className="price-title text-white title-dark">Premium</h5>
                                <p className="mb-0 text-white-50">Suitable for Premium</p>
                            </div>
                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                <span className="h6 mb-0">$</span>
                                <span className="price h4 mb-0 ms-1">29.99</span>
                                <span className="h6 align-self-end mb-1">/mo</span>
                            </div>
                            <div className="pricing-features text-start">
                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                    <li className="feature-list text-muted"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Full Access</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Enhanced Security</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Source Files</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>1 Domain Free</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Free Appointments</li>
                                    <li className="feature-list text-muted mt-2"><i data-feather="arrow-right-circle" className="fea icon-sm text-dark me-2"></i>Free Installment</li>
                                </ul>
                                <div className="border-top text-center py-4">
                                    <a href="javascript:void(0)" className="btn btn-dark">Buy Premium</a>                                        
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 col-md-6 mb-5">
                        <div className="about-left">
                            <div className="position-relative shadow rounded img-one">
                                <img src="images/about/ab01.jpg" className="img-fluid rounded" alt="work-image"/>
                            </div>

                            <div className="img-two shadow rounded p-2 bg-white">
                                <img src="images/about/ab02.jpg" className="img-fluid rounded" alt="work-image"/>

                                <div className="position-absolute top-0 start-50 translate-middle">
                                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
                                        <i className="mdi mdi-play mdi-24px text-primary"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="section-title mb-4 ms-lg-3">
                            <h4 className="title mb-3">Frequently Asked Questions</h4>
                            <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        
                            <div className="accordion mt-4 pt-2" id="buyingquestion">
                                <div className="accordion-item rounded">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button border-0 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            How does it work ?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#buyingquestion">
                                        <div className="accordion-body text-muted">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item rounded mt-2">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            Do I need a designer to use Jobnova ?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#buyingquestion">
                                        <div className="accordion-body text-muted">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                        </div>
                                    </div>
                                </div>
    
                                <div className="accordion-item rounded mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What do I need to do to start selling ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse border-0 collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#buyingquestion">
                                        <div className="accordion-body text-muted">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                        </div>
                                    </div>
                                </div>
    
                                <div className="accordion-item rounded mt-2">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What happens when I receive an order ?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse border-0 collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#buyingquestion">
                                        <div className="accordion-body text-muted">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default Pricing

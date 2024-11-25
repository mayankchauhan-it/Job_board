import React from 'react'

function Signup() {
  return (
    <>
    <section className="bg-home d-flex align-items-center" style={{background: "url('images/hero/bg3.jpg') center"}}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="p-4 bg-white rounded shadow-md mx-auto w-100" style={{maxwidth: "400px;"}}>
                            <form>
                                <a href="index.html"><img src="images/logo-dark.png" className="mb-4 d-block mx-auto" alt=""/></a>
                                <h6 className="mb-3 text-uppercase fw-semibold">Register your account</h6>
                            
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Name</label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="Calvin Carlo"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Email</label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="example@website.com"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold" HTMLfor="loginpass">Password</label>
                                    <input type="password" className="form-control" id="loginpass" placeholder="Password"/>
                                </div>
                            
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-label form-check-label text-muted" HTMLfor="flexCheckDefault">I Accept <a href="#" className="text-primary">Terms And Condition</a></label>
                                </div>
                
                                <button className="btn btn-primary w-100" type="submit">Register</button>

                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted small me-2">Already have an account ? </span> <a href="login.html" className="text-dark fw-semibold small">Sign in</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup

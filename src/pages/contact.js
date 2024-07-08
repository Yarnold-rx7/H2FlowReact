import React from "react";

const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="container row">
        <div className="col-md-6">
          <div className="row">
            <h5>Toronto</h5>
            <p>905-660-9775</p>
          </div>
          <div className="row">
            <h5>Montreal</h5>
            <p>905-660-9775</p>
          </div>
          <div className="row">
            <h5>Vancouver</h5>
            <p>905-660-9775</p>
          </div>
        </div>
        <div className="col-md-6 contact-form">
          <form>
            <h3>Enter your contact information!</h3>
            <div class="row my-3">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

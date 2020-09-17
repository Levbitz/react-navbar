import React from "react";

function Pricing() {
  return (
    <div id="contact" class="container-fluid">
      <div class="row">
        <h3 class="skillsHeader">Our Prices</h3>
      </div>
      <div class="row">
        <div class="col sm-3"></div>
        <div class="col sm-6">
          <form>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <textarea
              placeholder="message"
              name=""
              id=""
              cols="60"
              rows="5"
            ></textarea>

            <div id="contactBtnWrapper">
              <button id="contact_btn" type="submit" class="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="col sm-3"></div>
      </div>
    </div>
  );
}

export default Pricing;

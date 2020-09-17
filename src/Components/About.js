import React from "react";

//img
import AbtImg from "./img/lustre-home-illustration.svg";

//import css
import "./css/About.css";

function About() {
  return (
    <div class="container-fluid">
      <div className="AboutCompt">
        <div class="row">
          <h3 class="skillsHeader">About Us</h3>
        </div>
        <div class="row">
          <div class="col abtImg">
            <div>
              <img width="80%" src={AbtImg} alt="" />
            </div>
          </div>

          <div class="col">
            <div>
              <h4>Read About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                tempora nulla molestiae, cupiditate, expedita soluta eveniet
                commodi voluptatum aut beatae nemo, illum molestias quae
                temporibus ipsa sapiente quas doloremque aperiam.
              </p>
              <p>
                tempora nulla molestiae, cupiditate, expedita soluta eveniet
                commodi voluptatum aut beatae nemo, illum molestias quae
                temporibus ipsa sapiente quas doloremque aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
//import css
import "./css/Footer.css";

function Footer() {
  return (
    <footer id="myFooter">
      <div class="footerImgWrapper">
        <img width="200px" src="/img/log.png" alt="" />
      </div>
      <div>
        <p className="footerParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          neque exercitationem cumque sint impedit totam explicabo maiores dicta
          consequatur hic officia velit placeat pariatur, ad soluta vero iure
          quis nemo nam quibusdam id error deserunt repudiandae et. Modi iure
          facilis,
        </p>
      </div>

      <div class="footerIconWrapper">
        <p>
          <span>
            <a href={"https://levbitz.com/portfolio.html"}>
              <i class="fab fa-2x fa-facebook-square"></i>
            </a>
          </span>
          *
          <span>
            <a href={"https://www.facebook.com/levbitz/"}>
              <i class="fab fa-2x fa-twitter"> </i>
            </a>
            *
          </span>
          <span>
            <a
              href={"https://www.youtube.com/channel/UCl4ppoHFF1ew0NbgbMCS94A"}
            >
              <i class="fab fa-2x fa-whatsapp-square"></i>
            </a>
          </span>
          *
          <span>
            <a
              href={"https://www.youtube.com/channel/UCl4ppoHFF1ew0NbgbMCS94A"}
            >
              <i class="fab fa-2x fa-linkedin"></i>
            </a>
            *
          </span>
          <span>
            <a
              href={"https://www.youtube.com/channel/UCl4ppoHFF1ew0NbgbMCS94A"}
            >
              <i class="fas fa-2x fa-envelope-square"></i>
            </a>
          </span>
        </p>
      </div>

      <div class="credits">
        <p>
          Design By Levson By <a href="https://levbitz.com/">Levbitz</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

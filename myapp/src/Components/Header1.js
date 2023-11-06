import React, { useState } from "react";
import img1 from "./images/images.png";

const Header1 = () => {
  const [show, setShow] = useState(false);

  const handleSearchClick = (e) => {
    e.preventDefault()
   setShow(!show)
  };
  return (
    <div className="header-sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <img src={img1} alt="" />
          </div>
          <div className="col-sm-8">
            <div class="language-block">
              {" "}
              <a href="https://www.keralatourism.org/languages" id="lan">
                <span class="select-lang">
                  LANGUAGES&nbsp;&nbsp;<i class="fa fa-angle-right"> </i>
                </span>
                <span class="current-lang">ENG</span>
              </a>{" "}
            </div>
            <div class="site-visit">
              <div class="visit">
                <span class="txt">
                  Visits since 1 Apr 2023{" "}
                  <i class="fa fa-caret-right" aria-hidden="true"></i>
                </span>
                <span class="count">2,584,902 </span>
              </div>
              <div class="visit visit-total">
                <span class="txt">
                  Visits since 1 Jan 2007{" "}
                  <i class="fa fa-caret-right" aria-hidden="true"></i>
                </span>
                <span class="count">44,446,491</span>
              </div>
            </div>
            <ul class="social-menu">
              <li class="top-share">
                <a 
                  href="http://www.youtube.com/keralatourism"
                  class="yt"
                
                >
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
              <li class="top-share">
                <a
                  href="https://www.facebook.com/keralatourismofficial"
                  class="fb"
           
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="top-share">
                <a
                  href="http://twitter.com/keralatourism"
                  class="tw"
              
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="top-share">
                <a
                  href="https://www.instagram.com/keralatourism/?hl=en"
                  class="ig"
              
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="top-share">
                <a
                  href="https://api.whatsapp.com/send?phone=7510512345"
                  class="wa"
              
                >
                  <i class="fa fa-whatsapp"></i>
                </a>
              </li>
              <li class="top-share">
                <a
                  href="https://in.pinterest.com/keralatourism/"
                  class="pn"
               
                >
                  <i class="fa fa-pinterest-p"></i>
                </a>
              </li>
              <li class="top-share">
                <a
                  href="https://www.linkedin.com/company/keralatourism"
                  class="lk"
                
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div class="col-sm-1"></div>
            <div class="col-sm-11 menu-wrapper">
              <div class="menu">
                <ul class="top-menu">
                  <li>
                    <a href="#experience-kerala">EXPERIENCE KERALA</a>
                  </li>
                  <li>
                    <a href="#where-to-go">WHERE TO GO</a>
                  </li>
                  <li>
                    <a href="https://www.keralatourism.org/where-to-stay">
                      WHERE TO STAY
                    </a>
                  </li>
                  <li>
                    <a href="#things-to-do">THINGS TO DO</a>
                  </li>
                  <li>
                    <a href="#plan-your-trip">PLAN YOUR TRIP</a>
                  </li>
                  <li>
                    <a href="https://www.keralatourism.org/travelcare">
                      TRAVEL CARE
                    </a>
                  </li>
                  <li>
                    <a href="https://www.keralatourism.org/ebrochures">
                      E BROCHURES
                    </a>
                  </li>
                  <li>
                    <a href="https://www.keralatourism.org/newsletter">
                      E NEWSLETTER
                    </a>
                  </li>
                  <li class="search">
                    <a href=" " id="search">
                      <i  onClick={(e)=>{handleSearchClick(e)}}class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
          
{
  show ?<div className="row">
  <div className="col-4">

  </div>
  <div className="col-8">
    <form  action="https://www.keralatourism.org/search" name="cse-search-box" id="cse-search-box" method="get" accept-charset="utf-8">

    <div class="input-group">
<input name="q" value="" class="form-control search-field" type="text" placeholder="What are you looking for?"/>
<span class="input-group-btn">
<button class="btn btn-default searchBtn" type="submit"> <i class="fa fa-search"></i> </button>
</span> </div>

    </form>

  </div>


</div>:""
}

          
        </div>
      </div>
    </div>
  );
};

export default Header1;





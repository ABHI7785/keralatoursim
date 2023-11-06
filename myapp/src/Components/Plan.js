import React from 'react';

const Plan = () => {
  return (
    <div>
      <div className="section plan-your-trip" id="plan-your-trip">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-head">
              <h2>Plan Your Trip</h2>
              <span className="sub-head"></span>
            </div>
            <div className="col-md-12 wall">
              <ul className="travel-icons">
                <li>
                  <a href="https://www.keralatourism.org/where-to-stay/">
                    <i className="hotel">
                      <img
                        loading="lazy"
                        src="https://www.keralatourism.org/images/kt/tr-icon-hotel.png"
                        alt="Where to Stay"
                      />
                    </i>
                    <span className="caption">Where to Stay</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.keralatourism.org/ebrochures/">
                    <i className="brochure">
                      <img
                        loading="lazy"
                        src="https://www.keralatourism.org/images/kt/tr-icon-brochure.png"
                        alt="E Brochures"
                      />
                    </i>
                    <span className="caption">E Brochures</span>
                  </a>
                </li>

                <li>
                  <a href="https://www.keralatourism.org/visa-requirement/">
                    <i className="visa">
                      <img
                        loading="lazy"
                        src="https://www.keralatourism.org/images/kt/tr-icon-visa.png"
                        alt="Visa on Arrival"
                      />
                    </i>
                    <span className="caption">Visa on Arrival</span>
                  </a>
                </li>
                <li>
						<a href="https://www.keralatourism.org/traveller/"><i class="info"><img loading="lazy" src="https://www.keralatourism.org/images/kt/tr-icon-info.png"  alt="Travel Info"/></i><span class="caption">Travel Info</span></a>

					</li>
                    <li>
						<a href="https://www.keralatourism.org/travelcare"><i class="messageboard"><img loading="lazy" src="https://www.keralatourism.org/images/kt/tr-icon-messageboard.png"  alt="Travel Care"/></i><span class="caption">Travel Care</span></a>
					</li>
                    <li>
						<a href="https://www.keralatourism.org/toiletsurvey"><i class="toilets"><img loading="lazy" src="https://www.keralatourism.org/images/kt/tr-icon-toilets.png"  alt="Toilets"/></i><span class="caption">Toilets</span></a>
					</li>
                    <li>
						<a href="https://www.keralatourism.org/newsletter"><i class="messageboard"><img loading="lazy" src="https://www.keralatourism.org/images/kt/tr-icon-newsletter.png"  alt="Newsletter"/></i><span class="caption">E Newsletter</span></a>
					</li>
                    

                    

                {/* Rest of the list items */}
              </ul>
            </div>
            <form
              action="https://www.keralatourism.org/where-to-stay"
              name="formSurvey1"
              id="formSurvey1"
              encType="multipart/form-data"
              method="post"
              acceptCharset="utf-8"
            >
              <input
                type="hidden"
                name="csrf_test_name"
                value="3f4769352d34590f49c477bd04bb30dc"
              />
              <div className="col-md-8 col-md-offset-2">
                <div className="row">
                  <div
                    className="hotel-search"
                    style={{ padding: '30px 2% 15px 2%', float: 'left', display: 'block' }}
                  >
                    <div className="col-md-4 form-group">
                      <h3 style={{ margin: '0.8em 0' }}>Search for Accommodation</h3>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Keyword"
                        name="name"
                        id="name"
                      />
                    </div>
                    <div className="col-md-2 form-group">
                      <button className="btn btn-success btn-md form-control custom-btn" type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i> SEARCH
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;

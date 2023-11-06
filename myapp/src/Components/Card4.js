import React from 'react';

const Card4 = () => {
  const showPackages = (packageId) => {
    // Implement the logic to handle the package click event here
    console.log('Package clicked:', packageId);
  };

  return (
    <div className='card44'>
      <div className="section packages" id="packages1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-head">
              <h2>Tour Packages</h2>
              <span className="sub-head">
                STOP. Breathe. Slow down. Embrace life. It’s time for Kerala! <br />
                Plan your trip with amazing offers and packages.
              </span>
            </div>
            <div className="col-md-12 animate-bg wall4">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="tile" style={{ cursor: 'pointer' }} onClick={() => showPackages('4')}>
                  <img
                    src="https://www.keralatourism.org/images/homecontentimage/entire-kerala.jpg"
                    alt="Entire Kerala"
                    title="Entire Kerala"
                    className="img-responsive"
                  />
                  <span className="caption-combained">Entire Kerala<small>A journey through God's Own Country</small></span>
                  <span className="cost">INR 2,000 to 118,000</span>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="tile" style={{ cursor: 'pointer' }} onClick={() => showPackages('3')}>
                  <img
                    loading="lazy"
                    src="https://www.keralatourism.org/images/homecontentimage/central-kerala.jpg"
                    alt="Central Kerala"
                    title="Central Kerala"
                    className="img-responsive"
                  />
                  <span className="caption-combained">Central Kerala<small>Trip to the soul of Kerala</small></span>
                  <span className="cost">INR 1,000 to 116,000</span>
                </div>
              </div>


              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="tile" style={{ cursor: 'pointer' }} onClick={() => showPackages('6')}>
                  <img
                    loading="lazy"
                    src="https://www.keralatourism.org/images/homecontentimage/backwater.jpg"
                    alt="Backwater"
                    title="Backwater"
                    className="img-responsive"
                  />
                  <span className="caption-combained">Backwater<small>Through the stretches of emerald</small></span>
                  <span className="cost">INR 1,000 to 60,000</span>
                </div>
              </div>


              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="tile" style={{ cursor: 'pointer' }} onClick={() => showPackages('6')}>
                  <img
                    loading="lazy"
                    src="https://www.keralatourism.org/images/homecontentimage/south-kerala.jpg"
                    alt="South Kerala"
                    title="South Kerala"
                    className="img-responsive"
                  />
                  <span className="caption-combained">South Kerala<small>A journey to remember</small></span>
                  <span className="cost">INR 1,000 to 175,000</span>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="tile" style={{ cursor: 'pointer' }} onClick={() => showPackages('6')}>
                  <img
                    loading="lazy"
                    src="https://www.keralatourism.org/images/homecontentimage/hill-station.jpg"
                    alt="Hill Station"
                    title="Hill Station"
                    className="img-responsive"
                  />
                  <span className="caption-combained">Hill Station<small>Explore the lush mist-clad hill stations</small></span>
                  <span className="cost">INR 2,000 to 46,000</span>
                </div>
              </div>


              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="tile" style={{ cursor: 'pointer' }} onClick={() => showPackages('6')}>
                  <img
                    loading="lazy"
                    src="https://www.keralatourism.org/images/homecontentimage/honeymoon.jpg"
                    alt="Honeymoon"
                    title="Honeymoon"
                    className="img-responsive"
                  />
                  <span className="caption-combained">Honeymoon<small>Celebrate your romance</small></span>
                  <span className="cost">INR 2,000 to 150,000</span>
                </div>
              </div>
              

              {/* ... (remaining tiles with similar changes) ... */}

              <div className="find-more text-center">
                <a href="https://www.keralatourism.org/service-providers-packages" className="kt-btn" title="FIND MORE PACKAGES">
                  FIND MORE PACKAGES &nbsp;<i className="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;

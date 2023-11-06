import React from 'react';

const Gallery = () => {
  return (
    <div>
      <div className="section gallery">
        <div className="section-head">
          <h2>Explore Photo Gallery</h2>
          <span className="sub-head"></span>
        </div>
        <div className="gallery-isotope col-6">
          <div className="gallery-content">
            <div className="item-isotope">
              <div className="gallery_item">
                <a href="https://www.keralatourism.org/photo-gallery/beaches">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://www.keralatourism.org/images/homecontentimage/mobile/img-13.jpg"
                    />
                    <source
                      media="(max-width: 1023px)"
                      srcSet="https://www.keralatourism.org/images/homecontentimage/tab/img-13.jpg"
                    />
                    <source
                      media="(min-width:1024px)"
                      srcSet="https://www.keralatourism.org/images/homecontentimage/desktop/img-13.jpg"
                    />
                    <img
                      src="https://www.keralatourism.org/images/homecontentimage/desktop/img-13.jpg"
                      alt="Beaches"
                      loading="lazy"
                    />
                  </picture>
                  <span className="text">Beaches</span>
                </a>
              </div>
            </div>
            <div className="item-isotope">
      <div className="gallery_item">
        <a href="https://www.keralatourism.org/photo-gallery/kerala-panorama">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://www.keralatourism.org/images/homecontentimage/mobile/panorama.jpg"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="https://www.keralatourism.org/images/homecontentimage/tab/panorama.jpg"
            />
            <source
              media="(min-width:1024px)"
              srcSet="https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg"
            />
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg"
              alt="Kerala Panorama"
              loading="lazy"
            />
          </picture>
          <span className="text">Kerala Panorama</span>
        </a>
      </div>
    </div>
    <div className="item-isotope">
      <div className="gallery_item">
        <a href="https://www.keralatourism.org/photo-gallery/kerala-panorama">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://www.keralatourism.org/images/homecontentimage/mobile/panorama.jpg"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="https://www.keralatourism.org/images/homecontentimage/tab/panorama.jpg"
            />
            <source
              media="(min-width:1024px)"
              srcSet="https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg"
            />
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg"
              alt="Kerala Panorama"
              loading="lazy"
            />
          </picture>
          <span className="text">Kerala Panorama</span>
        </a>
      </div>
    </div>

            {/* Other gallery items... */}

          </div>
        </div>
        <div className="find-more text-center" style={{ marginBottom: '30px' }}>
          <a href="https://www.keralatourism.org/photo-gallery/" className="kt-btn">
            BROWSE OUR GALLERY &nbsp;
            <i className="fa fa-picture-o" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

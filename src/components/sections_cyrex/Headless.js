import React, { useState } from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { useTranslation } from 'react-i18next';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTilesPen = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const { t } = useTranslation();
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  return (
    <section
      {...props}
      // className={outerClasses}
      className="section-model"
      id="section-model"
    >
      <div className="container-sm">
          <div className="u-center-text">
            <h1>
            {t("section3.58")}<br />{t("section3.59")}
            </h1>
            <div className="container-sm">
              <p className="u-center-text" style={{ color: '#fff' }}>
              {t("section3.60")}<br />
              {t("section3.61")}<br />
                
              {t("section3.62")}<br />
              {t("section3.63")}<br />
              {t("section3.64")}
              </p>
            </div>
          </div>
          <div className="hero-figure illustration-element-01" >
            <a
              data-video="https://player.vimeo.com/video/528246696?h=dda5122a3e"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/load3.PNG')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/528246696?h=dda5122a3e"
            videoTag="iframe" />
        </div>
    </section>
  );
}

FeaturesTilesPen.propTypes = propTypes;
FeaturesTilesPen.defaultProps = defaultProps;

export default FeaturesTilesPen;
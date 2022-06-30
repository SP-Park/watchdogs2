import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { useTranslation } from 'react-i18next';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero_cyrex = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
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

  const [videoModalActive1, setVideomodalactive1] = useState(false);

  const openModal1 = (e) => {
    e.preventDefault();
    setVideomodalactive1(true);
  }

  const closeModal1 = (e) => {
    e.preventDefault();
    setVideomodalactive1(false);
  }   




  const outerClasses = classNames(
    'hero_cyrex section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero_cyrex-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-xl">
        <div className={innerClasses}>
          <div className="hero_cyrex-content">
          <h1 className="mt-0 mb-16 heading-secondary" >
          {t("section3.1")}<br />
          </h1>
            <br />
            <br />
            <br />
            <br />
            
            <div class="row">
                <div class="col-1-of-2">

                    <div className="cyrex-box hero-figure illustration-element-01" >
                      <a
                        data-video="https://www.youtube.com/embed/z5iZisUjSbI"
                        href="#0"
                        aria-controls="video-modal1"
                        onClick={openModal}
                      >
                        <Image
                          className="has-shadow"
                          src={require('./../../assets/images/pentest.PNG')}
                          alt="Hero"
                          width={800}
                          height={504} />
                      </a>
                      <div className="testimonial-item-content">
                        <h4 className="text-sm mb-0">
                        {t("section3.2")}<br />
                        {t("section3.3")}
                        </h4>
                            </div>
                    </div>

                    <Modal
                      id="video-modal1"
                      show={videoModalActive}
                      handleClose={closeModal}
                      video="https://www.youtube.com/embed/z5iZisUjSbI"
                      videoTag="iframe" />
                </div>
                <div class="col-1-of-2">
                    {/* <div class="card"> */}
                      
                    <div className="cyrex-box hero-figure illustration-element-01" >
                      <a
                        data-video="https://player.vimeo.com/video/528246696?h=dda5122a3e"
                        href="#0"
                        aria-controls="video-modal2"
                        onClick={openModal1}
                      >
                        <Image
                          className="has-shadow"
                          src={require('./../../assets/images/loadtest.PNG')}
                          alt="Hero"
                          width={800}
                          height={504} />
                      </a>
                      <div className="testimonial-item-content" >
                        <h4 className="text-sm mb-0" >
                        {t("section3.4")}<br />
                        {t("section3.5")}
                        </h4>
                      </div>
                    </div>

                    <Modal
                      id="video-modal2"
                      show={videoModalActive1}
                      handleClose={closeModal1}
                      video="https://player.vimeo.com/video/528246696?h=dda5122a3e"
                      videoTag="iframe" />
                </div>
            </div>


            <br />
          <div className="logos">
            <img src={require('./../../assets/images/logo1.png')} />
            <img src={require('./../../assets/images/logo2.png')} />
            <img src={require('./../../assets/images/logo1.png')} />
            <img src={require('./../../assets/images/logo2.png')} />
            {/* <img src={require('./../../assets/images/logo1.png')} /> */}
            <img src={require('./../../assets/images/logo2.png')} />
            <img src={require('./../../assets/images/logo1.png')} />
          </div>



            <div className="container-xs">
              <p className="m-0 mb-32 heading-tertiary">
              {t("section3.6")}<br /> 
              {t("section3.7")}
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero_cyrex.propTypes = propTypes;
Hero_cyrex.defaultProps = defaultProps;

export default Hero_cyrex;
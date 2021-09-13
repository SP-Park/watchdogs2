import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
           <source src={require('./../../assets/images/World - 1992.mp4')} type="video/mp4"/>
           {/* <source src={require('./../../assets/images/video.webm')} type="video/webm"/> */}
                    Your browser is not supported!
         </video>
      </div>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            {/* <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{ color: '' }}> */}
            <h1 className="mt-0 mb-16 heading-secondary" data-reveal-delay="200" style={{ color: '' }}>

              게임보안 <span className="heading-secondary-lotate">클라이언트</span> 부터 <span className="heading-secondary-lotate">서버</span>까지
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                클라이언트 보호: 글로벌 1위 안티 템퍼 / 안티 치트 솔루션 <br /> API 엔드포인트: 20년 경력의 게임 전문회사에 의한 침투테스트.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="/wdog2/v1/product">
                    클라이언트 보호
                    </Button>
                  <Button tag="a" color="primary" wideMobile href="#">
                    API 엔드보인트 보호
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube.com/embed/z5iZisUjSbI"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/cyrex-video-placeholder.PNG')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/z5iZisUjSbI"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
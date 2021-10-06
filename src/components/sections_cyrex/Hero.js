import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

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
            게임 보안 해결책을 드립니다. <br />
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
                          게임 전문 침투 테스트: <br />윤리적 해킹 및 사이버 범죄 관련 광범위한 조사를 통해 귀사를 위한 최고의 디지털 자산 보호 솔루션을 구축할 수 있습니다.
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
                          로드테스트: <br />부하 테스트 서비스는 트래픽이 폭주할 때 비디오 게임이 어떤 결과를 가져올 수 있는지 정확히 알려 드립니다.
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
                전문 개발 회사이기도 한 사이렉스. <br /> 개발자 및 보안 컨설턴트로서 20년간 게임 전문 침투 테스트를 수행해 왔습니다.
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
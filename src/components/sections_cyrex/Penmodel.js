import React, { useState } from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

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
              침투 테스트 3 모델
            </h1>
            <div className="container-sm">
              <p className="u-center-text" style={{ color: '#fff' }}>
                블랙 박스: 최소한의 정보 및 권한제공, 가장 현실적인 침투 테스트 <br />
                그레이 박스: 부분적인 정보제공, 모든 권한제공, 가장 흔한 침투 테스트 <br />
                화이트 박스: 소스코드를 포함한 모든 정보 제공, 모든 권한제공, 가장 완벽한 침투 테스트 <br />
              </p>
            </div>
          </div>
          <div className="hero-figure illustration-element-01" >
            <a
              data-video="https://player.vimeo.com/video/528250523?h=4aa7f6d420"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/models.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/528250523?h=4aa7f6d420 "
            videoTag="iframe" />
        </div>
    </section>
  );
}

FeaturesTilesPen.propTypes = propTypes;
FeaturesTilesPen.defaultProps = defaultProps;

export default FeaturesTilesPen;
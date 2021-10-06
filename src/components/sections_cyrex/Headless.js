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
              하드웨어에 얽매이지 않는 <br />헤드리스 스크립트
            </h1>
            <div className="container-sm">
              <p className="u-center-text" style={{ color: '#fff' }}>
                헤드리스 솔루션은 실제 실행 중인 클라이언트를 사용하여 부하 테스트를 수행하는<br />
                대신 가상 머신의 플레이어와 사용자를 시뮬레이션합니다. <br />
                
                잠재적인 수천 명의 플레이어와 사용자를 시뮬레이션하는 데 <br />
                필요한 RAM이나 CPU 부하가 필요하지 않습니다.<br />
                Unreal, Unity 및 맞춤형 네트워킹 서비스와 통합할 수 있습니다.
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
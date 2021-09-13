import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const FeaturesSplit = ({
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
           <source src={require('./../../assets/images/Man catches a wave.mp4')} type="video/mp4"/>
           {/* <source src={require('./../../assets/images/video.webm')} type="video/webm"/> */}
                    Your browser is not supported!
         </video>
      </div>
      <div className="container-lg">
        <div className={innerClasses}>
          <div className="hero-content">
            {/* <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{ color: '' }}> */}
            <h1 className="mt-0 mb-16 heading-secondary" data-reveal-delay="200" style={{ color: '' }}>

              게임보안은 <span className="heading-secondary-lotate">데누보</span>에게 맡기세요. 
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                데누보: 적용, 1차 성능 및 보안 테스트까지 수행.<br /> 개발 및 보안 담당자: 게임 일정에만 집중.
                </p>
            </div>
          </div>

          <div className="hero-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800" style={{ height: '100%' }}>
          {/* <div className="composition"> */}
            <img
              className="composition__photo composition__photo--p1"
              src={require('./../../assets/images/process.PNG')}
              alt="process" 
              width={896}
              height={504}
              />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                제공해 드리는 스크립트를 통해 <br /> <span className="heading-secondary-lotate">10분</span>내 클라이언트 난독화 및 위변조 방지 적용 완료.<br /> 성능에 영향이 없는 글로벌 1위의 클라이언트 보안 적용.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
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
    'hero-v1 section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-v1-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container-lg">
        <div className={innerClasses}>
          <div className="hero-v1-content">
            <h1 className="mt-0 mb-16 heading-secondary">

              게임보안은 <span className="heading-secondary-lotate">데누보</span>에게 맡기세요. 
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32"  style={{ color: '#fff' }}>
                데누보: 적용, 1차 성능 및 보안 테스트까지 수행.<br /> 개발 및 보안 담당자: 게임 일정에만 집중.
                </p>
            </div>
          </div>

          <div className="hero-v1-figure" style={{ height: '100%' }}>
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
              <p className="m-0 mb-32"  style={{ color: '#fff' }}>
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
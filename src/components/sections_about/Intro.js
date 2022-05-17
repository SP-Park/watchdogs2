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
    'hero_about section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero_about-inner section-inner',
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
          <div className="hero_about-content">
            <h1 className="mt-0 mb-16">
              리더 
            </h1>
          </div>
          <br />
          <br />
          <div className='row'>
            <div className='col-1-of-2'>
              <div className="hero_about-figure" style={{ height: '100%' }}>
                <img
                  className="composition__photo composition__photo--p1"
                  src={require('./../../assets/images/process.PNG')}
                  alt="process" 
                  width={896}
                  height={504}
                  />
              </div>
              <br />
              <div className="container-xs">
                <p className="m-0 mb-32"  style={{ color: '#fff' }}>
                  CEO
                </p>
              </div>
              <div className="container-xs">
                <p className="m-0 mb-32"  style={{ color: '#fff' }}>
                  제공해 드리는 스크립트를 통해 <br /> <span className="heading-secondary-lotate">10분</span>내 클라이언트 난독화 및 위변조 방지 적용 완료.<br /> 성능에 영향이 없는 글로벌 1위의 클라이언트 보안 적용.
                </p>
              </div>
              <br />
            </div>
            <div className='col-1-of-2'>
              <div className="hero_about-figure" style={{ height: '100%' }}>
                <img
                  className="composition__photo composition__photo--p1"
                  src={require('./../../assets/images/director.png')}
                  alt="process" 
                  width={896}
                  height={504}
                 />
              </div>
              <br />
              <div className="container-xs">
                <p className="m-0 mb-32"  style={{ color: '#fff' }}>
                  DIRECTOR: Tony Shin
                </p>
              </div>
              <div className="container-xs">
                <p className="m-0 mb-32"  style={{ color: '#fff' }}>
                  제공해 드리는 스크립트를 통해 <br /> <span className="heading-secondary-lotate">10분</span>내 클라이언트 난독화 및 위변조 방지 적용 완료.<br /> 성능에 영향이 없는 글로벌 1위의 클라이언트 보안 적용.
                </p>
              </div>
              <br />
            </div>
          </div>
          
          <br />
          
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
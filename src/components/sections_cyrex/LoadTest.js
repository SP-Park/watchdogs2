import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTilesLoad = ({
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


  return (
    <section
      {...props}
      // className={outerClasses}
      className="section-many"
      id="section-many"
    >
      <div className="container" style={{  }}>
        <div class="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary">
                트래픽 용량을 추측해서 서비스 하시나요?
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
                지금 바로 소프트웨어 개발 전문가에게 문의하여 시스템이 어려움을 겪거나 장애가나기 전에 얼마나 많은 지원을 받을 수 있는지 알아보십시오.
              </p>
            </div>
            <div className="u-center-text">
              <a href="#" target='blank' class="btn btn--white" style={{ color: '#777777' }}>와치독스에 연락하기  &rarr;</a>
          </div>
        </div>
            <div class="row">

            </div>
      </div>
    </section>
  );
}

FeaturesTilesLoad.propTypes = propTypes;
FeaturesTilesLoad.defaultProps = defaultProps;

export default FeaturesTilesLoad;
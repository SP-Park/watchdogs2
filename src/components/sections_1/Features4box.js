import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import SecurityIcon from '@material-ui/icons/Security';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import BuildIcon from '@material-ui/icons/Build';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
      className="section-box"
      id="section-box"
    >
      <div className="container-xl">
      <div class="u-center-text u-margin-bottom-big">
                <h2 >
                  데누보를 선택해야 하는 이유
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <SecurityIcon style={{fontSize: '68px', color: '#28b485' }}/>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small">글로벌 1위의 기술력</h3>
                    <p class="feature-box__text">
                      글로벌 해커와 오랫동안 싸워가며 발전시켜온 기술력으로 2021년 명실상부한 글로벌 1위 기술력을 인정 받았습니다.
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <BuildIcon style={{fontSize: '68px', color: '#28b485' }}/>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small">쉽고 편한 적용</h3>
                    <p class="feature-box__text">
                      제조사에서 적용부터 1차 테스트까지 모두 수행하므로 개발일정에 보안을 고려하지 않아도 됩니다.
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <SentimentVerySatisfiedIcon style={{fontSize: '68px', color: '#28b485' }}/>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small">즐거운 유저 경험</h3>
                    <p class="feature-box__text">
                      성능에 영향이 없고 개인정보 등 유저가 느낄 수 있는 불만 요소가 전혀 없어 보안 프로그램으로 인한 불만이 없습니다.
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <ContactPhoneIcon style={{fontSize: '68px', color: '#28b485' }}/>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small">글로벌 1위의 서비스</h3>
                    <p class="feature-box__text">
                      지원이 걱정되시나요? 모든 지원을 제조사에서 24시간 직접하며 초기 설계부터 성능 테스트를 완벽히 수행합니다.
                    </p>
                   </div>
                </div>
            </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
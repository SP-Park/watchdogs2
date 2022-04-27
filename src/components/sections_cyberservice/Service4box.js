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
      className="section-box-service"
      id="section-box-service"
    >
      <div className="container-xl">
      <div class="u-center-text u-margin-bottom-big">
                <h2 >
                  고객의 역량을 강화하는 맞춤형 서비스
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <SecurityIcon style={{fontSize: '68px', color: '#4682B4' }}/>
                  <h3 class="heading-tertiary-5 u-margin-bottom-small">조사 및 집행</h3>
                    <p class="feature-box__text">
                      고객의 현존하는 침해위협에 대한 360도 조사. 지역에 제한 없이 전 세계의 모든 위협을 조사하여 조치방법 제안.
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                 <SentimentVerySatisfiedIcon style={{fontSize: '68px', color: '#4682B4' }}/>
                  <h3 class="heading-tertiary-5 u-margin-bottom-small">브랜드 보호</h3>
                    <p class="feature-box__text">
                    전자 상거래 웹사이트, 소셜 미디어를 통한 복제된 클라이언트, 미디어 등의 불법 유통을 추적. 판매 및 배포 행위를 방해.
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <BuildIcon style={{fontSize: '68px', color: '#4682B4' }}/>
                  <h3 class="heading-tertiary-5 u-margin-bottom-small">위협 평가</h3>
                    <p class="feature-box__text">
                      애플리케이션 및 인프라 취약성 스캐닝, 무선 보안 테스트, 시스템 구성 검토 및 원격 액세스 취약성 테스트 보안 평가.
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <ContactPhoneIcon style={{fontSize: '68px', color: '#4682B4' }}/>
                  <h3 class="heading-tertiary-5 u-margin-bottom-small">고급 보호 서비스</h3>
                    <p class="feature-box__text">
                      위협에 대한 지속적인 모니터링. 
                      침해자의 수입원의 붕괴.
                      취약점과 데이터 누출이 발생하는 모든 곳을 보호.
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
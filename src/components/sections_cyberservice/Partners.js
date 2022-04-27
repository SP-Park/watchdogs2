import React from 'react';
import Image from '../elements/Image';
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
        <div class="u-center-text u-margin-bottom-small">
                <h2 >
                  글로벌 파트너십
                </h2>
                <br />
            </div>
            <div class="row">
                <div class="col-1-of-2">
                  <div className="cyrex-box hero-figure illustration-element-01" >
                    <h4 className="text-sm mb-0">
                      저희 팀은 글로벌 법률, 보안 컨설팅 및 법 집행 전문 지식을 보유하고 있으며,
                      전 세계 규모의 소송 업무를 준비하고 변호사 및 검사와의 풍부한 연락 경험을
                      보유하고 있습니다. 많은 경험을 통해 글로벌 다양한 법 집행기관과의 파트너십을
                      가지고 있으며 이를 이용해 궁극적으로 고객의 리스크를 줄이고 수익을 보호 할 수 있습니다.
                      <br />
                      <br />
                      - 사설 서버, 치팅툴 제작자 등에 대한 수사 및 기소 <br />
                      - 가상 화폐, 계좌 및 암시장에서 활동하는 네트워크의 비밀 침투 조사<br />
                      - 증거 작성, 법 집행 기관과의 조정, 기소를 뒷받침하는 전문가 증언 <br />
                      <br />
                      이미 존재하는 해커를 실제로 추적하여 기소하여 드립니다.
                    </h4>
                  </div>
                </div>
                <div class="col-1-of-2">
                  <div className="cyrex-box hero-figure illustration-element-01" >
                    <Image
                        className="has-shadow"
                        src={require('./../../assets/images/cyberservice/law.png')}
                        alt="Hero"
                        width={300}
                        height={300} />
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
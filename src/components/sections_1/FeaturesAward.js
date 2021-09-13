import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import SecurityIcon from '@material-ui/icons/Security';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesAward = ({
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
    <section class="section-book">
      <div className="container">
    {/* <div class="row"> */}
        <div class="book">
            <div class="book__form">
                    <div style={{ marginBottom: '0px' }}>
                        <h2 class="heading-secondary">
                            2021 Cyber Security Awards GOLD WINNER
                        </h2>
                    </div>
                    <div>
                     <h3 class="heading-tertiary-lotate u-margin-bottom-small">1. 안티 템퍼 - 5개</h3>
                        <p class="paragraph-1">
                          - 클라이언트 보안 (난독화 및 위변조 방지) <br />
                          - Digital Rights Management <br />
                          - reach Protection <br />
                          - 런타임 애플리케이션 보호 <br />
                          - 런타임 애플리케이션 자가보호 <br />
                        </p>
                        <h3 class="heading-tertiary-lotate u-margin-bottom-small">2. 안티 치트 및 관리 웹 - 8개</h3>
                        <p class="paragraph-1">
                          - APT 방어 <br />
                          - 봇 방어 <br />
                          - 엔드포인트 보안 <br />
                          - GDPR 개인정보 규정 준수 <br />
                          - 고객 서비스 관리 <br />
                          - 보안 자동화 <br />
                          - 유저 행위 분석 <br />
                          - 데이터 중심 보안 (Data-centric Security)<br />

                        </p>
                    </div>
                    <div >
                    <a href="https://cybersecurity-excellence-awards.com/2021-cybersecurity-product-service-awards-winners-and-finalists/" target='_blank' class="btn btn--green">Read Post</a>
                    </div>
            </div>
        {/* </div> */}
    </div>
    </div>
</section>
  );
}

FeaturesAward.propTypes = propTypes;
FeaturesAward.defaultProps = defaultProps;

export default FeaturesAward;
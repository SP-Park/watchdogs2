import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '안티 치트의 글로벌 1위',
    paragraph: '글로벌 수준의 해커에 대응하는 글로벌 1위의 안티 치트 Denuvo.'
  };

  return (
    <section
      {...props}
      // className={outerClasses}
      className="section-tours"
    >
      <div className="container-xl">
        <div className={innerClasses}>
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
             안티 치트의 글로벌 1위
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
              글로벌 수준의 해커에 대응하는 글로벌 1위의 안티 치트 Denuvo.<br /> 
                </p>
            </div>
          </div>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   Securing PC games from crackers and cheaters
                </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                  2022년 8개 부문 글로벌 <br />1위 수상한 안티치트
                  </h3>
                <p className="m-0">
                  Denuvo Anti-Cheat는 <br />
                  경쟁 멀티플레이어 게임에서 <br />
                  부정행위를 실시간으로 탐지하고 <br />
                  게임 퍼블리셔와 개발자에게 <br />
                  백엔드 보고서를 제공하여 <br />
                  플레이어 활동을 검토하고 <br />
                  부정행위자에 대한 대응 방법을 <br />
                  결정할 수 있도록 합니다.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                >
                <Image
                  src={require('./../../assets/images/anticheat.PNG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Identifying and protecting vulnerabilities: profiling
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                  적용시 취약점 식별 및 보호 
                  </h3>
                <p className="m-0">
                  적용 전 전문가팀이 게임의 중요한 부분,<br />
                  취약한 부분을 찾습니다.<br />
                  수집된 프로파일링 데이터를 기반으로 <br />
                  정적 분석을 더해 게임보호를 위한<br />
                  최적의 설정을 찾습니다. <br />
                  프로파일시 성능에 영향을 주는<br />
                  영역도 미리 조사하여 성능에 영향을 미치지 <br />
                  않는 설정도 반영됩니다. <br />
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                >
                <Image
                  src={require('./../../assets/images/identity.jpg')}
                  alt="Features split 02"
                  style={{ width: '812px', height: '400px' }}
                />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Cyber Services: taking security one step further
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                  보안을 한단계 더 강화시키는 전문가 팀
                  </h3>
                <p className="m-0">
                  퍼블리셔는 진화하는 위협으로부터 게임, <br />브랜드 및 수익을 보호하기 위해 <br />사전 예방적이고 유연하며 대응력이 <br />뛰어난 사이버 서비스 팀이 필요합니다.<br />
                  당사의 전담 글로벌 사이버 서비스 팀에는 <br />다년간의 법 집행과 법률 경험을 갖춘 <br />사이버 보안 및 컴퓨터 법의학 분석가가 <br />포함되어 있습니다. 

                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                >
                <Image
                  src={require('./../../assets/images/cyber-services.png')}
                  alt="Features split 03"
                  style={{ width: '612px', height: '400px' }} 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
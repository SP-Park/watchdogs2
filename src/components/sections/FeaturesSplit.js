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
    title: '게임 보안을 위한 최상의 절차',
    paragraph: '게임 출시 후 매번 나오는 치팅, 이제는 제대로 된 방법이 필요합니다.  와치독스 글로벌 새로운 트렌드를 제시합니다.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Denuvo Anti-Tamper
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                  클라이언트: 난독화 및 위변조 방지 구축
                  </h3>
                <p className="m-0">
                  게임 바이너리 난독화 및 위변조 방지의 글로벌 1위<br /> 데누보를 고려하십시오 <br />
                  해커 집단에서 포기 선언을 한 전례도 있을 만큼 <br />실전에 강합니다. <br />
                  하지만 적용은 간단합니다. 최종 결과물에 적용되므로 아무런 코드 수정도, 성능의 제약도 없습니다. <br />
                  개발 노력이 전혀 들지 않으므로 <br /> 보안은 걱정하지 않으셔도 됩니다. 
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mobile-game-protection-3.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobilet" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Denuvo Anti-Cheat
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                  게임 치팅 방지를 위한 보호 구축
                  </h3>
                <p className="m-0">
                  글로벌 1위 수상의 강력한 게임 안티 치트 솔루션 <br />데누보를 고려 하십시오<br />
                  모바일, PC, 콘솔을 모두 지원하며 '봇, 엔드포인트 <br />보안, APT 방어' 등 성능 측면에서 1위 입니다. <br />
                  서비스 측면이 걱정이신가요? <br />고객서비스 부분도 1위를 달성하였습니다. <br />
                  법 대응까지 가능한 포렌식 전문가가 포함된 <br />전문가 집단이 직접 지원해 드립니다. <br />
                  유럽의 GDPR를 완벽히 준수하여 개인정보 침해의 <br />우려가 없습니다. <br />
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Anti_Cheat.png')}
                  alt="Features split 02"
                  width={528}
                  height={296} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Cyrex PenetrationTest
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                  API 엔드포인트 보안의 점검
                  </h3>
                <p className="m-0">
                  네트워크 구간의 보안은 '서버에서의 인증'과 'HTTPS'의 사용입니다. <br />
                  과연 제대로 하고 있을까요? <br /> 출시 후에 문제가 된 적은 없었을까요? <br />
                  20년간 게임 서버 API만 15000여개 이상 <br />진단한 노하우로 정확하게 <br />
                  문제점과 해결책을 제시해 드립니다. 
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Cyrex_Pentest.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
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
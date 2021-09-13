import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '세계에서 검증받은 1위의 솔루션으로 게임 자산을 보호하세요.',
    paragraph: '2021 Cybersecurity 13개 부분 글로벌 1위 수상 — Denuvo'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <hr />
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/2021Cybersecurity.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Anti-Cheat
                    </h4>
                  <p className="m-0 text-sm">
                    APT 방어<br />
                    봇 방어<br />
                    엔드포인트 보안 <br />
                    GDPR 개인정보 규정 준수 <br />
                    고객 서비스 관리 <br />
                    보안 자동화 <br />
                    유저 행위 분석
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/2021Cybersecurity.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Anti-Tamper
                    </h4>
                  <p className="m-0 text-sm">
                    클라이언트 보안 <br />(난독화 및 위변조 방지)<br />
                    Digital Rights Management <br />
                    Breach Protection <br />
                    런타임 애플리케이션 보호 <br />
                    런타임 애플리케이션 자가보호
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/2021Cybersecurity.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Telemetry
                  </h4>
                  <p className="m-0 text-sm">
                    데이터 중심 보안 <br /> 
                    (Data-centric Security)
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div> */}

            <br />
            <br />
            <div>
              <p className="m-0 mb-32 reveal-from-bottom heading-secondary" data-reveal-delay="400">
                실제 중국 등 글로벌 해커들과 싸워가며 쌓아온 노하우로<br />
                2021년 최신 글로벌 1위 기술력을 인정 받았습니다. <br/>
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
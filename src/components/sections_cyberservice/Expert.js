import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
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

  return (
    <section
      {...props}
      // className={outerClasses}
      className="section-tours"
    >
      <div className="container-xl">
        <div className={innerClasses}>
          <div class="u-center-text u-margin-bottom-medium">
            <h2 class="heading-secondary">
             국제 전문가 집단, 자체 법의학 연구소 보유
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
                글로법 사법기관과 연계하여 <br />
                지적 재산권 침해에 대한 사법 처리 성공 오랜 경험 보유
              </p>
            </div>
          </div>

          <div className={splitClasses}>

            <div className="row support-2" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'left' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   전문가 집단
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                  침해 행위의 적극적(사법) 저지
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                  저희 팀에는 <br />
                  수사관, 법률 전문가, 법 집행 전문가, 암호화 전문가, <br />법의학 분석가, 보안 소프트웨어 엔지니어 및 콘텐츠 보안 <br />사고 리더가 있습니다.<br />

                  그들의 강력한 기술, 네트워크, 소셜 미디어 및 보안 기술은 민사 및 형사 기소, 심지어 경찰 급습 및 의뢰에서<br /> 고객의 지적 재산권 침해를 성공적으로 식별, 조사하고<br /> 재판을 위한 증거 수집 및 증인으로 참여하여 사법 처리 성공까지 지원했습니다.
                </p>
              </div>
            </div>

            <div className="row support-3" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'center' }} >
                ''
              </div>
              <div className="col-1-of-2" style={{ textAlign: 'right' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   인텔리전스
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                  위협 데이터, 통찰력 보고
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                 전문 분석가의 상호 작용을 자동화된 도구와 결합하면 <br />개방형 딥 웹 및 다크 웹에서 광범위한 위협에 대한 데이터를 탐지하고 수집할 수 있습니다.<br />
                 수집된 데이터는 각 고객의 특정 요구 사항에 따라 <br />분석, 분류 및 평가됩니다. <br />
                 고객 비즈니스에 대한 각 위협에는 <br />위협 심각도 등급과 권장 완화 조치가 포함됩니다. <br />
                 이러한 과정을 통해 맞춤형 통찰력과 <br />실행 가능한 보고서를 제공해 드릴수 있습니다.
                </p>
              </div>
            </div>

            <div className="row support-4" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'left' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   고객 수익 보호
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                  사설 서버 등 <br />침해 컨텐츠의 신속한 제거
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                 주요 글로벌 온라인 마켓플레이스, <br />
                 소셜 미디어 플랫폼 및 웹사이트에서 <br />
                 지적 재산권을 침해하는 불법 복제 및 위조 제품을 <br />
                 신속하게 식별합니다. 고객이 설정한 정책에 따라 <br />
                 침해 광고를 신속하게 시행하고 제거할 수 있습니다. <br />
                 웹 크롤링, 인적 분석, 효과적인 규정 준수 및 <br />
                 전문적인 보고를 통해 독특하고 포괄적인 수준의 서비스를 <br />제공합니다.
                </p>
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
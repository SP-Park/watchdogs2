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
          <div class="u-center-text u-margin-bottom-medium">
            <h2 class="heading-secondary">
             24시간 / 7일 무중단 기술지원
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
                기술지원이 걱정되세요? <br />
                제조사에서 직접 상시 지원해 드립니다. 
              </p>
            </div>
          </div>

          <div className={splitClasses}>

            <div className="row support" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'left' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   이슈가 발생하지 않는 솔루션
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                  제조사 주도 적용, 기술지원 시스템
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                  Denuvo 는 <br />적용 단계에서 부터 제조사에서 모든 작업을 수행합니다.<br />
                  성능에 영향을 주는 부분, 보안 이슈가 중요한 부분을 <br />
                  포렌식 전문가가 포함된 전문 팀이 면밀히 분석합니다.<br />
                  <br />
                  프로파일링, 정적분석을 토대로 정책을 수립하고 <br />
                  전담 QA 팀이 런타임 테스트까지 완료합니다. <br />
                  <br />
                  런타임 이슈 발생율이 현재까지 중국, 일본 기준 0% 입니다. <br />
                </p>
              </div>
            </div>

            <div className="row support-1" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'center' }} >
                ''
              </div>
              <div className="col-1-of-2" style={{ textAlign: 'right' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   이슈가 발생하지 않는 솔루션
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                  뛰어난 기술지원 전담팀
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                  배포 후에도 고객사의 게임 상황을 모니터링 합니다.<br />
                  모든 고객사는 전담 기술팀이 할당되며  <br />
                  24시간 지원을 받을 수 있습니다.<br />
                  <br />
                  Denuvo의 헌신적인 지원팀의 노력으로  <br />
                  대형 온라인 게임들도 이슈 발생률이 2% 이내이며 <br />
                  발생하는 이슈는 적용 시의 문의사항들입니다. <br />
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
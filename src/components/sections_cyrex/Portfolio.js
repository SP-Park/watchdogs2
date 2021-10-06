import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';

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
      className="section-portfolio"
      id="section-portfolio"
    >
        <div class="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary">
                포트 폴리오
            </h2>
        </div>

        <div class="row portfolio u-margin-bottom-small">
            <div class="col-1-of-3">
                <figure class="portfolio__shape">
                    <img src={require('./../../assets/images/tera.jpeg')} alt="Person on a tour" class="portfolio__img"/>
                    <figcatption class="portfolio__caption">TERA</figcatption>
                </figure>
            </div>

            <div class="col-2-of-3 portfolio__text">
                <h3 class="heading-tertiary u-margin-bottom-small">테라 침투테스트 <br />published by Gameforge</h3>
                <p>
                    유저가 반복적으로 퀘스트 완료 및 보상 수령이 가능한 위험을 포함하여 다수의 크리티컬한 위협 발견,
                    조치 후 확인테스트를 거쳐 보완 완료 <br />
                    <span className="heading-secondary-lotate">퍼블리셔 평: 사이렉스의 침투테스트는 훌륭하다. 광범위한 분석과 위험 평가의 결과를 바탕으로 위협요소를 완벽히 패치할 수 있었다.  </span>
                </p>
            </div>
        </div>
        <div class="row portfolio u-margin-bottom-small">
            <div class="col-1-of-3">
                <figure class="portfolio__shape">
                    <img src={require('./../../assets/images/doom.jpeg')} alt="Person on a tour" class="portfolio__img"/>
                    <figcatption class="portfolio__caption">DOOM ETERNAL</figcatption>
                </figure>
            </div>

            <div class="col-2-of-3 portfolio__text">
                <h3 class="heading-tertiary u-margin-bottom-small">둠 이터널 침투테스트 <br />published by Bethesda</h3>
                <p>
                    우선순위가 낮은 것부터 크리티컬한 것까지 많은 취약점 발견,
                    게임사, 퍼블리셔, 유저들에게 많은 피해를 입혔을 가능성이 존재하는 크리티컬한 취약점 존재,
                    수정 및 반복 테스트를 거쳐 조치완료
                    <span className="heading-secondary-lotate">Bethesda팀과의 보안 서약에 따라 공개할 수 없으나 보이지 않았던 주요 취약점들을 확인 후 패치하여 Bethesda팀은 매우 만족하였다.</span>
                </p>
            </div>
        </div>
        <div class="row portfolio u-margin-bottom-small">
            <div class="col-1-of-3">
                <figure class="portfolio__shape">
                    <img src={require('./../../assets/images/metin2.jpg')} alt="Person on a tour" class="portfolio__img"/>
                    <figcatption class="portfolio__caption">METIN2</figcatption>
                </figure>
            </div>

            <div class="col-2-of-3 portfolio__text">
                <h3 class="heading-tertiary u-margin-bottom-small">메틴2 침투테스트 <br />published by Gameforge</h3>
                <p>
                    PvP, PvE, 게임 시스템 등을 테스트,<br />
                    다수의 크리티컬한 위험을 가지는 취약점을 발견, <br />
                    종합 보고서에 가장 적절한 조치방법을 가이드하여 수정완료
                    <span className="heading-secondary-lotate">Gameforge에서는 전체 게임에 대해 침투테스트를 수행하기로 결정.</span>
                </p>
            </div>
        </div>

        <div class="u-center-text u-margin-top-medium u-margin-bottom-small">
            <a href="https://cyrextech.net/portfolio/" target='_blank' class="btn-text">Read all Portfolio &rarr;</a>
        </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTilesPen = ({
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
      className="section-many"
      id="section-many"
    >
      <div className="container" style={{  }}>
        <div class="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary">
                게이머이자 개발자, 그리고 보안전문가
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
               침투 테스트 및 사이버 보안 서비스는 <br />안전한 온라인 게임 환경을 조성하기 위한 것입니다. <br />
               게임 수정과 패킷 조작을 통한 게임 내 부정행위로 인한 손실은, <br />
               눈덩이처럼 불어나 수익과 고객 손실을 초래할 수 있습니다.<br />
               <br />
               게임 보안 분야에서 20년이 넘는 경험을 쌓은 저희 팀은 <br />
               귀사의 시스템 보안의 한계를 테스트하고 확장하기 위해 <br />
               무엇을 찾아야 하는지 정확히 알고 있습니다.<br />
               <br />

              우리는 플레이어의 사고방식을 도입하고 <br />
              FPS, MMORPG를 포함한 다양한 장르에 서비스를 제공합니다.<br />
              게임 전문가로서, 우리는 어떻게 게임이 디지털 공간에서 <br />
              공격 받을 수 있고 또 공격 받을 것인지에 관한 한 <br />
              이 모든 것을 경험하였습니다.<br />
              <br />
              <span className="heading-secondary-lotate">
              플레이어와 보안 전문가로서 다양한 관점에서 취약점을 찾고 <br />
              최적의 솔루션을 제공합니다.
              </span>
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTilesPen.propTypes = propTypes;
FeaturesTilesPen.defaultProps = defaultProps;

export default FeaturesTilesPen;
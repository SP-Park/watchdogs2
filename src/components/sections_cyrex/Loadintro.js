import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

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
      className="section-loadintro"
      id="section-loadintro"
    >
      <div className="container" style={{  }}>
        <div class="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary">
                로드 테스트: 게임 부하 테스트
            </h2>

            <div className="container-xs">
             <Image
                  className="has-shadow"
                  src={require('./../../assets/images/load2.PNG')}
                  alt="Hero"
                  width={896}
                  height={504} />
              <br />
              <p className="m-0 mb-32"  style={{ color: '#fff' }}>
                응용 프로그램의 로드 테스트는 지속적인 작동에 필수적입니다.<br />
                시스템이 어려움을 겪거나 실패하기 전에 <br />
                얼마나 많은 지원을 받을 수 있는지 아는 것이 중요합니다. <br />
                서비스나 애플리케이션에 관계없이 <br />
                당사의 부하 테스트는 필요한 사용자 수를 시뮬레이션합니다.<br />
                <br />
                헤드리스 솔루션을 사용하면 하드웨어 제한에 얽매이지 않습니다. <br />
                필요한 만큼의 트래픽을 제공하여 애플리케이션이 부하를 처리하는 <br />
                방법뿐만 아니라 시뮬레이션된 사용자 동작도 테스트할 수 있습니다.<br />
                
                수백, 수천 또는 수백만 개의 연결을 처리할 수 있는지 여부를<br />
                확인해야 하는 경우라면, 당사의 서비스는 이러한 사용자가 <br />
                시스템에 연결하고 상호 작용하는 전체 프로세스를 시뮬레이션합니다.
              <br />
              <br />
              <span className="heading-secondary-lotate">
                부하 테스트 서비스는 트래픽이 폭주할 때 <br />
                게임이 어떤 결과를 가져올 수 있는지 정확히 알려 드립니다.
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
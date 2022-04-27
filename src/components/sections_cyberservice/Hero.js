import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero_cyberservice section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero_cyberservice-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 heading-secondary" >

              국내외 해커에 대한 <br /><span className="heading-secondary-lotate">추적</span> 부터 <span className="heading-secondary-lotate">사법처리</span>까지
            </h1>
            <br />
            <div className="container-xs">
              <p className="m-0 mb-32" style={{ color: '#fff' }} >
                지적 재산권에 대해 존재하는 위협 조사 <br /> 물리적, 사법적 대응을 통한 침해행위 완전 봉쇄.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col-1-of-2">
              <div className="cyrex-box hero-figure illustration-element-01" >
               <h4 className="text-sm mb-0">
                  강력한 보안 시스템을 구축한다고 해도<br />  이미 발생한 위협은 대응이 어렵습니다. <br /> 
                  해외에서 발생한 사설 서버, 치팅툴들이<br /> 게임사의 수익을 감소시킵니다. <br /> 
                  글로벌 사법 기관 (FBI 등)과 연계하여 <br />수많은 해커들을 사법 처리한 <br /> 
                  저희의 사이버 서비스가 <br />사설 서버, 치팅툴 제작자를 추적하여 <br /> 
                  사법처리까지 진행해 드립니다.<br /> 
                </h4>
              </div>
            </div>
            <div class="col-1-of-2">
            <div className="cyrex-box hero-figure illustration-element-01" >
              <Image
                  className="has-shadow"
                  src={require('./../../assets/images/cyberservice/anti_piracy.png')}
                  alt="Hero"
                  width={300}
                  height={300} />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
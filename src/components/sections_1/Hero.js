import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
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
    'hero-v2 section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-v2-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
    {/* <div className="bg-img" >
      <Image
        className="bg-img__content"
        src={require('./../../assets/images/Denuvo_byIrdeto.jpg')}
        alt="Denuvo_byIrdeto" 
      />
      </div> */}
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-v2-content">
          <h1 className="mt-0 mb-16 heading-secondary">
            2022년 Anti-Cheat 글로벌 1위<br />
          </h1>
          {/* <h4 className="text-m mb-0">
            2021년에 이어 연속으로 <br />클라이언트 보호, 안티 탬퍼, 안티 치트, 고객 서비스 등 <br /> 13개 부분에서 1위를 수상하였습니다.
          </h4> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container-xs">
              <p className="m-0 mb-32" style={{ color: '#fff' }}>
                안티 템퍼: 게임 바이너리 난독화 및 위변조 방지 <br /> 안티 치트: 게임 치팅 방지 솔루션.
              </p>
              {/* <h4 className="text-sm mb-0">
                이제는 전문 팀에 의해 제대로 적용 및 사용하고 <br /> 역분석 및 치팅을 제대로 방어하여 <br />유저의 만족도 향상과 수익향상 효과를 누리세요.
              </h4> */}
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
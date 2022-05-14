import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Partners = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Partners',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item">
            <a href="https://blog.naver.com/PostView.naver?blogId=happycloude&Redirect=View&logNo=222492831136&categoryNo=102&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=18889" target='_blank'>
            <div className="tiles-item-inner">
              <Image
                      src={require('./../../assets/images/Irdeto-GDC-20220327.jpg')}
                      alt="Features tile icon 01"

               />
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Denuvo Anti-Cheat: Why we chose to use Windows kernel-mode driver in our solution
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Michail Greshishchev</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://irdeto.com/denuvo/" target='_blank'>Denuvo</a>
                  </span>
                </div>
              </div>
            </a>

            </div>

            <div className="tiles-item">
            <a href="https://blog.naver.com/happycloude/222493975779" target='_blank'>
              <div className="tiles-item-inner">
                    <Image
                      src={require('./../../assets/images/logo-1.jpg')}
                      alt="Features tile icon 01"
                    />
                    <br />
                    <Image
                      src={require('./../../assets/images/cyrex-GDC-20220327.jpg')}
                      alt="Features tile icon 01"
                    />
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    IRDETO GLOBAL GAMING SURVEY: <br />
                    THE LAST CHECKPOINT FOR CHEATING
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Diana Rynzhuk</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://irdeto.com/denuvo/" target='_blank'>Denuvo</a>
                  </span>
                </div>
              </div>
              </a>
            </div>

            <div className="tiles-item" data-reveal-delay="200">
            <a href="https://blog.naver.com/happycloude/222496915392" target='_blank'>
              <div className="tiles-item-inner">
              <Image
                      src={require('./../../assets/images/Global Gaming Survey Report -2.PNG')}
                      alt="Features tile icon 01"
                      width={500}
                      height={500} />
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  THE LAST CHECKPOINT FOR CHEATING - 부정행위와 유저경험, 그리고 게임보안.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://irdeto.com/denuvo/" target='_blank'>Denuvo</a>
                  </span>
                </div>
              </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = propTypes;
Partners.defaultProps = defaultProps;

export default Partners;
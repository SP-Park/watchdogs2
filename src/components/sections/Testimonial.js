import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
  const { t } = useTranslation();
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <div class="u-center-text u-margin-bottom-medium">
          <h2 class="heading-secondary" style={{ color: '#fff' }}>
            WatchDogs Blogs <br /> {t("section.53")}
          </h2>
        </div>  
          <div className={tilesClasses}>

            <div className="tiles-item">
            <a href="https://blog.naver.com/PostView.naver?blogId=happycloude&Redirect=View&logNo=222492831136&categoryNo=102&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=18889" target='_blank'>
            <div className="tiles-item-inner">
              <Image
                      src={require('./../../assets/images/shutterstock_1005938026-scaled.jpg')}
                      alt="Features tile icon 01"
                      width={600}
                      height={400} />
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
                      src={require('./../../assets/images/Global Gaming Survey Report.PNG')}
                      alt="Features tile icon 01"
                      width={600}
                      height={400} />
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
                      width={600}
                      height={400} />
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  THE LAST CHECKPOINT FOR CHEATING - {t("section.54")}
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
          <br />
          <div className="u-center-text">
            <Link to="/blog">
              <a  target='_blank' class="btn btn--white" style={{ color: '#777777' }}>Read All Blogs  &rarr;</a>
          </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
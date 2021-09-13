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
    title: 'Denuvo Overview',
    paragraph: 'Anti-Cheat, Anti-tamper, Telemetry.'
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

          <div className="hero-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800" style={{ height: '100%' }}>
          {/* <div className="composition"> */}
            <img
              className="composition-1__photo composition__photo--p1"
              src={require('./../../assets/images/anti-tamper.PNG')}
              alt="process" 
              width={896}
              height={504}
              />
          </div>
          <div className="hero-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800" style={{ height: '100%' }}>
          {/* <div className="composition"> */}
            <img
              className="composition-1__photo composition__photo--p2"
              src={require('./../../assets/images/anti-cheatpc.PNG')}
              alt="process" 
              width={896}
              height={504}
              />
          </div>
          <div className="hero-figure reveal-from-bottom" data-reveal-value="20px" data-reveal-delay="800" style={{ height: '100%' }}>
          {/* <div className="composition"> */}
            <img
              className="composition-1__photo composition__photo--p3"
              src={require('./../../assets/images/telemetrypc.PNG')}
              alt="process" 
              width={896}
              height={504}
              />
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
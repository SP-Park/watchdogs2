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
    'partners section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'partners-inner section-inner',
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
         <br />
         <br />
          <SectionHeader data={sectionHeader} className="center-content" />
          <br />

          <div className={tilesClasses}>
            <div className="tiles-item">
            <a href="https://irdeto.com/" target='_blank'>
            <div className="tiles-item-inner" style={{ paddingTop: '40px' }}>
              <Image
                      src={require('./../../assets/images/irdeto_logo_white.png')}
                      alt="Features tile icon 01"
                    />
              <br />
              <Image
                      src={require('./../../assets/images/gdc-2022.png')}
                      alt="Features tile icon 01"

               />
              </div>
            </a>
            </div>

            <div className="tiles-item">
            <a href="https://cyrextech.net/" target='_blank'>
              <div className="tiles-item-inner">
                    <Image
                      src={require('./../../assets/images/logo-1.jpg')}
                      alt="Features tile icon 01"
                      height={200}
                    />
                    <br />
                    <Image
                      src={require('./../../assets/images/cyrex-GDC-20220327.jpg')}
                      alt="Features tile icon 01"
                    />
              </div>
              </a>
            </div>

            <div className="tiles-item">
            <a href="https://www.threatx.com/" target='_blank'>
              <div className="tiles-item-inner" style={{ paddingTop: '80px' }}>
              <Image
                      src={require('./../../assets/images/ThreatX-logo-full-reversed.svg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={300}
              />
              </div>
              </a>
            </div>

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

Partners.propTypes = propTypes;
Partners.defaultProps = defaultProps;

export default Partners;
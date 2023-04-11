import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const outerClasses = classNames(
    'hero_threatx section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero_threatx-inner section-inner',
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
          <div className="hero-v2-content">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="mt-20 mb-16" style={{ color: '#fff', fontSize: '4rem' }}>
          THREAT<span style={{ color: '#ff0000' }}>X</span><br />
          </h1>
            <br />

            <div className="container-xl">
              <p className="m-0 mb-20 h2" style={{ color: '#fff' }}>
              {t("section5.1")}<br /> </p>
              <p className='h3' style={{ color: '#ffa539' }}>{t("section5.2")}</p>  
              
            </div>
            <br />
            <br />
          <br />
          <br />
          <br />
          <br />
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
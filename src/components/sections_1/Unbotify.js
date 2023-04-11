import React from 'react';
import classNames from 'classnames';
import Image from '../elements/Image';
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
    'section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'unbotify-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="unbotify">
        <div className={innerClasses}>
          <div className='container-sm' style={{ display: 'block', textAlign: 'start' }}>
            <br />
            <br />
            <br />
            <br />
            <h1 className="mt-20 mb-16 h1" style={{ color: '#fff' }}>
              Denuvo Unbotify
            </h1>
              <br />
            <p className="m-0 mb-32 h5" style={{ color: '#fff' }}>
              {t("section1.117")}  <br />
              {t("section1.118")}
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="unbotify_bottom">
        <div className='container-xl' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <br />
          <div>
            <Image
              src={require('./../../assets/images/unbotify/engineering-skills.png')}
              alt="Features skill"
              width={320}
              height={320} />
          </div>
          <div>
            <p style={{ color: '#fff', textAlign: 'start' }}>
              {t("section1.119")} <br />
              {t("section1.120")} <br />
              {t("section1.121")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
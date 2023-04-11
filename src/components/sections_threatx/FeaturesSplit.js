import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'threatx-v1 section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-v1-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const { t } = useTranslation();
  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container-lg">
        <div className={innerClasses}>
          <div className="hero-v1-content">
            <h1 className="mt-0 mb-10" style={{ fontSize: '2.5rem', color: '#f2721c' }}>
            {t("section5.18")}
            </h1>
            <div className="container-xs">
              <p className="m-0"  style={{ fontSize: '1.2rem', color: '#f2721c' }}>{t("section5.19")}</p> 
              <br />
              <p className="m-0"  style={{ fontSize: '1.2rem', color: '#f2721c' }}>{t("section5.20")}</p>
                
            </div>
          </div>

          <div className="hero-v1-figure" style={{ height: '100%' }}>
          {/* <div className="composition"> */}
            <img
              className="composition__photo composition__photo--p1"
              src={require('./../../assets/images/threatx/dashbord.png')}
              alt="process" 
              width={700}
              height={350}
              />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="container-xs">
              <p className="m-0 mb-32"  style={{ color: '#fff' }}>
              {t("section5.21")} <br /> <span className="heading-secondary-lotate" style={{ color: '#f2721c' }}>{t("section5.22")}</span>{t("section5.23")}<br />
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
import React, { useState } from 'react';
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
  const { t } = useTranslation();
  const [videoModalActive, setVideomodalactive] = useState(false);
  const outerClasses = classNames(
    'hero-v1 section center-content',
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

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container-lg">
        <div className={innerClasses}>
          <div className="hero-v1-content">
            <h1 className="mt-0 mb-16 heading-secondary">

            {t("section1.27")} <span className="heading-secondary-lotate">{t("section1.28")}</span>{t("section1.29")} 
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32"  style={{ color: '#fff' }}>
              {t("section1.30")}<br /> {t("section1.31")}
                </p>
            </div>
          </div>

          <div className="hero-v1-figure" style={{ height: '100%' }}>
          {/* <div className="composition"> */}
            <img
              className="composition__photo composition__photo--p1"
              src={require('./../../assets/images/process.PNG')}
              alt="process" 
              width={896}
              height={504}
              />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="container-xs">
              <p className="m-0 mb-32"  style={{ color: '#fff' }}>
              {t("section1.32")} <br /> <span className="heading-secondary-lotate">{t("section1.33")}</span>{t("section1.34")}<br />{t("section1.35")}
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
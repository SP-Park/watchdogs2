import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { useTranslation } from 'react-i18next';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container mt-20">
        <div className={innerClasses}>
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary" style={{ color: '#fff' }}>
            {t("section.8")}
          </h2>
          <h4 class="heading-secondary" style={{ color: '#fff' }}>
            {t("section.9")}
          </h4>
        </div>
          <br />
          <div className={tilesClasses}>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/2022.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Anti-Cheat
                    </h4>
                  <p className="m-0 text-sm" style={{ color: '#fff' }}>
                  {t("section.10")}<br />
                  {t("section.11")}<br />
                  {t("section.12")} <br />
                  {t("section.13")} <br />
                  {t("section.14")} <br />
                  {t("section.15")} <br />
                  {t("section.16")}
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/2022.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Anti-Tamper
                    </h4>
                  <p className="m-0 text-sm" style={{ color: '#fff' }}>
                  {t("section.17")} <br />({t("section.18")})<br />
                    Digital Rights Management <br />
                    Breach Protection <br />
                    {t("section.19")} <br />
                    {t("section.20")}
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/2022.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Telemetry
                  </h4>
                  <p className="m-0 text-sm" style={{ color: '#fff' }}>
                  {t("section.21")} <br /> 
                    (Data-centric Security)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="m-0 mt-32 mb-32 heading-secondary">
              {t("section.22")}<br />
              {t("section.23")} <br/>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { useTranslation } from 'react-i18next';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const { t } = useTranslation();
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary" style={{ color: '#fff' }}>
            {t("section.24")}
          </h2>
          <h4 class="heading-secondary" style={{ color: '#fff' }}>
            {t("section.25")}
          </h4>
        </div>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Denuvo Anti-Tamper
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                {t("section.26")}
                  </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                {t("section.27")}<br /> {t("section.28")} <br />
                {t("section.29")} <br />{t("section.30")} <br />
                {t("section.31")}<br />
                {t("section.32")} <br /> {t("section.33")} 
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mobile-game-protection-3.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobilet" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Denuvo Anti-Cheat
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                  {t("section.34")}
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                {t("section.35")} <br />{t("section.36")}<br />
                {t("section.37")} <br />{t("section.38")} <br />
                {t("section.39")} <br />{t("section.40")} <br />
                {t("section.41")} <br />{t("section.42")} <br />
                {t("section.43")} <br />{t("section.44")} <br />
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Anti_Cheat.png')}
                  alt="Features split 02"
                  width={528}
                  height={296} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Cyrex PenetrationTest
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                {t("section.45")}
                  </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                {t("section.46")} <br />
                {t("section.47")}<br /> {t("section.48")} <br />
                {t("section.49")} <br />{t("section.50")} <br />
                {t("section.51")}
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Cyrex_Pentest.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
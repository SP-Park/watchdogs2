import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
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
      // className={outerClasses}
      className="section-tours"
    >
      <div className="container-xl">
        <div className={innerClasses}>
          <div class="u-center-text u-margin-bottom-medium">
            <h2 class="heading-secondary">
            {t("section1.45")}
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
              {t("section1.46")} <br />
              {t("section1.47")} 
              </p>
            </div>
          </div>

          <div className={splitClasses}>

            <div className="row support" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'left' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                {t("section1.48")}
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                {t("section1.49")}
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                {t("section1.50")} <br />{t("section1.51")}<br />
                {t("section1.52")} <br />
                {t("section1.53")}<br />
                  <br />
                  {t("section1.54")} <br />
                  {t("section1.55")} <br />
                  <br />
                  {t("section1.56")} <br />
                </p>
              </div>
            </div>

            <div className="row support-1" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'center' }} >
                ''
              </div>
              <div className="col-1-of-2" style={{ textAlign: 'right' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                {t("section1.57")}
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                {t("section1.58")}
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                {t("section1.59")}<br />
                {t("section1.60")} <br />
                {t("section1.61")}<br />
                  <br />
                  {t("section1.62")}<br />
                  {t("section1.63")}<br />
                  {t("section1.64")}<br />
                </p>
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
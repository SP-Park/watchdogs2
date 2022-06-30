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
            {t("section2.28")}
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
              {t("section2.29")}<br />
              {t("section2.30")}
              </p>
            </div>
          </div>

          <div className={splitClasses}>

            <div className="row support-2" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'left' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                {t("section2.31")}
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                {t("section2.32")}
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                {t("section2.33")}<br />
                {t("section2.34")}<br />
                {t("section2.35")}<br />
                {t("section2.36")}<br />
                {t("section2.37")}<br />
                {t("section2.38")}<br /> 
                {t("section2.39")}
                </p>
              </div>
            </div>

            <div className="row support-3" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'center' }} >
                ''
              </div>
              <div className="col-1-of-2" style={{ textAlign: 'right' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                {t("section2.40")}
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                {t("section2.41")}
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                {t("section2.42")} <br />
                {t("section2.43")}<br />
                {t("section2.44")}<br />
                {t("section2.45")}<br />
                {t("section2.46")}<br />
                {t("section2.47")}<br />
                {t("section2.48")}<br />
                {t("section2.49")}
                </p>
              </div>
            </div>

            <div className="row support-4" style={{ padding: '10px', height: '400px' }}>
              <div className="col-1-of-2" style={{ textAlign: 'left' }} >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                {t("section2.50")}
                </div>
                <h3 className="mt-0" style={{ color: '#fff' }}>
                {t("section2.51")} <br />{t("section2.52")}
                </h3>
                <p className="m-0" style={{ color: '#fff' }}>
                {t("section2.53")}<br />
                {t("section2.54")}<br />
                {t("section2.55")}<br />
                {t("section2.56")}<br />
                {t("section2.57")}<br />
                {t("section2.58")}<br />
                {t("section2.59")}<br />{t("section2.60")}
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
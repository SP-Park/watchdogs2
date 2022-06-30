import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
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
      className="section-tours"
    >
      <div className="container-xl">
        <div className={innerClasses}>
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
            {t("section1.78")}
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
              {t("section1.79")}<br /> 
                </p>
            </div>
          </div>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   Securing PC games from crackers and cheaters
                </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                {t("section1.80")} <br />{t("section1.81")}
                  </h3>
                <p className="m-0">
                {t("section1.82")} <br />
                {t("section1.83")} <br />
                {t("section1.84")} <br />
                {t("section1.85")} <br />
                {t("section1.86")} <br />
                {t("section1.87")} <br />
                {t("section1.88")} <br />
                {t("section1.89")}
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                >
                <Image
                  src={require('./../../assets/images/anticheat.PNG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Identifying and protecting vulnerabilities: profiling
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                {t("section1.90")} 
                  </h3>
                <p className="m-0">
                {t("section1.91")}<br />
                {t("section1.92")}<br />
                {t("section1.93")} <br />
                {t("section1.94")}<br />
                {t("section1.95")}<br />
                {t("section1.96")}<br />
                {t("section1.97")} <br />
                {t("section1.98")}<br />
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                >
                <Image
                  src={require('./../../assets/images/identity.jpg')}
                  alt="Features split 02"
                  style={{ width: '812px', height: '400px' }}
                />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile" >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Cyber Services: taking security one step further
                  </div>
                <h3 className="mt-0 mb-12 heading-secondary-lotate">
                {t("section1.99")}
                  </h3>
                <p className="m-0">
                {t("section1.100")}<br />
                {t("section1.101")}<br />
                {t("section1.102")}<br />
                {t("section1.103")}<br />
                {t("section1.104")}<br />
                {t("section1.105")}<br />
                {t("section1.106")}<br />
                {t("section1.107")}

                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile',
                  imageFill && 'split-item-image-fill'
                )}
                >
                <Image
                  src={require('./../../assets/images/cyber-services.png')}
                  alt="Features split 03"
                  style={{ width: '612px', height: '400px' }} 
                />
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
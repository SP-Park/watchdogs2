import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import { useTranslation } from 'react-i18next';
import Image from '../elements/Image';

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

  return (
    <section
      {...props}
      // className={outerClasses}
      className="section-box unbotify_bottom"
      id="section-box"
    >
      <div className="container-xl">
      <div class="u-center-text u-margin-bottom-big">
                <h2 >
                {t("section1.109")}
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-4">
                 <div class="reason-box">
                  <Image
                    src={require('./../../assets/images/unbotify/checkmark.png')}
                    alt="Features skill"
                    width={320}
                    height={320} 
                  />
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section1.110")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section1.111")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="reason-box">
                  <Image
                      src={require('./../../assets/images/unbotify/software_protection.png')}
                      alt="Features skill"
                      width={320}
                      height={320} 
                  />
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section1.112")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section1.113")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="reason-box">
                 <Image
                      src={require('./../../assets/images/unbotify/wellbeing_Icons_new.png')}
                      alt="Features skill"
                      width={320}
                      height={320} 
                  />
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section1.114")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section1.115")}                   </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="reason-box">
                  <Image
                      src={require('./../../assets/images/unbotify/expatriate_content_Icons_new.png')}
                      alt="Features skill"
                      width={320}
                      height={320} 
                  />
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>GDPR & CCPA</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section1.116")}                   </p>
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
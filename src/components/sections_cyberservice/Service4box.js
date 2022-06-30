import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import SecurityIcon from '@material-ui/icons/Security';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import BuildIcon from '@material-ui/icons/Build';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
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
  return (
    <section
      {...props}
      // className={outerClasses}
      className="section-box-service"
      id="section-box-service"
    >
      <div className="container-xl">
      <div class="u-center-text u-margin-bottom-big">
                <h2 >
                {t("section2.17")}
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <SecurityIcon style={{fontSize: '68px', color: '#4682B4' }}/>
                  <h3 class="heading-tertiary-5 u-margin-bottom-small">{t("section2.18")}</h3>
                    <p class="feature-box__text">
                    {t("section2.19")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                 <SentimentVerySatisfiedIcon style={{fontSize: '68px', color: '#4682B4' }}/>
                  <h3 class="heading-tertiary-5 u-margin-bottom-small">{t("section2.20")}</h3>
                    <p class="feature-box__text">
                    {t("section2.21")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <BuildIcon style={{fontSize: '68px', color: '#4682B4' }}/>
                  <h3 class="heading-tertiary-5 u-margin-bottom-small">{t("section2.22")}</h3>
                    <p class="feature-box__text">
                    {t("section2.23")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="feature-box">
                  <ContactPhoneIcon style={{fontSize: '68px', color: '#4682B4' }}/>
                  <h3 class="heading-tertiary-5 u-margin-bottom-small">{t("section2.24")}</h3>
                    <p class="feature-box__text">
                    {t("section2.25")}<br /> 
                    {t("section2.26")}<br /> 
                    {t("section2.27")}
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
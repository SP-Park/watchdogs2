import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import { useTranslation } from 'react-i18next';
import { BiBot } from 'react-icons/bi'
import { BsShieldCheck } from 'react-icons/bs'
import { AiOutlineApi, AiOutlineCloudDownload, AiOutlineCustomerService } from 'react-icons/ai'
import { GiScalpelStrike } from 'react-icons/gi'
import { TiArrowMinimiseOutline } from 'react-icons/ti'

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
      className="section-box-threatx"
    >
      <div className="container-xl">
        <div class="u-center-text u-margin-bottom-medium">
                <h2 >
                {t("section5.3")}
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-4">
                 <div class="reason-box">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <AiOutlineApi style={{ fontSize: '3rem', color: '#d23200' }} /> 
                  </div>
                    <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section5.4")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section5.5")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="reason-box" >
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <BsShieldCheck style={{ fontSize: '3rem', color: '#d23200' }} /> 
                  </div>
                   <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section5.6")}</h3>
                      <p class="feature-box__text" style={{ color: '#fff' }}>
                      {t("section5.7")}
                      </p>

                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="reason-box">
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <GiScalpelStrike style={{ fontSize: '3rem', color: '#f2721c' }} /> 
                  </div>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section5.8")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section5.9")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-4">
                 <div class="reason-box">
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <BiBot style={{ fontSize: '3rem', color: '#f2721c' }} /> 
                  </div>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section5.10")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section5.11")}
                    </p>
                   </div>
                </div>
            </div>
            <div class="row">
                <div class="col-1-of-3">
                 <div class="reason-box">
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TiArrowMinimiseOutline style={{ fontSize: '3rem', color: 'f2721c' }} /> 
                  </div>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section5.12")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section5.13")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-3">
                 <div class="reason-box">
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <AiOutlineCloudDownload style={{ fontSize: '3rem', color: '#fcb900' }} /> 
                  </div>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section5.14")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section5.15")}
                    </p>
                   </div>
                </div>
                <div class="col-1-of-3">
                 <div class="reason-box">
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <AiOutlineCustomerService style={{ fontSize: '3rem', color: '#fcb900' }} /> 
                  </div>
                  <h3 class="heading-tertiary-2 u-margin-bottom-small" style={{ color: '#fff' }}>{t("section5.16")}</h3>
                    <p class="feature-box__text" style={{ color: '#fff' }}>
                    {t("section5.17")}</p>
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
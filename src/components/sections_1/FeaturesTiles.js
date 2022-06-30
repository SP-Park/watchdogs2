import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTilesProps } from '../../utils/SectionProps';

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
      className="section-tours"
      id="section-tours"
    >
      <div className="container">
      <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                {t("section1.4")}
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 class="card__heading">
                                <span class="card__heading-span card__heading-span--1">{t("section1.25")}</span>
                            </h4>
                            <div class="card__datails">
                                <ul>
                                    <li>{t("section1.5")}</li>
                                    <li>{t("section1.6")}</li>
                                    <li>{t("section1.7")}</li>
                                    <li>{t("section1.8")}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-1">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">{t("section1.9")}</p>
                                    <p class="card__price-value">{t("section1.10")}</p>
                                </div>
                                <a href="https://resources.irdeto.com/assets/datasheet-anti-tamper" target='_blank' class="btn btn--white">Discover more!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 class="card__heading">
                                <span class="card__heading-span card__heading-span--2">{t("section1.26")}</span>
                            </h4>
                            <div class="card__datails">
                                <ul>
                                    <li>{t("section1.11")}</li>
                                    <li>{t("section1.12")}</li>
                                    <li>{t("section1.13")}</li>
                                    <li>{t("section1.14")}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-2">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">{t("section1.15")}</p>
                                    <p class="card__price-value">{t("section1.16")}</p>
                                </div>
                                <a href="https://irdeto.com/denuvo/anti-cheat/" target='_blank' class="btn btn--white">Discover more!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <h4 class="card__heading">
                                <span class="card__heading-span card__heading-span--3">{t("section1.17")}</span>
                            </h4>
                            <div class="card__datails">
                                <ul>
                                    <li>{t("section1.18")}</li>
                                    <li>{t("section1.19")}</li>
                                    <li>{t("section1.20")}</li>
                                    <li>{t("section1.21")}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-3">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">{t("section1.22")}</p>
                                    <p class="card__price-value">{t("section1.23")}</p>
                                </div>
                                <a href="https://irdeto.com/cyber-services/" target='_blank' class="btn btn--white">Discover more!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="u-center-text u-margin-top-big">
                <a href="mailto:info@watchdogs.co.kr" class="btn btn--green">{t("section1.24")}</a>
            </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
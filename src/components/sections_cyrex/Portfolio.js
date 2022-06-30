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
      className="section-portfolio"
      id="section-portfolio"
    >
        <div class="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary">
            {t("section3.27")}
            </h2>
        </div>

        <div class="row portfolio u-margin-bottom-small">
            <div class="col-1-of-3">
                <figure class="portfolio__shape">
                    <img src={require('./../../assets/images/tera.jpeg')} alt="Person on a tour" class="portfolio__img"/>
                    <figcatption class="portfolio__caption">TERA</figcatption>
                </figure>
            </div>

            <div class="col-2-of-3 portfolio__text">
                <h3 class="heading-tertiary u-margin-bottom-small">{t("section3.28")}<br />published by Gameforge</h3>
                <p>
                    {t("section3.29")}<br />
                    <span className="heading-secondary-lotate">{t("section3.30")}</span>
                </p>
            </div>
        </div>
        <div class="row portfolio u-margin-bottom-small">
            <div class="col-1-of-3">
                <figure class="portfolio__shape">
                    <img src={require('./../../assets/images/doom.jpeg')} alt="Person on a tour" class="portfolio__img"/>
                    <figcatption class="portfolio__caption">DOOM ETERNAL</figcatption>
                </figure>
            </div>

            <div class="col-2-of-3 portfolio__text">
                <h3 class="heading-tertiary u-margin-bottom-small">{t("section3.31")}<br />published by Bethesda</h3>
                <p>
                {t("section3.32")}
                    <span className="heading-secondary-lotate">{t("section3.33")}</span>
                </p>
            </div>
        </div>
        <div class="row portfolio u-margin-bottom-small">
            <div class="col-1-of-3">
                <figure class="portfolio__shape">
                    <img src={require('./../../assets/images/metin2.jpg')} alt="Person on a tour" class="portfolio__img"/>
                    <figcatption class="portfolio__caption">METIN2</figcatption>
                </figure>
            </div>

            <div class="col-2-of-3 portfolio__text">
                <h3 class="heading-tertiary u-margin-bottom-small">{t("section3.34")}<br />published by Gameforge</h3>
                <p>
                {t("section3.35")}<br />
                {t("section3.36")}<br />
                {t("section3.37")}
                    <span className="heading-secondary-lotate">{t("section3.38")}</span>
                </p>
            </div>
        </div>

        <div class="u-center-text u-margin-top-medium u-margin-bottom-small">
            <a href="https://cyrextech.net/portfolio/" target='_blank' class="btn-text">{t("section3.39")} &rarr;</a>
        </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
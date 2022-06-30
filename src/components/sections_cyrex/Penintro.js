import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTilesPen = ({
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
      className="section-many"
      id="section-many"
    >
      <div className="container" >
        <div class="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary">
            {t("section3.8")}
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
              {t("section3.9")}<br />
              {t("section3.10")}<br />
              {t("section3.11")}<br />
              {t("section3.12")}<br />
               <br />
               {t("section3.13")}<br />
               {t("section3.14")}<br />
               {t("section3.15")}<br />
               <br />

               {t("section3.16")}<br />
               {t("section3.17")}<br />
               {t("section3.18")}<br />
               {t("section3.19")}<br />
               {t("section3.20")}<br />
              <br />
              <span className="heading-secondary-lotate">
              {t("section3.21")}<br />
              {t("section3.22")}
              </span>
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTilesPen.propTypes = propTypes;
FeaturesTilesPen.defaultProps = defaultProps;

export default FeaturesTilesPen;
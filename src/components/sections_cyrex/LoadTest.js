import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTilesLoad = ({
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
      <div className="container" style={{  }}>
        <div class="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary">
            {t("section3.65")}
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32" >
              {t("section3.66")}
              </p>
            </div>
            <div className="u-center-text">
              <a href="mailto:info@watchdogs.co.kr" target='blank' class="btn btn--white" style={{ color: '#777777' }}>{t("section3.67")}  &rarr;</a>
          </div>
        </div>
            <div class="row">

            </div>
      </div>
    </section>
  );
}

FeaturesTilesLoad.propTypes = propTypes;
FeaturesTilesLoad.defaultProps = defaultProps;

export default FeaturesTilesLoad;
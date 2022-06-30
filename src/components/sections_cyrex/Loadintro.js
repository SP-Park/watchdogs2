import React from 'react';
import Image from '../elements/Image';
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
      className="section-loadintro"
      id="section-loadintro"
    >
      <div className="container" style={{  }}>
        <div class="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary">
              {t("section3.44")} 
            </h2>

            <div className="container-xs">
             <Image
                  className="has-shadow"
                  src={require('./../../assets/images/load2.PNG')}
                  alt="Hero"
                  width={896}
                  height={504} />
              <br />
              <p className="m-0 mb-32"  style={{ color: '#fff' }}>
              {t("section3.45")}<br />
              {t("section3.46")}<br />
              {t("section3.47")}<br />
              {t("section3.48")}<br />
              {t("section3.49")}<br />
                <br />
                {t("section3.50")}<br />
                {t("section3.51")}<br />
                {t("section3.52")}<br />
                
                {t("section3.53")}<br />
                {t("section3.54")}<br />
                {t("section3.55")}
              <br />
              <br />
              <span className="heading-secondary-lotate">
              {t("section3.56")}<br />
              {t("section3.57")}
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
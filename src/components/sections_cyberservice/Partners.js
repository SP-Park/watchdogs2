import React from 'react';
import Image from '../elements/Image';
import { SectionTilesProps } from '../../utils/SectionProps';
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
        <div class="u-center-text u-margin-bottom-small">
                <h2 >
                {t("section2.61")}
                </h2>
                <br />
            </div>
            <div class="row">
                <div class="col-1-of-2">
                  <div className="cyrex-box hero-figure illustration-element-01" >
                    <h4 className="text-sm mb-0">
                    {t("section2.1")}
                      <br />
                      <br />
                      - {t("section2.62")}<br />
                      - {t("section2.63")}<br />
                      - {t("section2.64")}<br />
                      <br />
                      {t("section2.65")}
                    </h4>
                  </div>
                </div>
                <div class="col-1-of-2">
                  <div className="cyrex-box hero-figure illustration-element-01" >
                    <Image
                        className="has-shadow"
                        src={require('./../../assets/images/cyberservice/law.png')}
                        alt="Hero"
                        width={300}
                        height={300} />
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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesAward = ({
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
    <section class="section-book">
      <div className="container">
        <div class="book">
            <div class="book__form">
                    <div style={{ marginBottom: '0px' }}>
                        <h2 class="heading-secondary">
                            2023 Cyber Security Awards GOLD WINNER
                        </h2>
                    </div>
                    <div>
                     <h3 class="heading-tertiary-lotate u-margin-bottom-small">{t("section1.65")}</h3>
                        <p class="paragraph-1">
                          - {t("section1.66")} <br />
                          - Digital Rights Management <br />
                          - reach Protection <br />
                          - {t("section1.67")} <br />
                          - {t("section1.68")} <br />
                        </p>
                        <h3 class="heading-tertiary-lotate u-margin-bottom-small">{t("section1.69")}</h3>
                        <p class="paragraph-1">
                          - {t("section1.70")} <br />
                          - {t("section1.71")} <br />
                          - {t("section1.72")} <br />
                          - {t("section1.73")} <br />
                          - {t("section1.74")} <br />
                          - {t("section1.75")} <br />
                          - {t("section1.76")} <br />
                          - {t("section1.77")} <br />
                        </p>
                    </div>
                    <div >
                    <a href="https://irdeto.com/news/irdeto-once-again-awarded-as-the-best-cybersecurity-company-by-cybersecurity-excellence-awards/?utm_source=DSMN8&utm_medium=LinkedIn" target='_blank' class="btn btn--green">Read Post</a>
                    </div>
            </div>
    </div>
    </div>
</section>
  );
}

FeaturesAward.propTypes = propTypes;
FeaturesAward.defaultProps = defaultProps;

export default FeaturesAward;
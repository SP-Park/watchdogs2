import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { useTranslation } from 'react-i18next';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const { t } = useTranslation();
  const outerClasses = classNames(
    'hero_cyberservice section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero_cyberservice-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
        <div class="u-center-text u-margin-bottom-medium">
            <h1 class="heading-secondary">
            {t("section2.1")} <br />
              <span className="heading-secondary-lotate">{t("section2.2")}</span> {t("section2.3")} 
              <span className="heading-secondary-lotate">{t("section2.4")}</span>{t("section2.5")}
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32" style={{ color: '#fff' }}>
              {t("section2.6")} <br /> 
              {t("section2.7")}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-1-of-2">
              <div className="cyrex-box hero-figure illustration-element-01" >
               <h4 className="text-sm mb-0">
               {t("section2.8")}<br /> {t("section2.9")}<br /> 
               {t("section2.10")}<br /> {t("section2.11")}<br /> 
               {t("section2.12")}<br /> {t("section2.13")}<br /> 
               {t("section2.14")}<br /> {t("section2.15")}<br /> 
               {t("section2.16")}<br /> 
                </h4>
              </div>
            </div>
            <div class="col-1-of-2">
            <div className="cyrex-box hero-figure illustration-element-01" >
              <Image
                  className="has-shadow"
                  src={require('./../../assets/images/cyberservice/anti_piracy.png')}
                  alt="Hero"
                  width={300}
                  height={300} />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';
import { useTranslation } from 'react-i18next';
import Image from '../elements/Image';

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
                {t("section5.24")}
                </h2>
            </div>
            <div class="row">
              <div class="col-1-of-4">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                  <Image
                    src={require('./../../assets/images/threatx/badges_2022_Gold-1.png')}
                    alt="process" 
                    width={120}
                    height={100}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                 <p class="feature-box__text" style={{ color: '#fff' }}>Web Application <br />Security</p>
                </div>
              </div>
              <div class="col-1-of-4">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <Image
                      src={require('./../../assets/images/threatx/badges_2022_Gold-1.png')}
                      alt="process" 
                      width={120}
                      height={100}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <p class="feature-box__text" style={{ color: '#fff' }}>API Security</p>
                  </div>
              </div>
              <div class="col-1-of-4">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <Image
                      src={require('./../../assets/images/threatx/badges_2022_Gold-1.png')}
                      alt="process" 
                      width={120}
                      height={100}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <p class="feature-box__text" style={{ color: '#fff' }}>Bot Defense</p>
                  </div>
              </div>
              <div class="col-1-of-4">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <Image
                      src={require('./../../assets/images/threatx/CSGEA-2022-Gold-PNG-1.png')}
                      alt="process" 
                      width={160}
                      height={140}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                  <p class="feature-box__text" style={{ color: '#fff' }}>Web Application <br />Security & Firewalls</p>
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
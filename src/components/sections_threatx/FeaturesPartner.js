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
      className="section-box-partner"
    >
      <div className="container-xl">
        <div class="u-center-text u-margin-bottom-medium">
                <h2 style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>
                {t("section5.25")}
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-3">
                 <img
                    className="composition__photo composition__photo--p1"
                    src={require('./../../assets/images/threatx/logo-lenovo.png')}
                    alt="process" 
                    width={700}
                    height={350}
                    />
                </div>
                <div class="col-1-of-3">
                 <img
                    className="composition__photo composition__photo--p1"
                    src={require('./../../assets/images/threatx/logo-ghx.png')}
                    alt="process" 
                    width={700}
                    height={350}
                    />
                </div>
                <div class="col-1-of-3">
                 <img
                    className="composition__photo composition__photo--p1"
                    src={require('./../../assets/images/threatx/logo-epsilon.png')}
                    alt="process" 
                    width={700}
                    height={350}
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-1-of-3">
                 <img
                    className="composition__photo composition__photo--p1"
                    src={require('./../../assets/images/threatx/logo-inmediata.png')}
                    alt="process" 
                    width={700}
                    height={350}
                    />
                </div>
                <div class="col-1-of-3">
                 <img
                    className="composition__photo composition__photo--p1"
                    src={require('./../../assets/images/threatx/logo-bmc.png')}
                    alt="process" 
                    width={700}
                    height={350}
                    />
                </div>
                <div class="col-1-of-3">
                 <img
                    className="composition__photo composition__photo--p1"
                    src={require('./../../assets/images/threatx/logo-pf-changs.png')}
                    alt="process" 
                    width={700}
                    height={350}
                    />
                </div>
            </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
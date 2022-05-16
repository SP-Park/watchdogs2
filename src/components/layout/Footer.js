import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import Avatar from '@material-ui/core/Avatar';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            {/* <Logo /> */}
            <Avatar alt="watchdogs" src={require('./../../assets/images/logo_mini_white.png')} style={{ marginRight: '1rem' }}/>
            {/* <div className="footer-copyright">Contact</div> */}
            {/* <FooterSocial /> */}
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            {/* <FooterNav /> */}
            <div className="footer-copyright">주소: 경기 안양시 동안구 벌말로 126 오비즈 타워 1208-4</div>
            <div className="footer-copyright">주식회사 와치독스</div>
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            {/* <FooterNav /> */}
            <div className="footer-copyright">사업자 번호: 835-86-01980</div>
            <div className="footer-copyright">대표: 신명환</div>
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            {/* <FooterNav /> */}
            <div className="footer-copyright">제품 문의: <a href="mailto:info@watchdogs.co.kr">info@watchdogs.co.kr</a></div>
            <div className="footer-copyright">Made by <a href="/">WatchDogs</a>. All right reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
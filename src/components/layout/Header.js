import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import i18next from 'i18next';


const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  const storedValue = localStorage.getItem('i18nextLng');

  const [open, setOpen] = useState(null);
  const [flag, setFlag] = useState(storedValue);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    console.log('close')
    setOpen(null);
  };

  function handleClick(lang) {
    i18next.changeLanguage(lang)
    setFlag(lang)
    setOpen(null)
  }

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          {/* <Logo /> */}
          <Link to="/">
          <Avatar alt="watchdogs" src={require('./../../assets/images/logo_mini_white.png')} style={{ marginRight: '1rem' }}/>
          </Link>
          <span className="heading-primary">WatchDogs</span>
          <IconButton aria-label="language" onClick={handleOpen} >
            {flag === 'ko' 
            ?
            <img 
                alt="korea flag" 
                src={require('./../../assets/images/korea.png')} 
                style={{ width: '30px' }}  
            />
            : (
              flag === 'jp'
              ?
              <img 
                alt="japan flag" 
                src={require('./../../assets/images/japan.png')} 
                style={{ width: '30px' }}  
              />
              :
              <img 
                alt="korea flag" 
                src={require('./../../assets/images/korea.png')} 
                style={{ width: '30px' }}  
              />
            ) 
            }

          </IconButton>

          <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <List component="nav" aria-label="main mailbox folders" style={{ backgroundColor: '#DCDCDC', width: '60px' }}>
              <ListItem button>
                <ListItemIcon>
                  <img 
                    alt="korea flag" 
                    src={require('./../../assets/images/korea.png')} 
                    style={{ width: '30px' }}  
                    onClick={()=>handleClick('ko')}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <img 
                    alt="japan flag" 
                    src={require('./../../assets/images/japan.png')} 
                    style={{ width: '30px' }}  
                    onClick={()=>handleClick('jp')}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
          </Popover>




          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="/" onClick={closeMenu} style={{ color: '#fff' }}>HOME</Link>
                    </li>
                    <li>
                      <Link to="/v1/product" onClick={closeMenu} style={{ color: '#fff' }}>Denuvo</Link>
                    </li>
                    <li>
                      <Link to="/v3/cyberservice" onClick={closeMenu} style={{ color: '#fff' }}>CyberService</Link>
                    </li>
                    <li>
                      <Link to="/v2/cyrex" onClick={closeMenu} style={{ color: '#fff' }}>Cyrex</Link>
                    </li>
                    <li>
                      <Link to="/v4/threatx" onClick={closeMenu} style={{ color: '#fff' }}>ThreatX</Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={closeMenu} style={{ color: '#fff' }}>Blog</Link>
                    </li>
                    {/* <li>
                      <Link to="/about" onClick={closeMenu} style={{ color: '#fff' }}>About Us</Link>
                    </li> */}
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      {/* <li>
                        <Link to="#0" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Sign up</Link>
                      </li> */}
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

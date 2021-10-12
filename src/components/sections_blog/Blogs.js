import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 350,
    padding: '0.1rem'
  },
  media: {
    height: 180,
  },
});

const Testimonial = ({
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
  const classes = useStyles();
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      // className={outerClasses}
      className="section-blogs"
    >
      <div className="container">
        <div className={innerClasses}>
          <div class="u-center-text u-margin-bottom-big">
              <h2 class="heading-tertiary-4">
                WatchDogs Blogs
              </h2>
              <div className="container-xs">
                <p className="m-0 mb-32" style={{ color: '#fff' }}>
                 게임 보안의 트렌드
                </p>
            </div>
            </div>
          <div className={tilesClasses}>

          <div className="tiles-item">
            <a href="https://blog.naver.com/happycloude/222534739079" target='blank'>
             <div className="tiles-item-inner">
             <div className="blogcard">
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require('./../../assets/images/hack-1.jpg')}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2" color="primary">
                    해킹 이슈: 
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: '0.9rem' }}>
                    트위치, Naraka: Bladepoint, BloodyStealer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
              </div>
            </a>
            </div> 

            <div className="tiles-item">
            <a href="https://blog.naver.com/PostView.naver?blogId=happycloude&Redirect=View&logNo=222492831136&categoryNo=102&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=18889" target='_blank'>
             <div className="tiles-item-inner">
             <div className="blogcard">
             <Card className={classes.root}>
               
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require('./../../assets/images/shutterstock_1005938026-scaled.jpg')}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2" color="primary">
                     Denuvo Anti-Cheat: 
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: '0.9rem' }}>
                      Why we chose to use Windows kernel-mode driver in our solution
                  </Typography>
                </CardContent>
              </CardActionArea>
              
                {/* <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-low">Diana Rynzhuk</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://irdeto.com/denuvo/" target='blank'>Denuvo</a>
                  </span>
                </div> */}
            </Card>
            </div>
              </div>
            </a>
            </div>

            <div className="tiles-item">
            <a href="https://blog.naver.com/happycloude/222530794175" target='blank'>
             <div className="tiles-item-inner">
             <div className="blogcard">
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require('./../../assets/images/LOOK LIKE.jpg')}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2" color="primary">
                    GLOBAL GAMING INSIGHT: 
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: '0.9rem' }}>
                    코로나-19 이후 변화하는 <br />게이머의 모습
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
              </div>
            </a>
            </div> 

            <div className="tiles-item">
            <a href="https://blog.naver.com/happycloude/222530921960" target='blank'>
             <div className="tiles-item-inner">
             <div className="blogcard">
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require('./../../assets/images/cyrex1.PNG')}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2" color="primary">
                    Game Penetration Testing: 
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: '0.9rem' }}>
                  안티 치트와 침투테스트: <br />거리의 중요성
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
              </div>
            </a>
            </div> 

            <div className="tiles-item">
            <a href="https://blog.naver.com/happycloude/222493975779" target='blank'>
             <div className="tiles-item-inner">
             <div className="blogcard">
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require('./../../assets/images/Global Gaming Survey Report.PNG')}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2" color="primary">
                    GLOBAL GAMING SURVEY: 
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: '0.9rem' }}>
                    THE LAST CHECKPOINT FOR CHEATING - INTRODUCTION
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
              </div>
            </a>
            </div>

            <div className="tiles-item">
            <a href="https://blog.naver.com/happycloude/222496915392" target='blank'>
             <div className="tiles-item-inner">
             <div className="blogcard">
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require('./../../assets/images/Global Gaming Survey Report -2.PNG')}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2" color="primary">
                    GLOBAL GAMING SURVEY: 
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: '0.9rem' }}>
                    THE LAST CHECKPOINT FOR CHEATING - 부정행위, 유저경험, 그리고 보안
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
              </div>
            </a>
            </div>        

            <div className="tiles-item">
            <a href="https://blog.naver.com/happycloude/222529819771" target='blank'>
             <div className="tiles-item-inner">
             <div className="blogcard">
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require('./../../assets/images/Global Gaming Survey Report -3.PNG')}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2" color="primary">
                    GLOBAL GAMING SURVEY: 
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: '0.9rem' }}>
                    THE LAST CHECKPOINT FOR CHEATING - GAME OVER FOR ONLINE GAMING REVENUES?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
              </div>
            </a>
            </div> 



          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
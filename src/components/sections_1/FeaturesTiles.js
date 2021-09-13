import React from 'react';
import { SectionTilesProps } from '../../utils/SectionProps';

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


  return (
    <section
      {...props}
      // className={outerClasses}
      className="section-tours"
      id="section-tours"
    >
      <div className="container">
      <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    제공되는 기능 3요소
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 class="card__heading">
                                <span class="card__heading-span card__heading-span--1">안티 템퍼</span>
                            </h4>
                            <div class="card__datails">
                                <ul>
                                    <li>고사양 난독화 / 가상화</li>
                                    <li>데이터 형변환</li>
                                    <li>디버깅/후킹/루팅(탈옥)</li>
                                    <li>무결성/애물레이터 탐지 </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-1">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">지원 플랫폼</p>
                                    <p class="card__price-value">모바일, PC</p>
                                </div>
                                <a href="https://resources.irdeto.com/assets/datasheet-anti-tamper" target='_blank' class="btn btn--white">Discover more!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 class="card__heading">
                                <span class="card__heading-span card__heading-span--2">안티 치트</span>
                            </h4>
                            <div class="card__datails">
                                <ul>
                                    <li>동적데이터 보호</li>
                                    <li>봇 방어</li>
                                    <li>게임 핵 방어</li>
                                    <li>부정행위 증거수집</li>
                                    {/* <li>Difficulty: medium</li> */}
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-2">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">지원 플랫폼</p>
                                    <p class="card__price-value">모바일, PC, 콘솔</p>
                                </div>
                                <a href="https://irdeto.com/denuvo/anti-cheat/" target='_blank' class="btn btn--white">Discover more!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <h4 class="card__heading">
                                <span class="card__heading-span card__heading-span--3">대응 서비스</span>
                            </h4>
                            <div class="card__datails">
                                <ul>
                                    <li>위협 식별</li>
                                    <li>게임 브랜드 보호</li>
                                    <li>가해자 신원 확인</li>
                                    <li>글로벌 사법처리 지원</li>
                                    {/* <li>Difficulty: hard</li> */}
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-3">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">인력 서비스</p>
                                    <p class="card__price-value">포렌식 전문가 포함</p>
                                </div>
                                <a href="https://irdeto.com/cyber-services/" target='_blank' class="btn btn--white">Discover more!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="u-center-text u-margin-top-big">
                <a href="mailto:info@watchdogs.co.kr" class="btn btn--green">더 많은 정보를 원하세요?</a>
            </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
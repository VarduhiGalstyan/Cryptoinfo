<template>
  <div class="header">
    <header>
      <div class="max">
        <div class="max-top">
          <div class="top-img">
            <a href="https://cryptoinfo.me/">
              <img src="/img/1709886192logo_ci_color.svg" alt="logo-crypto">
            </a>
          </div>
          <div class="centron-right">
            <div class="top-a">
              <a href="https://cryptoinfo.me/"  title="target">ГЛАВНАЯ</a>
              <a href="https://cryptoinfo.me/services" title="target">БИРЖИ</a>
              <a href="https://cryptoinfo.me/exchanges"  title="target">ОБМЕННИКИ</a>
              <a href="https://cryptoinfo.me/miners"  title="target">МАЙНЕРЫ</a>
              <a href="https://cryptoinfo.me/storages"  title="target">ХРАНЕНИЕ</a>
              <a href="file:///C:/Users/LENOVO/Desktop/Project/project35.html" title="target">FAQ</a>
              <a href="https://cryptoinfo.me/about-us"  title="target">О НАС</a>
              <a href="https://cryptoinfo.me/contacts" class="home2" title="target">КОНТАКТЫ</a>
            </div>
            <div class="top-right">
              <div class="right-top">
                <a href="#" >ВОЙТИ</a>
                <img src="/img/theme-dark.svg" alt="theme" class="theme">
                <div class="max-ru-us">
                  <img src="/img/ru.svg" alt="ru-us" class="ru-us">
                  <img src="/img/arrow.svg" alt="flag" class="flag">
                </div>
              </div>
              <div class="right-bottom">
                <a href="https://t.me/cryptoinfo_me">Наш ТГ канал</a>
                <img src="/img/tg_logo.webp" alt="tg-logo"  class="tg-logo">
              </div>
            </div>
          </div>
        </div>
        <div class="max-crypto">
          <div class="buttons">
            <div class="button1">
              <div class="input">
                <input type="number">
              </div>
              <div class="bitcoin-logo">
                <img src="/img/bitcoinLogo.svg" alt="bitcoinLogo">
                <img src="/img/arrow.svg" alt="arrow">
              </div>
            </div>
            <div class="button1">
              <div class="input">
                <input type="number">
              </div>
              <div class="bitcoin-logo" style="margin-left: 20px;">
                <div>$</div>
                <img src="/img/arrow.svg" alt="arrow">
              </div>
            </div>
          </div>
          <div class="crypto-infos">
            <div class="info-max">
              <div class="info-left">
                <img src="/img/bitcoinLogo.svg" alt="bitcoinLogo">
                <div class="namee-nm">
                  <span class="namee">Bitcoin</span>
                  <span class="nm">BTN</span>
                </div>
              </div>
              <div class="info-number">100696</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.info-number{
    color: #d2d2d2;
    font-size: 18px;
    font-weight: 700;
}
.namee{
    color: #d0d0d0;
    font-size: 15px;
    font-weight: 600;
}
.nm{
    color: #959595;
    font-size: 12px;
    font-weight: 500;
}
.namee-nm{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: flex-start;
}
.crypto-infos{
  padding-top: 25px;
    display: grid;
    gap: 20px 60px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
.info-max{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    min-height: 35px;
    overflow: hidden;
}
.info-left{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
}

.max-crypto{
  flex-direction: column;
  gap: 40px;
  padding-top: 7%;
  width: 92.5%;
}
.buttons{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    z-index: 100;
    z-index: 0;
}
.button1{
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #ffffff1a;
    border-radius: 16px;
    gap: 10px;
    height: 63px;
    padding: 7px 23px;
    width: 200px !important;
}
.input{
  max-width: 69.5%;
}
.input input{
    background: transparent;
    border: none;
    color: #d0d0d0;
    flex-grow: 1;
    font-size: 18px;
    font-weight: 500;
    max-width: 46.5%;
    padding: 8px 0;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.bitcoin-logo{
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
}

.header{
  box-sizing: border-box;
  padding: 0;
  transition: all .2s;
  text-rendering: optimizeSpeed;
  font-family: Arial, Helvetica, sans-serif;
  color: #d0d0d0;
  display: block;
  unicode-bidi: isolate;
}
header{
  background: 
    no-repeat 100% 100% / 65% url(/img/wave-20.webp), 
    no-repeat 50% / cover url(/img/cover.webp);
  position: relative;
}
.max{
  padding-top: 40px;
  padding-bottom: 40px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  gap: clamp(50px, 4vw, 80px);
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}
.max-top{
  display: flex;
}
.top-img{
  margin-top: 18px;
}
.centron-right{
  display: flex;
  gap: 90px;
}
.top-a{
  padding-left: 20px;
  margin-top: 20px;
  max-width: 1200px;
}
.top-a a{
    padding-left: 20px;
}
a{
  color: #d0d0d0;
  text-decoration: none;

  font-size: .875rem;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}
.top-right{
  display: flex;
  flex-direction: column;
}
.right-top{
  display: flex;
  max-width: max-content;
  gap: 10px;
}
.theme{
  margin-top: -20px;
  width: 25px;
}
.max-ru-us{
  margin-top: -10px;
  background-color: #ffffff1a;
  border-radius: 11px;
  padding: 12px;
  height: 15px;
}
.ru-us{
  margin-top: -5px;
  padding-right: 5px;
}
.tg-logo{
  width: 30px;
}
.right-bottom{
  text-align: end;
}


@media screen and (min-width: 1024px) {
    .header[data-v-22f821ce] {
        padding: 40px 0 47px;
    }
    .top-a {
        /* align-items: center; */
        background: transparent;
        border-radius: 0;
        box-shadow: none;
        display: flex;
        flex: 1;
        justify-content: space-between;
        min-height: auto;
        position: static;
        transform: none;
    }
}
@media screen and (min-width: 1024px) {
    .max {
        padding-left: 16px;
        padding-right: 16px;
    }
}
</style>
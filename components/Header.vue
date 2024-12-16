<template>
  <div class="header" :class="themeClass">
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
                <div class="loginmax">
                  <div class="loginname">
                    <button class="loginbutton">ВОЙТИ</button>
                  </div>
                </div>
                <button @click="toggleTheme" class="change-color">
                  <img  v-if="isDarkTheme" src="/img/theme-dark.svg" alt="theme-dark" class="theme">
                  <img v-else src="/img/theme-light.svg" alt="theme-light" class="theme">
                </button>
                <div>
                  <div @click="toggleLanguageList" class="max-ru-us" >
                    <img :src="languageFlag" alt="ru-us" class="ru-us">
                    <img src="/img/arrow.svg" alt="flag" class="flag">
                  </div>
                  <!-- <button @click="toggleLanguageList" class="language-toggle">
                    <img src="/img/ru.svg" alt="ru-us" class="ru-us">
                    <img src="/img/arrow.svg" alt="flag" class="flag">
                  </button> -->
                  <div class="list-ru-us" :class="{'show': showLanguageList}">
                    <div @click="selectLanguage('ru')" class="list-ru" :class="{'active': selectedLanguage === 'ru'}">
                      <img src="/img/ru.svg" alt="ru" />
                      <p class="ru-us-name">Русский</p>
                    </div>
                    <div @click="selectLanguage('en')" class="list-ru" :class="{'active': selectedLanguage === 'en'}">
                      <img src="/img/us.svg" alt="us" />
                      <p class="ru-us-name">English</p>
                    </div>
                  </div>
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
<script>
export default {
  data() {
    return {
      isDarkTheme: true,
      showLanguageList: false, 
      selectedLanguage: 'ru',  

    };
  },
  computed: {
    themeClass() {
      return this.isDarkTheme ? 'dark-theme' : 'light-theme';
    },
    languageFlag() {
      return this.selectedLanguage === 'ru' ? '/img/ru.svg' : '/img/us.svg'; // dynamically set the flag image
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    },
    toggleLanguageList() {
      this.showLanguageList = !this.showLanguageList;  
    },
    selectLanguage(language) {
      this.selectedLanguage = language; // set the selected language
      this.showLanguageList = false; // hide the language list after selection
    },
  },
};
</script>

<style scoped>
.list-ru.active {
  background-color: #4d4d4d; /* Change to your desired active background color */
}

.max-ru-us.active img {
  transform: rotate(180deg);  /* Optional: Flip the arrow when the list is shown */
}
.ru-us-name{
  margin-top: -3px;

}
.list-ru{
  display: inline-flex;
  gap: inherit;
  color: #fff;
  margin: 0;
}
.list-ru-us{
  display: none;
  align-items: flex-start;
    background: #301c44;
    border-radius: 11px;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    padding: 20px;
    position: absolute;
    right: 0;
    top: calc(100% + 12px);
    width: -moz-max-content;
    width: max-content;
    z-index: 1111;
}
.list-ru-us.show {
  display: flex;  
}
.theme{
  width: 100%;
  display: block;
  max-width: 100%;
}
.change-color{
  display: contents;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: none;
  border: none;
}
.loginbutton{
  background: none;
    border: none;
    cursor: pointer;
    outline: none;

}
button{
  font: inherit;
  cursor: pointer;
}
.loginmax{
  cursor: pointer;
  color: #d0d0d0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
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
.dark-theme header {
  background: 
    no-repeat 100% 100% / 65% url(/img/wave-20.webp), 
    no-repeat 50% / cover url(/img/cover.webp);
  position: relative;
}
.light-theme header {
  background-color: #f7f7f7;
  background: no-repeat 130% 100% / 80% 112% url(/img/bg_arrow.webp), 
    no-repeat 50% / cover url(/img/home-light-1.webp);
}
.light-theme a,button .light-theme  button, .light-theme span{
  color: #170332;
}
.light-theme  .info-number, .light-theme .loginbutton{
  color: #170332;
}
.light-theme .top-a a{
  background-color: #f7f3f3;
  height: 18px;
}
.light-theme .button1{
  background-color: #f5f3f3;
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
a, button{
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
@media screen and (min-width: 744px) {
  .loginmax, .loginbutton{
    display: block;
  }
  .change-color{
    position: static;
    transform: none;
  }
}
</style> 
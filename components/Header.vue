<template>
  <div class="header" :class="themeClass">
    <header>
      <div class="max">
        <div class="max-top">
          <div class="top-img">
            <a href="https://cryptoinfo.me/">
              <img :src="settings.logoUrl" alt="logo-crypto" style="width: 84%" />
            </a>
          </div>
          <div class="centron-right">
            <div class="top-a">
              <a href="https://cryptoinfo.me/">{{ currentMessages.home }}</a>
              <a href="https://cryptoinfo.me/services">{{  currentMessages.services}}</a>
              <a href="https://cryptoinfo.me/exchanges">{{ currentMessages.exchanges }}</a>
              <a href="https://cryptoinfo.me/miners">{{  currentMessages.miners }}</a>
              <a href="https://cryptoinfo.me/storages">{{  currentMessages.storage}}</a>
              <a href="https://cryptoinfo.me/faq">{{ currentMessages.faq }}</a>
              <a href="https://cryptoinfo.me/about-us">{{  currentMessages.aboutUs  }}</a>
              <a href="https://cryptoinfo.me/contacts" class="home2">{{  currentMessages.contacts  }}</a>
            </div>
            <div class="top-right">
              <div class="right-top">
                <div class="loginmax">
                  <div class="loginname">
                    <button @click="togglePopup" class="loginbutton">
                      {{ currentMessages.enter }}
                    </button>
                  </div>
                </div>
                <button @click="toggleTheme" class="change-color">
                  <img
                    v-if="isDarkTheme"
                    src="/img/theme-dark.svg"
                    alt="theme-dark"
                    class="theme"
                  />
                  <img
                    v-else
                    src="/img/theme-light.svg"
                    alt="theme-light"
                    class="theme"
                  />
                </button>
                <div>
                  <div @click="toggleLanguageList" class="max-ru-us">
                    <img :src="languageFlag" alt="ru-us" class="ru-us" />
                    <img src="/img/arrow.svg" alt="flag" class="flag" />
                  </div>
                  <div class="list-ru-us" :class="{ show: showLanguageList }">
                    <div
                      @click="selectLanguage('ru')"
                      class="list-ru"
                      :class="{ active: selectedLanguage === 'ru' }"
                    >
                      <img src="/img/ru.svg" alt="ru" />
                      <p class="ru-us-name">Русский</p>
                    </div>
                    <div
                      @click="selectLanguage('en')"
                      class="list-ru"
                      :class="{ active: selectedLanguage === 'en' }"
                    >
                      <img src="/img/us.svg" alt="us" />
                      <p class="ru-us-name">English</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-bottom">
                <a href="https://t.me/cryptoinfo_me">{{
                  currentMessages.tgChannel
                }}</a>
                <img src="/img/tg_logo.webp" alt="tg-logo" class="tg-logo" />
              </div>
            </div>
          </div>
        </div>
        <div class="max-crypto">
          <div class="buttons">
            <div class="button1">
              <div class="input">
                <input type="number" />
              </div>
              <div class="bitcoin-logo">
                <img src="/img/bitcoinLogo.svg" alt="bitcoinLogo" />
                <img src="/img/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div class="button1">
              <div class="input">
                <input type="number" />
              </div>
              <div class="bitcoin-logo" style="margin-left: 20px">
                <div>$</div>
                <img src="/img/arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
          <div class="crypto-infos">
            <div class="info-max">
              <div class="info-left">
                <img src="/img/bitcoinLogo.svg" alt="bitcoinLogo" />
                <div class="namee-nm">
                  <span class="namee">Bitcoin</span>
                  <span class="nm">BTN</span>
                </div>
              </div>
              <div class="info-number">100696</div>
            </div>
          </div>
        </div>
        <div v-if="showPopup" class="overlay">
          <div class="overlay-max">
            <div class="overlay-max1">
              <button class="overlay-close" @click="closePopup">
                <img src="/img/close.DslCkta_.png" class="close" alt="close" />
              </button>
              <h2 class="overlay-name">{{ currentMessages.login }}</h2>
              <p class="overlay-text"></p>
              <div class="overlay-div">
                <p class="overlay-text">{{ currentMessages.enterMnemonic }}</p>
                <input type="text" v-model="mnemonic" class="overlay-input" />
                <span class="overlay-span" v-if="showError">{{
                  currentMessages.fields
                }}</span>
              </div>
              <button
                type="button"
                @click="handleSubmit"
                class="overlay-button"
                style="margin-top: 50px"
              >
                {{ currentMessages.login }}
              </button>
              <div class="overlay-footer">
                <p style="margin: 0">{{ currentMessages.overlayfooter }}</p>
                <button>{{ currentMessages.end }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { getSettings } from "@/services/crypto.js";

export default {
  data() {
    return {
      isDarkTheme: true,
      showLanguageList: false,
      selectedLanguage: "ru",
      showPopup: false,
      mnemonic: "",
      showError: false,
      settings: {
        ru: {
          home: "ГЛАВНАЯ",
          // services: 'Биржи',
          // exchanges: "Обменники",
          // miners: "МАЙНЕРЫ",
          // storage: "ХРАНЕНИЕ",
          faq: "FAQ",
          aboutUs: "О НАС",
          contacts: "КОНТАКТЫ",
          tgChannel: "Наш ТГ канал",
          enter: "ВОЙТИ",
          login: "Войти",
          enterMnemonic: "Мнемоника",
          fields: "* - обязательные поля",
          overlayfooter: "У вас нет учетной записи?",
          end: "Зарегистрируйтесь!",
        },
        en: {
          home: "HOME",
          // services: 'SERVICES',
          // exchanges: "EXCHANGES",
          // miners: "MINERS",
          // storage: "STORAGE",
          faq: "FAQ",
          aboutUs: "ABOUT US",
          contacts: "CONTACTS",
          tgChannel: "JOIN to",
          enter: "LOGIN",
          login: "Sign In",
          enterMnemonic: "Mnemonic",
          fields: "* - required fields",
          overlayfooter: "Do not have an account?",
          end: "Register!",
        },
      },
      logoUrl: "",
    };
  },
  computed: {
    themeClass() {
      return this.isDarkTheme ? "dark-theme" : "light-theme";
    },
    languageFlag() {
      return this.selectedLanguage === "ru" ? "/img/ru.svg" : "/img/us.svg";
    },
    currentMessages() {
      return this.settings[this.selectedLanguage];
    },
  },
  mounted() {
    // this.fetchLogo()
    this.fetchSettings();
  },
  methods: {
    async fetchSettings() {
      const settings = await getSettings();
      if (settings) {
        this.settings.en.services = settings.type1_title_en;
        this.settings.ru.services=settings.type1_title_ru;
        this.settings.logoUrl = settings.logo;
        this.settings.en.exchanges = settings.type2_title_en;
        this.settings.ru.exchanges = settings.type2_title_ru;
        this.settings.en.miners = settings.type3_title_en;
        this.settings.ru.miners = settings.type3_title_ru;
        this.settings.en.storage = settings.type4_title_en;
        this.settings.ru.storage = settings.type4_title_ru;


      }
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    },
    toggleLanguageList() {
      this.showLanguageList = !this.showLanguageList;
    },
    selectLanguage(language) {
      this.selectedLanguage = language;
      this.showLanguageList = false;
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    closePopup() {
      this.showPopup = false;
    },
    handleSubmit() {
      if (this.mnemonic === "") {
        this.showError = true;
      } else {
        this.showError = false;
      }
    },
  },
};
</script>

<style scoped>
.overlay-input {
  border-radius: 10px;
  background: #ffffff1a;
  border: none;
  border-radius: 16px;
  color: #d0d0d0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  padding: 15px 20px;
  width: 85%;
  font: inherit;
}
.overlay-footer button {
  cursor: pointer;
  all: unset;
  color: #fefefe;
  cursor: pointer;
  font-weight: 600;
}
.overlay-footer {
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  gap: 5px;
  justify-content: center;
  line-height: normal;
  margin-top: 24px;
  text-align: center;
}
.overlay-button {
  background: linear-gradient(96deg, #fb1560cc, #4a1690 87%);
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 35px #0003;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: Golos, sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  justify-content: center;
  line-height: normal;
  padding: 16px 90px;
  text-align: center;
  width: 100%;
}
.overlay-span {
  color: #e01414 !important;
  padding-bottom: 10px;
}
.overlay-text {
  color: #d0d0d0 !important;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
}
.overlay-div {
  gap: 7px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
}
.overlay-text {
  color: #e01414;
  /* padding-bottom: 10px; */
}
.overlay-name {
  color: #fefefe;
  font-size: 40px;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 2rem;
  text-align: center;
}
.close {
  display: block;
  width: 100%;
}
.overlay-close {
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  height: 30px;
  margin-left: auto;
  position: absolute;
  right: 2%;
  top: 2%;
  width: 30px;
  cursor: pointer;
  font: inherit;
}
.overlay-max {
  display: flex;
  flex-direction: column;
  gap: 19px;
}
.overlay-max1 {
  position: relative;
  background: #1a1825;
  border-radius: 30px;
  box-shadow: 0 0 35px #00000026;
  padding: 60px 2rem;
}
.overlay {
  align-items: center;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: #000;
  background-color: #0006;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 50%;
  overflow: auto;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  z-index: 9999;
}

.list-ru img {
  margin-top: -20px;
}
.list-ru.active {
  /* background-color: #4d4d4d; */
  position: relative;
}

.list-ru.active::before {
  content: "";
  /* position: absolute; */
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  width: 4px;
  height: 10px;
  border-radius: 12px;
}

.max-ru-us.active img {
  transform: rotate(180deg);
}
.ru-us-name {
  margin-top: -3px;
}
.list-ru {
  display: inline-flex;
  gap: inherit;
  color: #fff;
  margin: 0;
}
.light-theme .list-ru-us {
  margin-top: -510px;
}
.list-ru-us {
  display: none;
  align-items: flex-start;
  background: #301c44;
  border-radius: 11px;
  flex-direction: column;
  gap: 10px;
  margin-top: -400px;
  justify-content: flex-start;
  padding: 20px;
  position: absolute;
  right: 0;
  top: calc(100% + 12px);
  width: -moz-max-content;
  width: max-content;
  z-index: 1111;
}
.light-theme .list-ru-us {
  margin-left: -400px;
}
.light-theme .list-ru-us {
  background: #fff;
}
.light-theme .ru-us-name {
  color: #000;
}
.list-ru-us.show {
  display: flex;
}
.theme {
  width: 100%;
  display: block;
  max-width: 100%;
}
.change-color {
  display: contents;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: none;
  border: none;
}
.loginbutton {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}
button {
  font: inherit;
  cursor: pointer;
}
.loginmax {
  cursor: pointer;
  color: #d0d0d0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.info-number {
  color: #d2d2d2;
  font-size: 18px;
  font-weight: 700;
}
.namee {
  color: #d0d0d0;
  font-size: 15px;
  font-weight: 600;
}
.nm {
  color: #959595;
  font-size: 12px;
  font-weight: 500;
}
.namee-nm {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: flex-start;
}
.crypto-infos {
  padding-top: 25px;
  display: grid;
  gap: 20px 60px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.info-max {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  min-height: 35px;
  overflow: hidden;
}
.info-left {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
}

.max-crypto {
  flex-direction: column;
  gap: 40px;
  padding-top: 7%;
  padding-left: 29%;
  width: 92.5%;
}
.buttons {
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
.button1 {
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
.input {
  max-width: 69.5%;
}
.input input {
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
.bitcoin-logo {
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
}

.header {
  box-sizing: border-box;
  padding: 0;
  transition: all 0.2s;
  text-rendering: optimizeSpeed;
  font-family: Arial, Helvetica, sans-serif;
  color: #d0d0d0;
  display: block;
  unicode-bidi: isolate;
}
.dark-theme header {
  background: no-repeat 100% 100% / 65% url(/img/wave-20.webp),
    no-repeat 50% / cover url(/img/cover.webp);
  position: relative;
}
.light-theme header {
  background-color: #f7f7f7;
  background: no-repeat 130% 100% / 80% 112% url(/img/bg_arrow.webp),
    no-repeat 50% / cover url(/img/home-light-1.webp);
}
.light-theme a,
button .light-theme button,
.light-theme span {
  color: #170332;
}
.light-theme .info-number,
.light-theme .loginbutton {
  color: #170332;
}
.light-theme .top-a a {
  background-color: #f7f3f3;
  height: 18px;
}
.light-theme .button1 {
  background-color: #f5f3f3;
}
.max {
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
.max-top {
  display: flex;
}
.top-img {
  width: 17%;
  margin-top: 18px;
}
.centron-right {
  display: flex;
  gap: 90px;
}
.top-a {
  padding-left: 20px;
  margin-top: 20px;
  max-width: 1200px;
}
.top-a a {
  padding-left: 20px;
}
a,
button {
  color: #d0d0d0;
  text-decoration: none;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}
.top-right {
  display: flex;
  flex-direction: column;
}
.right-top {
  display: flex;
  max-width: max-content;
  gap: 10px;
}
.theme {
  margin-top: -20px;
  width: 25px;
}
.max-ru-us {
  margin-top: -10px;
  background-color: #ffffff1a;
  border-radius: 11px;
  padding: 12px;
  height: 15px;
}
.ru-us {
  margin-top: -5px;
  padding-right: 5px;
}
.tg-logo {
  width: 30px;
}
.right-bottom {
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
  .overlay-max1 {
    padding: 130px 152px;
  }
}
@media screen and (min-width: 744px) {
  .loginmax,
  .loginbutton {
    display: block;
  }
  .overlay-max1 {
    padding: 130px 77px;
  }
  .change-color {
    position: static;
    transform: none;
  }
}
</style>

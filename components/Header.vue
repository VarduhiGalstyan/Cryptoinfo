<template>
  <div class="header" :class="themeClass">
    <head>
      <title>{{ title }}</title>
      <meta name="description" :content="metaDescription" />
      <meta name="keywords" :content="metaKeywords" />
      <link rel="icon" :href="faviconUrl" />
    </head>
    <header>
      <div class="max">
        <div class="max-top">
          <div class="top2">
            <div  class="topleft-a">
              <div @click="openTopA" class="headerBar">
                <nuxt-img src="headerBar-icon.svg" alt="headerBar-icon" style="width: 20px;"/>
              </div>
              <div class="top2-img">
                <a href="https://cryptoinfo.me/">
                  <img :src="logoUrl" alt="logo-crypto" style="width: 84%" />
                </a>
              </div>
            </div>
            <div class="sidebar"
              :class="{ open: isOpen, 'light-theme': !isDarkTheme, }"
            >
              <button class="close-btn" @click="closeTopA"><span style="font-size: 30px;">X</span></button>

              <div class="lefttop-a">
                <div class="top2-img">
                  <a href="https://cryptoinfo.me/">
                    <img :src="logoUrl" alt="logo-crypto" style="width: 120px" />
                  </a>
                </div>
                <a href="https://cryptoinfo.me/">{{$t("home")}}</a>
                <a href="https://cryptoinfo.me/services">{{ locale === 'en' ? apiHeader.type1_title_en : apiHeader.type1_title_ru }}</a>
                <a href="https://cryptoinfo.me/exchanges">{{ locale === 'en' ? apiHeader.type2_title_en : apiHeader.type2_title_ru }}</a>
                <a href="https://cryptoinfo.me/miners">{{ locale === 'en' ? apiHeader.type3_title_en : apiHeader.type3_title_ru }}</a>
                <a href="https://cryptoinfo.me/storages">{{ locale === 'en' ? apiHeader.type4_title_en : apiHeader.type4_title_ru }}</a>
                <a href="https://cryptoinfo.me/faq">{{$t("faq")}}</a>
                <a href="https://cryptoinfo.me/about-us">{{$t("aboutUs")}}</a>
                <a href="https://cryptoinfo.me/contacts" class="home2">{{$t("contacts")}}</a>
              </div>
            </div>
          </div>

          <div class="top-img">
            <a href="https://cryptoinfo.me/">
              <img :src="logoUrl" alt="logo-crypto" style="width: 84%" />
            </a>
          </div>
          <div class="centron-right">
            <div class="top-a">
              <a href="https://cryptoinfo.me/">{{$t( "home" )}}</a>
              <a href="https://cryptoinfo.me/services">{{ locale === 'en' ? apiHeader.type1_title_en :  apiHeader.type1_title_ru }}</a>
              <a href="https://cryptoinfo.me/exchanges">{{ locale === 'en' ? apiHeader.type2_title_en :  apiHeader.type2_title_ru }}</a>
              <a href="https://cryptoinfo.me/miners">{{ locale === 'en' ? apiHeader.type3_title_en :  apiHeader.type3_title_ru }}</a>
              <a href="https://cryptoinfo.me/storages">{{ locale === 'en' ? apiHeader.type4_title_en :  apiHeader.type4_title_ru }}</a>
              <a href="https://cryptoinfo.me/faq">{{$t( "faq" )}}</a>
              <a href="https://cryptoinfo.me/about-us">{{$t( "aboutUs" )}}</a>
              <a href="https://cryptoinfo.me/contacts" class="home2">{{$t( "contacts" )}}</a>
            </div>
            <div class="top-right">
              <div class="right-top">
                <div class="loginmax">
                  <div class="loginname">
                    <button v-if="!isRegistered3" @click="togglePopup" class="loginbutton">
                      {{$t( "enter" )}}
                    </button>
                    <div v-else>
                      <button @click="viewAccount" class="account-button">
                        Account
                      </button>
                      <button @click="logout" class="logout-button">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
                <button @click="toggleTheme" class="change-color">
                  <img
                    v-if="isDarkTheme"
                    src="/assets/img/theme-dark.svg"
                    alt="theme-dark"
                    class="theme"
                  />
                  <img
                    v-else
                    src="/assets/img/theme-light.svg"
                    alt="theme-light"
                    class="theme"
                  />
                </button>
                <div>
                  <div @click="toggleLanguageList" class="max-ru-us">
                    <nuxt-img :src="languageFlag" alt="ru-us" class="ru-us" />
                    <img src="/assets/img/arrow.svg" alt="flag" class="flag" />
                  </div>
                  <div class="list-ru-us" :class="{ show: showLanguageList }">
                    <div
                      @click="selectLanguage('ru')"
                      class="list-ru"
                      :class="{ active: selectedLanguage === 'ru' }"
                    >
                      <img src="/assets/img/ru.svg" alt="ru" />
                      <p class="ru-us-name">Русский</p>
                    </div>
                    <div
                      @click="selectLanguage('en')"
                      class="list-ru"
                      :class="{ active: selectedLanguage === 'en' }"
                    >
                      <img src="/assets/img/us.svg" alt="us" />
                      <p class="ru-us-name">English</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-bottom">
                <a href="https://t.me/cryptoinfo_me"> {{$t( "tgChannel" )}}</a>
                <img src="/assets/img/tg_logo.webp" alt="tg-logo" class="tg-logo" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="isRegistered3" style="display: block;  text-align: justify;  margin-left: -50%;">
          <div>
            <p>Personal data</p>
            <p></p>
            <p><nuxt-img  src="no_avatar.D7pqop-r.jpg" alt="no_avatar.D7pqop-r.jpg" style="width: 25%;"/></p>
            <p>Display name: </p>
            <p>Username: {{ personalData.username }}</p>
            <p>Email: </p>
            <p>Telegram: </p>
            <p><a href="#"></a>Change</p>
          </div>
        </div>
        <div v-else class="max-crypto">
          <div class="buttons">
            <div class="button1">
              <div class="input">
                <input type="number" v-model.number="secondInputt" @change="updateFirstInputt" />
              </div>
              <nuxt-img
                :src="cryptos.find(crypto => crypto.id === selectedCrypto)?.img"
                alt="selected-crypto"
                style=" width: 30px; height: 30px; margin-left: -10px;"
              />  
              <select v-model="selectedCrypto" @change="updateSecondInputt" >
                <option v-for="crypto in cryptos" :key="crypto.id" :value="crypto.id" >
                  {{ crypto.symbol }}
                </option>
              </select>
            </div>

            <div class="button1">
              <div class="input">
                <input type="number" v-model.number="secondInputt2" @change="updateFirstInputt" />
              </div>
              <div class="bitcoin-logo" style="margin-left: 20px">
                <select v-model="selectedCurrency" @change="updateSecondInputt">
                  <option value="usd">$</option>
                  <option value="rub">₽</option>
                </select>
              </div>
            </div>
          </div>
          <div class="crypto-infos">
            <div class="info-max">
              <div class="info-left" v-for="crypto in cryptos" :key="crypto.id">
                <div style="display: flex; gap: 10px;">
                  <nuxt-img :src="crypto.img" alt="logo" class="crypto-logo"  style="width: 40px;"/>
                  <div class="namee-nm">
                    <div  :class="{ cryptoName2 : !isDarkTheme, cryptoName:isDarkTheme}" >{{ crypto.name }}</div>
                    <div :class="{ cryptosymbol2 : !isDarkTheme, cryptosymbol:isDarkTheme}" >{{ crypto.symbol }}</div>
                  </div>
                </div>
                <div  :class="{ cryptoprice2 : !isDarkTheme, cryptoprice :isDarkTheme}">{{ crypto.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showPopup" class="overlay">
          <div class="overlay-max">
            <div class="overlay-max1">
              <button class="overlay-close" @click="closePopup">
                <img src="/assets/img/close.DslCkta_.png" class="close" alt="close" />
              </button>
              <div v-if="!isRegistered">  
                <h2 class="overlay-name">
                  {{ isRegisterMode ? $t("register") : $t("login") }}
                </h2>
                <p class="overlay-text"></p>

                <div v-if="isRegisterMode">
                  <div class="overlay-div">
                    <p class="overlay-text">
                      {{ $t("username") }}
                    </p>
                    <input type="text" v-model="mnemonic2" class="overlay-input" />
                    <span class="overlay-span" v-if="showError2">
                      {{ $t("fields2") }}
                    </span>
                  </div>
                  <button
                    type="button"
                    @click="handleSubmit2"
                    class="overlay-button"
                    style="margin-top: 50px"
                  >
                    {{$t( "register" )}}
                  </button>
                </div>
                <div v-else>
                  <div class="overlay-div">
                    <p class="overlay-text">
                      {{ $t("enterMnemonic") }}
                    </p>
                    <input type="text" v-model="mnemonic" class="overlay-input" />
                    <span class="overlay-span" v-if="showError">
                      {{ $t("fields") }}
                    </span>
                  </div>
                  <button
                    type="button"
                    @click="handleSubmit"
                    class="overlay-button"
                    style="margin-top: 50px"
                  >
                    {{$t( "login" )}}
                  </button>
                </div>
                <div class="overlay-footer">
                  <p style="margin: 0">{{$t( "overlayfooter" )}}</p>
                  <button @click="toggleRegisterMode">
                    {{ isRegisterMode ? $t("end2") : $t("end") }}
                  </button>
                </div>
              </div>
              <div v-else>
                <h2 class="overlay-name">
                  {{ $t("registered") }}
                </h2>
                <p class="overlay-text"></p>
                <div class="overlay-div">
                  <p class="overlay-text">
                    {{ $t("mnemonmics") }}
                  </p>
                  <input type="text" v-model="mnemonic3" class="overlay-input" />
                </div>
                <button
                  type="button"
                  @click="handleSubmit3"
                  class="overlay-button"
                  style="margin-top: 50px"
                >
                  {{$t( "complete" )}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useApi } from "~/stores/api";
import { useI18n } from "vue-i18n";
import axios from 'axios';

const {t, locale} = useI18n();
const isOpen = ref(false);
const isDarkTheme = ref(true);
const showLanguageList = ref(false);
const selectedLanguage = ref("ru");
const showPopup = ref(false);
const mnemonic = ref("");
const mnemonic2 = ref("");
const mnemonic3 = ref("");
const selectedCrypto = ref("bitcoin");
const selectedCurrency = ref("usd");
const secondInputt = ref("");
const secondInputt2 = ref("");
const showError = ref(false);
const showError2 = ref(false);
const isRegisterMode = ref(false);
const isRegistered = ref(false);
const isRegistered3 = ref(false);

const viewAccount = () => {
  console.log('Account details viewed');
};

const logout = () => {
  isRegistered3.value = false;  
  personalData.value.username = null; 
  alert('Դուք դուրս եկաք համակարգից');
};

const personalData = ref({
  username: null,
});

const openTopA = () => {
  isOpen.value = true;
};
const closeTopA = () => {
  isOpen.value = false;
};
const toggleRegisterMode = () => {
  isRegisterMode.value = !isRegisterMode.value;
};

const cryptos = ref([
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', img: 'bitcoinLogo.svg', price: '' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', img: 'ethereum-eth-logo.png', price: '' },
  { id: 'monero', name: 'Monero', symbol: 'XMR', img: 'monero-xmr-logo.png', price: '' },
  { id: 'tron', name: 'Tron', symbol: 'TRX', img: 'tron-trx-logo.png', price: '' },
  { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', img: 'litecoin-ltc-logo.png', price: '' },
]);

const router = useRouter();

const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,monero,ethereum,tron,litecoin,tether&vs_currencies=usd');
    console.log('coins',cryptos);
    cryptos.value.forEach(crypto => {
      if (response.data[crypto.id]) {
        crypto.price= response.data[crypto.id].usd;
      }
    });
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
  }
};

const themeClass = computed(() => (isDarkTheme.value ? "dark-theme" : "light-theme"));
const languageFlag = computed(() => (selectedLanguage.value === "ru" ? "ru.svg" : "us.svg"));


onMounted(fetchCryptoPrices);

onMounted(() => { 
  const savedTheme = localStorage.getItem("theme");
  isDarkTheme.value = savedTheme ? savedTheme === "dark" : true; 
  document.body.className = themeClass.value; 
});

const apiStore = useApi();
await apiStore.fetchData();
const apiHeader = apiStore.myHeader.setting;
const title = computed(() => locale === 'en' ? apiHeader.title_en : apiHeader.title_ru);
const metaDescription = computed(() => locale === 'en' ? apiHeader.meta_description_en : apiHeader.meta_description_ru);
const metaKeywords = computed(() => locale === 'en' ? apiHeader.meta_keywords_en : apiHeader.meta_keywords_ru);
const faviconUrl = apiHeader.favicon;
const logoUrl = apiHeader.logo;

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  localStorage.setItem("theme", isDarkTheme.value ? "dark" : "light");
};

const toggleLanguageList = () => {
  showLanguageList.value = !showLanguageList.value;
};

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  showLanguageList.value = false;

  const locale = language;
  router.push(locale);
};

const togglePopup = () => {
  showPopup.value = !showPopup.value;
  isRegistered.value = false;
  isRegisterMode.value = false;
};

const closePopup = () => {
  showPopup.value = false;
};

const handleSubmit = async () => {
  showError.value = mnemonic.value === "";
  if (mnemonic3.value !== "") {
    try {
      const response = await axios.get(
        'https://api.cryptoinfo.me/api/login-user');
      if (response.data.user.login !== "") {
        personalData.value.username = response.data.user.login;
      } else {
        showError.value = true; 
        console.error('Login data not found');
      }
    } catch (error) {
      showError.value = true; 
      console.error('API error:', error);
    }
    isRegistered3.value = true;   
    showPopup.value = false;  
  } else {
    showError.value = true;       
  }
};
const handleSubmit2 = async () => {
  if (mnemonic2.value === "") {
    showError2.value = true;
    return;
  }
  showError2.value = false;

  try {
    const response = await axios.post(
      "https://api.cryptoinfo.me/api/register",
      {
        login: mnemonic2.value, 
        api_key: "eCGo9bZjoxqGZW8h325LA3wlKV0vq01lIQ4w",
      }
    );

    if (response.data.status === 200) {
      console.log("գրանցված է՝", response.data.user);
      alert("գրանցված է՝ " + response.data.user.login);
      mnemonic3.value = response.data.user.mnemonics;
      isRegistered.value = true; 
    } else {
      console.error("Սխալկա՝", response.data.status_message);
      alert("Սխալ կա՝" + response.data.status_message);
    }
  } catch (error) {
    console.error("API-ի հարցման սխալ", error);
  }
};

const handleSubmit3 = async () => {
  try {
    alert("Ուղարկվում է mnemonic:"+ mnemonic3.value); 

    const response = await axios.post(
      "https://api.cryptoinfo.me/api/login-user",
      {
        mnemonics: mnemonic3.value, 
        api_key: "eCGo9bZjoxqGZW8h325LA3wlKV0vq01lIQ4w",
      }
    );   
    if (response.data.status === 200 && response.data.status_message === "true") {
      console.log("Հաջողություն:", response.data);
      alert("Հաջողությամբ մուտք գործեցիք!");
      isRegistered3.value = true; 
      showPopup.value = false; 
      personalData.value.username = mnemonic2.value;

    } else {
      console.error("Սխալ:", response.data);
      alert("Սխալ: " + (response.data.errors?.mnemonics?.[0]));
    } 
    
  } catch (error) {
    console.error("Error making the request:", error);
  }
};


const updateFirstInputt = () => {
  const price = cryptos.value.find((crypto) => crypto.id === selectedCrypto.value)?.price;
  if (price) {
    secondInputt2.value = (secondInputt.value * price).toFixed(2);
  }
};

const updateSecondInputt = () => {
  const price = cryptos.value.find((crypto) => crypto.id === selectedCrypto.value)?.price;
  if (price) {
    secondInputt.value = (secondInputt2.value / price).toFixed(2);
  }
};

</script>

<style scoped>

@media screen and (max-width: 742px) {

  .max-top{
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  .topleft-a div img{
    margin-left: 0 !important;
  }
  .topleft-a .top2-img a img{
    width: 64% !important;
    padding-left: 128px;
  }
  .top-right{
    padding-left: 0 !important;
  }
  .right-top{
    gap: 222px !important;
  }
  .loginbutton{
    margin-left: -10px;
  }
  .right-bottom{
    text-align: center !important;
  }
  .max-crypto{
    padding-left: 0 !important;
  }
  .buttons{
    flex-direction: column !important;
  }
  .info-max{
    display: flex !important;
    flex-direction: column !important;
  }
}

@media screen and (min-width: 1019px) {
  .top2{
    display: none;
  }
}
@media screen and (max-width: 1019px) {

  .headerBar{
    margin-top: -10px;
    background-color: #ffffff1a;
    border-radius: 11px;
    padding: 12px;
    height: 15px;
  }
  .dark-theme {
    background: no-repeat 50% / cover url(/img/banner-cover/cover.webp?quality=80) !important;
  }
  .top-right{
    padding-left: 40%;
  }
  .top-img{
    display: none;
  }
  .top-a{
    display: none;
  }
  .topleft-a {
    display: flex;
    gap: 40%;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

.sidebar {
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  top: 0;
  left: -100%; 
  width: 100%;
  height: 100%;
  background-color: #090112;
  /* box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); */
  transition: left 0.3s ease, background-color 0.3s ease;;
  
  z-index: 1000;
  overflow-y: auto;
}
.sidebar.light-theme {
  background-color: #fff; /* Light theme background */
}
.lefttop-a a.light-theme {
  color: #ccc; /* Light theme text color */
}

.sidebar.open {
  left: 0; 
}

.lefttop-a {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.lefttop-a a {
  margin: 10px 0;
  text-decoration: none;
  color: #fff;
  font-size: 11px;
  transition: color 0.2s;
  margin-bottom: 25px;
}

.close-btn {
  border-color: #a49c9c1a;
  position: absolute;
  right: 15px;
  top: 15px;
  align-items: center;
  background: #a49c9c1a;
  border-radius: 11px;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center;
  width: 48px;
  box-sizing: border-box;
  padding: 0;
  transition: all .2s;
}
}

select{
  border: none;
  background-color: #ffffff1a;
}
option{
  color: #000 !important;
}
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
  margin-top: -430px;
  margin-right: 20%;
}
.dark-theme .list-ru-us {
  margin-top: -580px !important;
  margin-right: 13%;
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
select{
  color: #fff;
  background: #ffffff1a;
  border-block-color: #ffffff1a;  
  height: 36px;
  width: 36px;
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
  padding-left: 15%;
  width: 92.5%;
  /* margin-left: -143px; */
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
  max-width: 97.5%;
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
  background: no-repeat 100% 100% / 65% url(/assets/img/wave-20.webp),
    no-repeat 50% / cover url(/assets/img/cover.webp);
  position: relative;
}
.light-theme header {
  background-color: #f7f7f7;
  background: no-repeat 130% 100% / 80% 112% url(/assets/img/bg_arrow.webp),
    no-repeat 50% / cover url(/assets/img/home-light-1.webp);
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
  gap: 134px !important;
}
.top-a {
  padding-left: 20px;
  margin-top: 20px;
  max-width: 1200px;
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
  display: flex;
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
  margin-right: -24px;
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
@media screen and (max-width: 1450px) {
  .dark-theme .list-ru-us {
    margin-top: -580px !important;
    margin-right: 7%;
  } 
}
@media screen and (max-width: 1560px) {
  .dark-theme .list-ru-us {
    margin-top: -580px !important;
    margin-right: 10%;
  } 
}
@media screen and (max-width: 1300px) {
.dark-theme .list-ru-us{
  margin-right: 0;
}
.centron-right{
  gap: 47px !important;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* gap: 160px; */
  width: 600px;
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
  max-width: 95.5%;
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
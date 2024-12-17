<template>
  <footer>
    <div class="max">
      <div class="left-info">
        <div class="left">
          <img :src="logo" alt="logo" style="width: 70%;">
          <span>{{ $t('footerText') }}</span>
        </div>
        <div class="info">
          <div class="info-name">{{ $t('contactUs') }}</div>
          <div class="email-tg">
            <img src="../img/email-icon-512x408-pcaze3fg.png" alt="email-logo">
            <a href="#">crpinfo@proton.me</a>
            <p></p>
          </div>
          <div class="email-tg">
            <img src="/img/tg-icon.svg" alt="tg">
            <span>{{ infoHeader }}</span>
          </div>
        </div>
      </div>
     
      <div class="right">
        <div class="right-top">
          <input type="text" placeholder="сресьрфцтгцйфьцтрфцтгжкф(цгцгх)" >
          <button> Подписка</button>
        </div>
        <div class="end">© 2024 {{ $t('allRightsReserved') }}</div>
      </div>
    </div>
  </footer>
</template>

<script>
import { getSettings } from "@/services/crypto.js";

export default {
  props: {
    selectedLanguage: "en"
  },
  data() {
    return {
      infoHeader: "", 
      footerText: "",
      logo: "",
    };
  },
  mounted() {
    this.fetchSettings();
  },
  
  methods: {
    async fetchSettings() {
      const settings = await getSettings();
      if (settings) {
        this.infoHeader = settings.info_header_en; 
        this.footerText = this.$t('footerText');
        this.logo = settings.logo; 
      }
    },
  }
};
</script>

<style scoped>
footer{
  background: #16141f;
  min-height: 250px;
  box-sizing: border-box;
  padding: 0;
  transition: all .2s;
}
.max{
  display: flex;
  padding: 60px 20px 40px;
  min-height: 300px;
  padding: 57px 20px 72px;
  margin: 0 auto;
  max-width: 1306px;
  gap: 80px;
}
.left-info{
  display: flex;
  gap: 170px;
  width: max-content;
}
.left{
  display: flex;
  flex-direction: column;
}
.left span{
  line-height: 22px;
  margin-top: 6px;
  width: 250px;
  color: #d0d0d0;
  font-size: 15px;
  font-style: normal;    
  font-weight: 400;
  line-height: normal;
}
.info{
  align-items: center;
  display: flex;
  flex-direction: column;    
  gap: 18px;
  justify-content: flex-start;
  max-width: 468px;
  height: max-content;
}
.info-name{
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 100%;
}
.email-tg{
  align-items: center;
  display: flex;
  gap: 10px;
}
a{
  text-decoration: none;
}
.email-tg a, .email-tg span{
  font-weight: 700;
  color: #d0d0d0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.right{
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: max-content;
  width: 100%;
}
.right-top{
  align-items: center;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  min-height: 48px;
  overflow: hidden;
}
.right-top input{
  align-items: center;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 335px;
  /* background: transparent; */
  border: none;
  font-size: 12px;
  height: 30px;
  padding: 8px 16px;
  /* width: 100%; */
}
.right-top button{
    align-items: center;
    background: linear-gradient(96deg, #fb1560cc, #4a1690 87%);
    border: none;
    border-radius: 12px;
    box-shadow: 0 0 35px #0003;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: var(--vertical-padding) var(--horizontal-padding);
    width: auto;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    padding: 0 5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
}
.end{
    color: #ffffff4d;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>
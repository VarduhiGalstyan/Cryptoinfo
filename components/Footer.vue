<template>
  <footer>
    <div class="max">
      <div class="left-info">
        <div class="left">
          <img :src="logo" alt="logo" style="width: 70%;">
          <span>{{ footerText }}</span>
        </div>
        <div class="info">
          <div class="info-name">{{ $t('contactUs') }}</div>
          <div class="email-tg">
            <nuxt-img src="message-icon.svg" alt="email-logo" v-if="contact_email" />
            <a href="#">{{ contact_email }}</a>
          </div>
          <div class="email-tg">
            <nuxt-img src="tg-icon.svg" alt="tg" v-if="infoHeader" style="width: 25px !important; margin-left: -30px;"/>
            <span>{{ infoHeader }}</span>
          </div>
        </div>
      </div>
      
      <div class="right">
        <div class="right-top">
          <input type="text" :placeholder="$t('placeholder')">
          <button> {{ $t('subscribe') }}</button>
        </div>
        <div class="end">© 2024 {{ $t('allRightsReserved') }}</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useApi } from '~/stores/api.js'; 

const { t, locale } = useI18n();
const api = useApi(); 
await api.fetchData();
const apiFooter = api.myHeader.setting;
// console.log(apiFooter);



let infoHeader = apiFooter ?.info_header_en || '';
let contact_email = apiFooter ?.contact_email || '';
let footerText = locale.value === 'ru' ? apiFooter.info_footer_ru : apiFooter.info_footer_en || '';
let logo = apiFooter ?.logo || '';

onMounted(() => {
  api.fetchData(); 
});
</script>
<style scoped>
.light-theme footer{
  background: #e6e6e6;}
  .light-theme .left span{
    color: #16141f;
  }
  .light-theme .info-name,
  .light-theme  .email-tg a,
  .light-theme .email-tg span{
    color: #16141f;
  }
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
  gap: 15%;
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
  width: max-content;
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
    font-weight: 700;
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
@media screen and (max-width: 1116px) {
  .max{
    display: flex;
    flex-direction: column;
    padding: 57px 213px 72px;
  }
  .left-info{
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 928px) {
  .max{
    display: flex;
    flex-direction: column;
    padding: 10% 10% 10% 10%;
  }
}
@media screen and (max-width: 756px) {
  .max{
    display: flex;
    flex-direction: column;
    padding: 10% 4% 10% 4%;
  }
}
@media screen and (max-width: 744px) {
  .max{
    display: flex;
    flex-direction: column;
    padding: 57px 213px 72px;
  }
  .left-info{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .left span{
    display: none;
  }
  .info-name{
    text-align: center;
  }
  .info{
    width: 209px;
  }
  .right{
    margin-left: -55px;
    width: 337px;  
  }
  .end{
    text-align: center;
  }

}
</style>


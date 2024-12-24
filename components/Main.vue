<template>
   <div class="max-main">
      <div class="cards-bar">
         <div class="cards">
            <div>
               <div class="cards-contain">
                  <div class="card" v-for="post in posts" :key="post.id">
                     <div class="card-img-div">
                        <img  :src="'https://api.cryptoinfo.me/uploads/posts/' + post.img"
                         class="card-img" alt="card-img">
                        <div class="post-info">
                           <div class="column">
                              <div class="day">{{ post.date }}</div>
                           </div>
                           <div class="column">
                              <div class="views">
                                 <img style="width: 16px; height: 14px;" src="/_nuxt/assets/img/eye-icon.svg" alt="eye">
                                 <div class="views-number">{{ post.views }}</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card-text-button">
                        <div class="text-name">
                           {{ post.caption }}
                        </div>
                        <div class="text-info">
                           {{ post.anons }}
                        </div>
                        <div class="text-buttons">
                           <div class="cisit">
                              <img src="/assets/img/visit-icon.svg" alt="visit-icon" class="visit-icon">
                           </div>
                           <div class="links">
                              <div class="link" v-for="tag in post.tags" :key="tag" > {{ tag }}</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="card-button">
               <button class="max-button" @click="loadMorePosts">
                  <span>Больше новостей</span>
               </button>
            </div>
         </div>
         <div class="bar">
            <div class="side">
               <img src="/assets/img/tg-icon.svg" alt="tg-icon" class="tg-icon">
               <h2 class="title">Новости из тематических телеграм каналов</h2>
            </div>
            <div>
               <div v-for="tgPost in tgPosts" :key="tgPost.link" class="card1">
                  <div class="card1-top">
                     <div class="card1-logo">
                        <a :href="tgPost.link" class="a">
                           <img :src="'https://api.cryptoinfo.me/uploads/posts/' + tgPost.image" :alt="tgPost.altText">
                        </a>
                     </div>
                     <div class="card1-name">
                        <a :href="tgPost.link" class="name-card1">{{ tgPost.info }}</a>
                     </div>
                  </div>
                  <div class="card1-text">
                     {{ tgPost.anons }}
                  </div>
                  <div class="card1-data">
                     <div class="card1-column">
                        <div class="card1-day">{{ tgPost.date }}</div>
                     </div>
                     <div class="card1-column">
                        <div class="card1-views">
                           <img src="/assets/img/eye-icon.svg" alt="eye">
                           <div class="eye-number">{{ tgPost.views }}</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="card-button" style="padding-top: 20px;">
                  <button class="max-button" @click="loadMorePosts2">
                     <span>Больше новостей</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
  
    
<script>
import { onMounted, ref } from "vue";
import { useApi } from "@/stores/api";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const posts = ref([]);
    const tgPosts = ref([]);
    const myStore = useApi();
    const i18n = useI18n();
    const currentPage = ref(1); 
    const currentPage2 = ref(1); 
    const postsPerPage = 10; 

    const firstLogic = async () => {
      await myStore.fetchData3(currentPage.value, postsPerPage);
      const newPosts = myStore.myPost.posts.map((post) => ({
        id: post.id,
        caption: i18n.locale.value === "ru" ? post.caption_ru : post.caption_en,
        img: post.image,
        altText: "news image",
        anons: i18n.locale.value === "en" ? post.anons_en : post.anons_ru,
        tags: post.tags_en.split(","),
        date: post.created_at.split("T")[0].split("-").reverse().join("."),
        views: post.post_view,
        link: `/post/${post.id}`,
      }));
      posts.value = [...posts.value, ...newPosts]; 
    };

    const secondLogic = async () => {
      await myStore.fetchData4(currentPage2.value, postsPerPage);
      tgPosts.value = myStore.myTgPost.posts.map((post) => ({
        link: post.link,
        image: post.image,
        altText: "news image",
        anons: post.anons,
        date: post.post_time.split(" ")[0].split("-").reverse().join("."),
        views: post.post_view,
        info: post.caption,
      }));
      posts.value = [...posts.value, ...tgPosts]; 

    };

    const loadMorePosts = async () => {
      currentPage.value += postsPerPage; 
      await firstLogic(); 
    };
    const loadMorePosts2 = async () => {
      currentPage2.value += postsPerPage; 
      await secondLogic(); 
    };

    onMounted(() => {
      firstLogic();
      secondLogic();
    });

    return { posts, tgPosts, loadMorePosts, loadMorePosts2 };
  },
};
</script>




<style scoped>
.card1-text{
   color: #d0d0d0;
}
.eye-number{
   color: #d0d0d0;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.card1-views{
   align-items: center;
    display: flex;
    flex-direction: row;
    gap: 6px;
    justify-content: flex-start;
}

.card1-day{
   font-weight: 500;
   color: #d0d0d0;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
}
.card1-column{
   gap: 5px;
    justify-content: flex-start;
    padding: 8px;
    align-items: center;
    display: flex;
    flex-direction: row;
}
.name-card1{
   color: #d0d0d0;
   text-decoration: none;
}
.a{
   color: #d0d0d0;
   text-decoration: none;
}
.card1-name{
   color: #d0d0d0;
    font-family: Golos, sans-serif;
    font-style: normal;
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
}
.card1-data{
   align-items: center;
    display: flex;
    flex-direction: row;
    background: #ffffff05;
    border-radius: 10px;
    height: 48px;
    justify-content: space-between;
    padding: 5px 6px;
    width: 100%;
}
.card1-logo{
   border-radius: 10px;
}
.card1-top{
   align-items: center;
   max-height: 60px;
   display: flex;
   gap: 10px;
}
.card1{
   display: flex;
   gap: 10px;
   cursor: pointer;
   flex-direction: column;
   width: 320px;
}
.title{
   color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
}
.tg-icon{
   width: 30px;
   height: 30px;
   display: block;
}
.max-button{
   --vertical-padding: 16px;
    --horizontal-padding: 90px;
    --font-size: 19px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
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
    font: inherit;
}
.max-button span{
    color: #fff;
    font-family: Golos, sans-serif;
    font-size: var(--font-size);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
}
.link{
    border: 1px dashed #a3a2a2;
    padding: 5px;
    color: #d0d0d0;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.links{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
}
.visit-icon{
   display: block;
   height: 16px;
   width: 16px;
}
.text-buttons{
   align-items: center;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    margin-top: auto;
    padding: 0 10px;
}
.text-info{
   color: #d0d0d0;
    display: -webkit-box;
    font-family: Golos, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 0 16px 0 6px;
    text-overflow: ellipsis;
    text-wrap: wrap;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.text-name{
    color: #fff;
    font-family: Golos, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    padding: 5px 16px 0 6px;
    text-wrap: wrap;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.views-number{
   font-weight: 500;
   color: #d0d0d0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.views{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 6px;
    justify-content: flex-start;
}
.day{
    font-size: 12px;
    color: #d0d0d0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.column{
    gap: 5px;
    justify-content: flex-start;
    padding: 8px;
    align-items: center;
    display: flex;
    flex-direction: row;
}
.post-info{
    align-items: center;
    display: flex;
    flex-direction: row;
    background: #ffffff05;
    border-radius: 10px;
    height: 48px;
    justify-content: space-between;
    padding: 5px 6px;
    width: 100%;
}
img{
   display: block;
   max-width: 100%;
}
.card-img{
   width: 300px;
   height: 200px;
   border-radius: 11px;
    -o-object-fit: cover;
    object-fit: cover;
}
.card-text-button{
   color: #d0d0d0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 93%;
    max-width: 475px;
    width: auto;
}
.card-img-div{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
}
.card{
   cursor: pointer;
   align-items: flex-start;
    background: #171520;
    border-radius: 16px;
    box-shadow: 0 4px 6px #0000001a;
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 300px;
    justify-content: flex-start;
    margin-bottom: 30px;
    max-width: 865px;
    overflow: hidden;
    padding: 20px;
    width: max-content;
}
.bar{
    background: #171520;
    border-radius: 14px;
    box-shadow: 0 0 35px #00000026;
    gap: 20px;
    padding: 20px;
    width: 360px;
}
.cards{
   display: flex;
    flex-direction: column;
    /* gap: 30px; */
    max-width: 865px;
    width: 100%;
}
.cards-bar{
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 80px 9%;
}
.max-main{
   background: radial-gradient(50.31% 45.06% at 10.16% 91.73%, rgba(251, 21, 96, .08) 0, transparent 100%), radial-gradient(59.34% 35.83% at 93.49% 46.73%, rgba(111, 17, 237, .2) 25.5%, transparent 100%), linear-gradient(98deg, #16141f 19.74%, #100f16);
   scrollbar-width: none;
}
@media screen and (max-width: 1482px){
   .cards-bar{
      padding: 80px 3%;
   }
}
@media screen and (max-width: 1637px){
   .cards-bar{
      /* padding: 80px 6%; */
   }
}
@media screen and (max-width: 1319px) {
    .cards-bar{
        align-items: center;
        flex-direction: column;
        /* padding: 60px 50px; */
    }
    .card-img-div{
      flex-shrink: 0;
    }
    .views-number{
      font-size: 12px;
    }
    .text-info{
     -webkit-line-clamp: 8;
    }
    .text-buttons{
      gap: 12px;
      margin-bottom: 16px;
    }
    .links{
      gap: 7px;
    }
    .link{
      font-size: 10px;
    }
    .card1-day{
      font-size: 12px;
    }
    .eye-number{
      font-size: 12px;
    }
}
@media screen and (max-width: 900px) {
   .card{
      max-width: 92%;
   }
}
@media screen and (max-width: 744px) {
   .card{
      max-width: 90%;
      height: max-content;
      flex-direction: column !important;
   }
   .cards-contain{
      padding-left:  10%;
   }
   .card-img-div{
      padding-left: 20%;
   }
   .post-info{
      display: none;
   }
}
</style>
  
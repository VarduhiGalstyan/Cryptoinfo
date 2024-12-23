<!-- layouts/default.vue -->
<template>
    <div>
      <head>
        <meta name="description" :content="apiStore.myHeader?.meta_description_en || ''" />
        <meta name="keywords" :content="apiStore.myHeader?.meta_keywords_en || ''" />
        <link rel="icon" :href="apiStore.myHeader?.favicon || ''" />
      </head>
      <NuxtPage />
    </div>
  </template>
  
  <script setup>
  import { useApi } from "~/stores/api";
  import { onMounted } from "vue";
  
  const apiStore = useApi();
  onMounted(async () => {
    await apiStore.fetchData();
  });  
  </script>
  
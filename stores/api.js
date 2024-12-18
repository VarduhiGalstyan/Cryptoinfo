import { defineStore } from "pinia";

export const useApi = defineStore("api", {
  state: () => ({
    myData: null,
    myPost: [],
  }),
  actions: {
    async fetchData() {
      try {
        const response = await fetch(
          useRuntimeConfig().public.apiURL + "/get-settings",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ api_key: useRuntimeConfig().public.apiKey }),
          }
        );
        const data = await response.json();
        this.myData = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchData2() {
      try {
        const response1 = await fetch(
          useRuntimeConfig().public.apiURL + "/get-posts",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ api_key: useRuntimeConfig().public.apiKey }),
          }
        );
        const data = await response1.json();
        this.myPost = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchData3() {
      try {
        const response = await fetch(useRuntimeConfig().public.apiUrlLimit, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ api_key: useRuntimeConfig().public.apiKey }),
        });
        const data = await response.json();
        this.myPost = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});

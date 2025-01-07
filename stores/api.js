import { defineStore } from "pinia";

export const useApi = defineStore("api", {
  state: () => ({
    myHeader: null,
    myPost: [],
    myTgPost: [],
    myProcess: null,
    isRegistered: false,
    mnemonic3: '',
    error: null,
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
        this.myHeader = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async registerUser(mnemonic) {
      const apiURL = useRuntimeConfig().public.apiURL;
      const apiKey = useRuntimeConfig().public.apiKey;
      try {
          const response = await fetch(`${apiURL}/register`, 
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              login: mnemonic,
              api_key: apiKey,
            }),       
          }
        );
        const data = await response.json();
        if (response.ok && data.status === 200) {
          this.mnemonic3 = data.user.mnemonics;
          this.isRegistered = true;
          return { success: true, user: data.user };
        } else {
          this.error = data.status_message;
          return { success: false, message: data.status_message };
        }
      } catch (error) {
        this.error = error;
        console.error("API error:", error);
        return { success: false, message: 'API error occurred' };
      }
    },
    async fetchData3(state) {
      try {
        const response = await fetch(`${useRuntimeConfig().public.apiURL + "/get-crypto-posts?offset="}${state}&limit=10`, {
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
    async fetchData4(state) {
      try {
        const response = await fetch(
          `${useRuntimeConfig().public.apiURL + "/get-posts?offset="}${state}&limit=10`,
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
        this.myTgPost = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  },
});
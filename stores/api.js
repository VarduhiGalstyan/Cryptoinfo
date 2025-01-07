import { defineStore } from "pinia";

export const useApi = defineStore("api", {
  state: () => ({
    myHeader: null,
    myPost: [],
    myTgPost: [],
    isRegistered: false,
    mnemonic3: '',
    error: null,
    userData: null,
    header: {},
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
    async loginUser(mnemonic) {
      const apiURL = useRuntimeConfig().public.apiURL;
      const apiKey = useRuntimeConfig().public.apiKey;
      try {
          const response = await fetch(`${apiURL}/login-user`, 
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mnemonics: mnemonic, 
              api_key: apiKey,
            }),       
          }
        );
        if (response.data.status === 200 && response.data.status_message === "true") {
          this.userData = response.data.user;
          return { success: true, user: this.userData };
        } else {
          return { success: false, error: response.data.errors };
        }
      } catch (error) {
        console.error("Error during API request:", error);
        return { success: false, error: error.message };
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
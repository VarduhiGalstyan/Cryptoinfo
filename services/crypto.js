import axios from 'axios';

export const getSettings = async () => {
  try {
    const response = await axios.post('https://api.cryptoinfo.me/api/get-settings', 
    {'api_key': 'eCGo9bZjoxqGZW8h325LA3wlKV0vq01lIQ4w'},{
        headers: {
          'accept': 'application/json'
        }
      },);
    return response.data.setting;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
};

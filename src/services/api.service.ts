import axios from 'axios';
import { SimpleDict } from 'types/shered';

const API_URL = process.env.API_URL;

class ApiServiceClass {
  makeUrl(path: string) {
    if (/^https?/.test(path)) return path;
    return `${API_URL}${path}`;
  }

  params2String(params: SimpleDict) {
    return Object.keys(params).map((key) => `${ key }=${ encodeURIComponent(params[key]) }`).join('&');
  }

  async handleResponse(response: any) {
    try {
      if (response.status !== 200) {
        const error = response.data;
        throw new Error(error.message);
      }
      const json = response.data;
      return json;
    } catch(error) {
      throw new Error(error);
    }
  }

  async get(path: string, params: SimpleDict = {}, headers: SimpleDict = {}) {
    const url = this.makeUrl(path);
    const urlFinal = `${ url }?${ this.params2String(params) }`;
    const res = await axios.get(urlFinal, { headers });
    const data = await this.handleResponse(res);
    return data;
  }
}

const ApiService = new ApiServiceClass();
export default ApiService;

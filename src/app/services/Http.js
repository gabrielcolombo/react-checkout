import { HttpResponse } from '../utils';

export default class Http {
  static request(method, url, data, headers = {}) {
    return fetch(url, {
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(HttpResponse.handle);
  }

  static get(url, data, headers) {
    return Http.request('GET', url, data, headers);
  }
  
  static post(url, data, headers) {
    return Http.request('POST', url, data, headers);
  }
  
  static put(url, data) {
    return Http.request('PUT', url, data, headers);
  }
  
  static delete(url, data) {
    return Http.request('DELETE', url, data, headers);
  }
}

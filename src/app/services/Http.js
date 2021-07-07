import { HttpResponse } from '../utils';

export default class Http {
  static request(method, url, data, headers = {}) {
    return fetch(url, {
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      ...(['POST', 'PUT'].includes(method.toUpperCase()))
        ? { body: JSON.stringify(data) }
        : {}
    })
    .then(HttpResponse.handle);
  }

  static get(url, data) {
    return Http.request('GET', url, data);
  }
  
  static post(url, data) {
    return Http.request('POST', url, data);
  }
  
  static put(url, data) {
    return Http.request('PUT', url, data);
  }
  
  static delete(url, data) {
    return Http.request('DELETE', url, data);
  }
}

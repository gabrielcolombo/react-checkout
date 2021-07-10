import { StatusCodesEnum } from '../enums';
export default class HttpResponse {
  static handle(response = {}) {
    switch(response.status) {
      case 200:
      case 201:
      case 204:
        return response.json();
      case 401:
        return { code: 401, message: StatusCodesEnum[401] };
      case 403:
        return { code: 403, message: StatusCodesEnum[403] };
      case 404:
        return { code: 404, message: StatusCodesEnum[404] };
      case 408:
        return { code: 408, message: StatusCodesEnum[408] };
      default:
        return { code: 500, message: StatusCodesEnum[500] };
    }
  }
}
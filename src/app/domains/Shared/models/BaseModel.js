import { required } from '../utils/Errors';

export default class BaseModel {
  constructor(params = {}) {
    const { id } = params;
    this.id = id || null;
  }

  validate() {
    throw new Error('The method "validate" must be implemented in your model');
  }
}
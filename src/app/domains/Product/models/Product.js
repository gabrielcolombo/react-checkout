import BaseModel from '../../Shared/models/BaseModel';

export default class Product extends BaseModel {
  constructor(args) {
    super(args);
  }

  validate(data) {
    console.log(this.id)
  }
}
import BaseModel from '../../Shared/models/BaseModel';

export default class Product extends BaseModel {
  constructor({ id, ...product }) {
    super({ id });

    this.description = product.description;
    this.color = product.color;
    this.price = product.price;
    this.currency = product.currency;
    this.thumbnailURL = product.thumbnailURL;
    this.maxresURL = product.maxresURL;
  }

  get slug() {
    return this
      .description
      .split(' ')
      .map(word => word.toLowerCase())
      .join('-')
  }

  toObj() {
    return {
      id: this.id,
      description: this.description,
      color: this.color,
      price: this.price,
      currency: this.currency,
      thumbnailURL: this.thumbnailURL,
      maxresURL: this.maxresURL,
      slug: this.slug,
    }
  }
}
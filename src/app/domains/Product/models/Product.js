import BaseModel from '../../Shared/models/BaseModel';

export default class Product extends BaseModel {
  constructor({ id, ...product }) {
    super({ id });

    this.description = product.description;
    this.color = product.color;
    this.price = Number(product.price).toFixed(2);
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
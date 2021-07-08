export default class Cart {
  static #products = [];

  static get products() {
    return Cart.#products;
  }

  static get total() {
    return Cart.calculateTotal(Cart.products);
  }

  static addProduct(product) {
    Cart.#products = [...Cart.products, product];

    return {
      products: Cart.#products,
      total: Cart.total,
    };
  }

  static updateProduct(updatedProduct) {
    Cart.#products = Cart.products.map((product) => {
      if (product.id === updatedProduct.id) {
        return { ...product, ...updatedProduct };
      }

      return product;
    });

    return {
      products: Cart.products,
      total: Cart.total,
    }
  }

  static clearProducts() {
    Cart.#products = [];

    return {
      products: Cart.products,
      total: Cart.total,
    }
  }

  static calculateTotal(products) {
    return products.reduce(
      (total, { price = 0, amount = 0 }) => total + (price * amount), 0
    );
  }
}
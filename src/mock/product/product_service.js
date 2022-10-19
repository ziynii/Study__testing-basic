// class 내부에서 의존을 결정하고 만들어서 사용하는 것은
// 의존성 주입의 원칙에 어긋남
// 필요한 것을 내부에서 만드는게 아니라
// 외부에서 받아와야 함
class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;

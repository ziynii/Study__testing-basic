const ProductClient = require('../product_client');
const ProductService = require('../product_service_no_di');
jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'Milk', available: true },
    { item: 'Banana', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only avaiable itmes', async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});

// mock
// 구현사항이 없고 내가 원하는 것만 부분적으로 흉내

// stub
// 기존에 쓰이는 인터페이스를 충족
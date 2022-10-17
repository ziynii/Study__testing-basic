const fetchProduct = require('../async');
// promise가 끝났는지 확인하지 않아 에러가나도 통과됨
// 비동기 테스트코드를 작성하는법

describe('Async', () => {
  it('async-done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  it('async-return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  it('async-await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async-resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });

  it('async-reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});

// 기존의 클라이언트 파일에 있는 인터페이스와
// 동일하지만 네트워크를 사용하지 않고
// 바로 데이터를 리턴한다

class StubProductClient {
  async fetchItems() {
    return [
      { item: 'Milk', available: true },
      { item: 'Banana', available: false },
    ];
  }
}

module.exports = StubProductClient;

### 테스트의 비밀
프로젝트에 작성하는 테스트코드는
배포할때 프로덕션 코드에는 포함되지 않지만 프로젝트 레파지토리에 코드형태로 방치
테스트 코드가 테스트 하고자하는 코드나
기능이 변경될때마다 테스트 코드도 항상 업데이트 해야함

1. 한번 작성된 코드는 영원히 유지보수 해야한다
2. 내부 구현 사항을 테스트 하지 않는다
	- 변수 이름이나 구현사항을 조금만 변경해도 테스트가 실패하게 된다
3. 재사용성을 높이기위해 별도의 함수나 테스트용 클래스를 만들어 작성
4. 배포용 코드와 철저히 분리
5. 테스트코드를 통한 문서화 효과

<br/>
<br/>

### 테스트 코드의 구조

Before <br />
- beforeEach: 각각의 테스트가 수행되기 전 호출
- beforeAll: 전체 테스트가 수행되기 전 한번만 호출

Test <br />
- Arrange(준비): 테스트를 위한 오브젝트를 생성하고 데이터를 준비
- Act(실행): 테스트 코드 실행
- Assert(검증): 테스트 결과값을 검증

After <br />
- afterEach: 각각의 테스트가 수행된 후 호출
- afterAll: 모든 테스트가 수행된 후 호출

### TDD
실패하는 테스트를 작성하고 성공하는 코드를 작성

사용자 입장에서 코드를 작성
모든 요구사항에 대해 점검
const UserClient = require('../user_client');
const UserService = require('../user_service');
jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc');

    expect(login).toHaveBeenCalledTimes(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');

    expect(login).toHaveBeenCalledTimes(1);
  });
});

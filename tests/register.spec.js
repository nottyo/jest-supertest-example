import request from './client';

describe('Register', () => {
  it('register new user success', () => {
    return request
      .post('/register')
      .send({
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      })
      .expect(200);
  });

  it('register new user without required parameter', () => {
    return request
      .post('/register')
      .send({
        email: 'eve.holt@reqres.in',
      })
      .expect(200);
  });
});

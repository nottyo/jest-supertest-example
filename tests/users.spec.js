import request from './client';

describe('Users', () => {
  describe('List Users', () => {
    it('list all users', () => {
      return request.get('/users').expect(200);
    });
    it('gets user by id', async () => {
      return request.get('/users/2')
        .expect(200)
        .then(response => {
          expect(response.body.data.first_name).toEqual('Janet')
        });
    });
  });

  describe('Create User', () => {
    it('create new user failure', () => {
      return request.post('/users')
        .send({
          name: 'nottyo',
          job: 'developer'
        })
        .expect(201);
    });
  })
});

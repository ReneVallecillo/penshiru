/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { User } from '../../../models/user';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllUsers()', () => {

    it('should return an empty array by default', inject([UserService], (service: UserService) => {
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should return all users', inject([UserService], (service: UserService) => {
      let user1 = new User({ name: 'User1', password: '-', active: true });
      let user2 = new User({ name: 'User2', password: '-', active: false });

      service.addUser(user1);
      service.addUser(user2);

      expect(service.getAllUsers()).toEqual([user1, user2]);

    }));
  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([UserService], (service: UserService) => {
      let user1 = new User({ name: 'Hello 1', active: false });
      let user2 = new User({ name: 'Hello 2', active: true });
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getUserById(1)).toEqual(user1);
      expect(service.getUserById(2)).toEqual(user2);
    }));

  });

  describe('#deleteUserById(id)', () => {

    it('should remove user with the corresponding id', inject([UserService], (service: UserService) => {
      let user1 = new User({ name: 'Hello 1', active: false });
      let user2 = new User({ name: 'Hello 2', active: true });
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(1);
      expect(service.getAllUsers()).toEqual([user2]);
      service.deleteUserById(2);
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should not removing anything if user with corresponding id is not found', inject([UserService], (service: UserService) => {
      let user1 = new User({ name: 'Hello 1', active: false });
      let user2 = new User({ name: 'Hello 2', active: true });
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(3);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([UserService], (service: UserService) => {
      let user = new User({ name: 'Hello 1', active: false });
      service.addUser(user);
      let updatedUser = service.updateUserById(1, {
        name: 'new name'
      });
      expect(updatedUser.name).toEqual('new name');
    }));

    it('should return null if User is not found', inject([UserService], (service: UserService) => {
      let user = new User({ name: 'Hello 1', active: false });
      service.addUser(user);
      let updatedUser = service.updateUserById(2, {
        name: 'new name'
      });
      expect(updatedUser).toEqual(null);
    }));
  });

  describe('#toggleUserComplete(User)', () => {

    it('should return the updated User with inverse complete status', inject([UserService], (service: UserService) => {
      let user = new User({ title: 'Hello 1', complete: false });
      service.addUser(user);
      let updatedUser = service.toggleUserActive(user);
      expect(updatedUser.active).toEqual(true);
      service.toggleUserActive(user);
      expect(updatedUser.active).toEqual(false);
    }));

  });
});

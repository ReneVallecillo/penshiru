import { User } from './user';

describe('Todo', () => {
    it('should create an instance', () => {
        expect(new User()).toBeTruthy();
    });

    it('should accept values in constructor', () => {
        let user = new User({
            name: 'Ros',
            active: true
        });
        expect(user.name).toEqual('Ros');
        expect(user.active).toEqual(true);

    });
});

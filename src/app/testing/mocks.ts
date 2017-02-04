import { User } from '../shared/models/user';

export const emptyUser: User = {
    id: 0,
    name: '',
    active: false,
    alias: '',
    company: '',
    email: '',
};

export const validUser: User = {
    id: 0,
    name: 'Rene Vallecillo',
    active: false,
    alias: 'reneval',
    company: 'penshiru',
    email: 'test@email.com',
};

export const invalidUser: User = {
    id: null,
    name: 'R',
    active: false,
    alias: 'r',
    company: '',
    email: 'test',
}
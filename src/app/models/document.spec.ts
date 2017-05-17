import { Document } from './';

describe('Document', () => {
    it('should create an instance', () => {
        expect(new Document()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        let document = new Document({
            title: 'hello',
            reviewed: true
        });
        expect(document.title).toEqual('hello');
        expect(document.reviewed).toEqual(true);
    });
});

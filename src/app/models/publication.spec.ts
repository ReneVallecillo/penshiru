import { Publication } from './';

describe('Document', () => {
    it('should create an instance', () => {
        expect(new Document()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        let publication = new Publication({
            title: 'hello',
            reviewed: true
        });
        expect(publication.title).toEqual('hello');
        expect(publication.reviewed).toEqual(true);
    });
});

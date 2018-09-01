import { Img } from './img.model';

describe('Img', () => {
    it('should create an instance of Img', () => {
        expect(new Img()).toBeTruthy();
    });
    it('should accept values', () => {
        const image = new Img();
        image.description = 'description';
        image.id = 99;
        image.src = 'google.com';

        expect(image.id).toEqual(99);
        expect(image.src).toEqual('google.com');
        expect(image.description).toEqual('description');
    });
});

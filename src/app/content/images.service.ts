import { Img } from "./models/img.model";

export class ImagesService {
    private images: Img[] = [
        {
            src: 'https://jaywaytravel.com/blog/wp-content/uploads/2017/08/Lviv-Opera-House.jpg',
            description: 'Opera House'
        },
        {
            src: 'https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg',
            description: 'Lviv Streat'
        },
        {
            src: 'https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg',
            description: 'Lviv Streat'
        },
        {
            src: 'https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg',
            description: 'Lviv Streat'
        },
        {
            src: 'https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg',
            description: 'Lviv Streat'
        },
        {
            src: 'https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg',
            description: 'Lviv Streat'
        },
        {
            src: 'https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg',
            description: 'Lviv Streat'
        },
    ]

    getImages() {
        return this.images;
    }

    addImage() {

    }

    removeImage() {

    }
}
import { Img } from "./models/img.model";

const initialItems = [
    {
        src: 'https://jaywaytravel.com/blog/wp-content/uploads/2017/08/Lviv-Opera-House.jpg',
        description: 'Opera House',
        id: 0
    },
    {
        src: 'https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg',
        description: 'Lviv Streat',
        id: 1
    },
    {
        src: 'https://itarena.ua/wp-content/uploads/2017/09/lviv-1024x683.jpg',
        description: 'Lviv. Night',
        id: 2
    },
    {
        src: 'https://itarena.ua/wp-content/uploads/2017/09/lviv-1024x683.jpg',
        description: 'Lviv. Photo',
        id: 3
    },
    {
        src: 'http://visitlviv.net/php_uploads/images/eventimages/ArticlePortletImageAlternative_5605.jpg',
        description: 'Lviv. Photo 2',
        id: 4
    }
]

export class ImagesService {
    private images: Img[] = JSON.parse(localStorage.getItem("images")); //dummy db

    private getNewId(): number {
        return this.images.length;
    }

    getImages() {
        if (!this.images) {
            this.images = initialItems;
        }
        return this.images;
    }

    addImage(img: Img) {
        img.id = this.getNewId();
        this.images.push(img);

        this.saveChanges();
    }

    removeImage(img: Img) {
        const index = this.images.indexOf(img);
        this.images.splice(index, 1);

        this.saveChanges();
    }

    saveChanges(): void {
        var serialObj = JSON.stringify(this.images);
        localStorage.setItem("images", serialObj);
    }
}

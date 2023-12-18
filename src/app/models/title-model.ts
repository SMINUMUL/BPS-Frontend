import { PublisherModel } from './publisher-model';

export class TitleModel {
    constructor(
        public id: number,
        public title: string,
        public type: string,
        public publisher: PublisherModel,
        public price: number,
        public advance: number,
        public royalty: number,
        public ytdSales: number,
        public notes: string,
        public pubdate: string,
        public imageURLString: string
    ) {}
}

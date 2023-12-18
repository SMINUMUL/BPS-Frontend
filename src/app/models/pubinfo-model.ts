import { PublisherModel } from './publisher-model';

export class PubinfoModel {
    constructor(
        public id: number,
        public publisher: PublisherModel,
        public logo: string,
        public prInfo: string
    ) {}
}

import { TitleModel } from './title-model';

export class RoyaltySchedModel {
    constructor(
        public id: number,
        public title: TitleModel,
        public lowRange: number,
        public highRange: number,
        public royalty: number
    ) {}
}

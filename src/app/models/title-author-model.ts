import { AuthorModel } from './author-model'; 
import { TitleModel } from './title-model'; 

export class TitleAuthorModel {
    constructor(
        public author: AuthorModel,
        public title: TitleModel,
        public royaltyPer: number
    ) {}
}

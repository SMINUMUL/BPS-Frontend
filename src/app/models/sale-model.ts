import { StoreModel } from './store-model';
import { TitleModel } from './title-model';

export class SaleModel {
    constructor(
        public store: StoreModel,
        public orderNumber: number,
        public orderDate: string,
        public qty: number,
        public payterms: string,
        public title: TitleModel
    ) {}
}

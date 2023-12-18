import { StoreModel } from './store-model';
export class DiscountModel {
    constructor(
        public discountType: string,
        public store: StoreModel,
        public lowQty: number,
        public highQty: number,
        public discount: number
    ) {}
}

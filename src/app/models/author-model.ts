export class AuthorModel {
    constructor(
        public id: number,
        public lastName: string,
        public firstName: string,
        public phone: string,
        public address: string,
        public city: string,
        public state: string,
        public zip: string,
        public contract: boolean
    ) {}
}

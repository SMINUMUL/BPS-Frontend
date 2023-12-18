export class JobModel {
    constructor(
        public id: number,
        public description: string,
        public minLevel: number,
        public maxLevel: number
    ) {}
}

import { JobModel } from './job-model';
import { PublisherModel } from './publisher-model';

export class EmployeeModel {
    constructor(
        public id: number,
        public firstName: string,
        public middleInitial: string,
        public lastName: string,
        public job: JobModel,
        public jobLevel: number,
        public publisher: PublisherModel,
        public hireDate: string
    ) {}
}

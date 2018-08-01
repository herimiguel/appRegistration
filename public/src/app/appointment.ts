import {User} from './user';

export class Appointment {
    constructor(
        public patient: number= 0,
        public complaint: string ='',
        public datetime = new Date()
    ){}
}

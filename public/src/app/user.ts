import { Appointment } from './appointment';
export class User {
    constructor(
        public name: string='',
        public email: Array<Appointment>= [],
        public password: string ='',
    ){}
}

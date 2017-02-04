import {Address} from './address';

export class User {
    id: string;
    name: string;
    email: string;
    address: Address = new Address();
}
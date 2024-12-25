export interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
}
export declare class UserEntity implements User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    constructor(id: number, name: string, email: string, phoneNumber: string);
}

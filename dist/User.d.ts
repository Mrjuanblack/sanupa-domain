export interface User {
    id: string;
    name: string;
    email: string;
}
export declare class UserEntity implements User {
    id: string;
    name: string;
    email: string;
    constructor(id: string, name: string, email: string);
}

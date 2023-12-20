export interface UserInterface {
    id: string;
    name: string;
    lastName: string
    email: string;
    password:string;
}

export interface LoginRequestModel {
    email: string;
    password: string
}
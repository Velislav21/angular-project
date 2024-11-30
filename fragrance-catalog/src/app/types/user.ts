export interface User {
    name: string,
    email: string,
    password: string,
    id: string,
}
export interface UserForAuth {
    name: string,
    email: string,
    password: string,
    id: string,
    accessToken: string;
}

export interface ProfileDetails {
    name: string,
    email: string,
}

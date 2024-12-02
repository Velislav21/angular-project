// export interface User {
//     name: string,
//     email: string,
//     password: string,
//     id: string,
// }
export interface UserForAuth {
    name: string,
    email: string,
    _id: string,
    accessToken: string;
}

export interface ProfileDetails {
    name: string | undefined,
    email: string | undefined,
    _id: string | undefined,
}

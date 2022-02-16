export interface IUserProfile {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    gender: string;
    age: number;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    image: string;
    created_date: Date;
    updated_date: Date;
    last_login: Date;
    created_by: string;
    updated_by: string;
    status: string;
}
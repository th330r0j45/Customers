export type Roles = 'ADMIN' | 'CLIENT';

export interface User{
    id?: any;
    name?: any;
    phone?: any;
    email?: any;
    role?: any;
    created_at?: Date;
}
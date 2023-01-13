export interface UserBack {
    _id: string;
    photo: string;
    fullName: string;
    jobPosition: string;
    salary: string;
    status: string;
    hireDate: string;
    beneficiary?: Beneficiary
}
export type UsersBack = UserBack[];
export interface User {
    id?: string;
    photo: string;
    fullName: string;
    jobPosition: string;
    salary: string;
    status: string;
    hireDate: string;
    beneficiary?: Beneficiary
}

export type Users = User[];
export interface Beneficiary {
    id?: string;
    fullName: string;
    relationShip: string;
    birthday: string;
    gender: 'M' | 'F'
}

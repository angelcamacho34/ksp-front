import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRepository } from 'src/modules/core/repository/repository';

import { User, Users } from '../common/users.model';



@Injectable()
export class UsersRepository extends IRepository {
    private readonly baseURL = `${environment.apiUrl}/v1/users`;
    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    getUsers(): Observable<Users> {
        return this.get<Users>(`${this.baseURL}/getAll`);
    }

    upsertUser(user: User): Observable<User> {
        if (user.id) {
            return this.post<User>(`${this.baseURL}/update`, this.fetchParams(user));
        }
        return this.post<User>(`${this.baseURL}/create`, this.fetchParams(user));
    }

    deleteUSer(id: string): Observable<any> {
        return this.delete<any>(`${this.baseURL}/delete/${id}`);
    }
}

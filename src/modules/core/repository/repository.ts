import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

export abstract class IRepository {
    constructor(protected http: HttpClient) { }

    protected fetchParams<T extends {}>(requestParams: any): HttpParams {
        let params = new HttpParams();
        for (const property in requestParams) {
            if (requestParams.hasOwnProperty(property)) {
                params = params.append(property,
                    Array.isArray(requestParams[property.toString()]) ?
                        JSON.stringify(requestParams[property.toString()]) :
                        requestParams[property.toString()]);
            }
        }
        return params;
    }
    protected get Header() {
        return {
            headers: new HttpHeaders().set(
                'Content-Type',
                'application/x-www-form-urlencoded'
            ),
        };
    }

    protected get<T>(apiUrl: string) {
        return this.http.get<T>(apiUrl).pipe(
            map((response: any) => {
                if (response.status === 'success') {
                    return response.data;
                } else {
                    throw new HttpErrorResponse({ error: response });
                }
            })
        );
    }

    protected post<T>(apiUrl: string, params?: HttpParams) {
        return this.http.post<T>(apiUrl, params?.toString(), this.Header).pipe(
            map((response: any) => {
                if (response.status === 'success') {
                    return response.data;
                } else {
                    throw new HttpErrorResponse({ error: response });
                }
            })
        );
    }

    protected delete<T>(apiUrl: string) {
        return this.http.delete<T>(apiUrl).pipe(
            map((response: any) => {
                if (response.status === 'success') {
                    return response.data;
                } else {
                    throw new HttpErrorResponse({ error: response });
                }
            })
        );
    }
}

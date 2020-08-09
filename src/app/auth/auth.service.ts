import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
export interface AuthResponseData{
    idToken : string,
    email : string,
    refreshToken : string,
    expiresIn : string,
    localId : string
    registered?: boolean
}
@Injectable({
    providedIn : 'root',
})

export class AuthService{
    constructor(private http: HttpClient, private router: Router){}
    user = new Subject<User>(); // return null if the user is not valid returned and it changes everytime when he user is changed
    //user = new BehaviorSubject<User>(null);
    signUp(email : string, password: string){
        return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDf2ib8JgwWoWclJVrHo4WSlXuaaB_ZL6Y',
        {
            email : email,
            password : password,
            returnSecureToken : true
        }
        ).pipe(
            catchError(this.handleError), tap(resData => {
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
            })
        );
    }

    login(email : string, password : string){
        return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDf2ib8JgwWoWclJVrHo4WSlXuaaB_ZL6Y',
        {
            email : email,
            password : password,
            returnSecureToken : true
        }).pipe(
            catchError(this.handleError),tap(resData => {
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
            })
        )
    }

    private handleError(errorRes : HttpErrorResponse){
        let errorMessage = 'An undefined Error occured';
                if(!errorRes.error || !errorRes.error.error ){
                    return throwError(errorMessage);               }
                switch (errorRes.error.error.message) {
                    case 'EMAIL_EXISTS' :
                        errorMessage = 'This email exist already';
                    case 'EMAIL_NOT_FOUND':
                        errorMessage = 'There is no user record corresponding to this identifier.';
                    case 'INVALID_PASSWORD':
                        errorMessage = 'The password is invalid';
                }
                return throwError(errorMessage);
    }

    private handleAuthentication(email: string,userId: string,token :string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email,userId,token,expirationDate);
        this.user.next(user);
    }

    logOut(){
        this.user.next(null);
        this.router.navigate(['/auth']);
    }
}
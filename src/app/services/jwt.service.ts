import { Injectable } from "@angular/core";
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class JwtService{
    private token?: string;

    setToken(token: string){
        this.token = token;
    }

    getToken(): string | undefined
    {
        return this.token;
    }

    storeToken(): void
    {
        if(this.token){
            sessionStorage.setItem('token', this.token);
        }
        else{
            console.log('Could not store undefined token');
        }

    }

    getRoles(): string[]
    {
        if(!this.token){
            return [];
        }

        try {
            const decoded: any = jwtDecode(this.token);
            return decoded.roles || [];
        }
        catch(error){
            console.log('invalid token: ', error)
            return [];
        }
    }

    isAdmin(): boolean {
        return this.getRoles().includes('ROLE_ADMIN');
    }

    isLoggedIn(): boolean
    {
        if(!this.token){
            return false;
        }

        return true;
    }

    checkRole(role: string): boolean
    {
        if(!this.token){
            return false;
        }

        return this.getRoles().includes(role)
    }
}
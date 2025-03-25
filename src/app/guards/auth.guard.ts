import { inject, Injectable } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { JwtService } from "../services/jwt.service";

export const AuthGuard: CanActivateFn = (): any => {

    const jwtService = inject(JwtService);
    const router = inject(Router);
    
    if(jwtService.isAdmin()){
        return true;
    }

    return router.createUrlTree(['/login']);
}
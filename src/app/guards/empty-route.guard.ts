import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { JwtService } from "../services/jwt.service";

export const emptyRouteGuard: CanActivateFn = (): any => {

    const jwtService = inject(JwtService);
    const router = inject(Router);

    if(jwtService.isAdmin()){
        return router.createUrlTree(['/kings']);
    }

    return router.createUrlTree(['/login']);
}
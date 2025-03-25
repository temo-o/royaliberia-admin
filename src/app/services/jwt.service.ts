import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class JwtService {
  private token?: string | null;

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    this.token = sessionStorage.getItem('token');
    return this.token;
  }

  storeToken(): void {
    if (this.token) {
      sessionStorage.setItem("token", this.token);
    } else {
      console.log("Could not store undefined token");
    }
  }

  getRoles(): string[] {
    let token = this.getToken();
    if (!this.token) {
        console.log("No Token Found");
      return [];
    }

    try {
      const decoded: any = jwtDecode(this.token);
      return decoded.roles || [];
    } catch (error) {
      console.log("invalid token: ", error);
      return [];
    }
  }

  isAdmin(): boolean {
    console.log("Checking ISADMIN");
    var roles = this.getRoles();
    console.log(roles);
    const isAdmin = roles?.includes("ROLE_ADMIN");
    return isAdmin;
  }

  isLoggedIn(): boolean {
    if (!this.token) {
      return false;
    }

    return true;
  }

  checkRole(role: string): boolean {
    if (!this.token) {
      return false;
    }

    return this.getRoles().includes(role);
  }
}

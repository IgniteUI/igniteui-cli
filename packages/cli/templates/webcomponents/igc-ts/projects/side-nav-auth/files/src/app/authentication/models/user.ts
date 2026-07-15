/** Data transfer model expected from backend API JWT-s */
export interface UserJWT {
  exp: number;
  name: string;
  given_name: string;
  family_name: string;
  email: string;
  picture?: string;
}

/** Client user model */
export interface User extends UserJWT {
  token: string;
}

export interface LoginResult {
  user?: User;
  error?: string;
}

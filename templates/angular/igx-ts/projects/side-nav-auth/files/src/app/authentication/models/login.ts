export interface Login {
    email: string;
    password: string;
}

/** Used to send sign in info provided by an external login */
export interface ExternalLogin {
    id: string;
    name: string;
    given_name?: string;
    family_name?: string;
    email: string;
    picture?: string;
    externalToken: string;
    externalProvider?: string;
}

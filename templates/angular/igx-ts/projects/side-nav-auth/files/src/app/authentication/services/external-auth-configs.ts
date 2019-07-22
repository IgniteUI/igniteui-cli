export enum ExternalAuthProvider {
    Facebook = 'Facebook',
    Google = 'Google',
    Microsoft = 'Microsoft'
}

export interface ExternalAuthConfig {
    stsServer: string;
    client_id: string;
    scope: string;
    provider: ExternalAuthProvider;
    redirect_url: string;
    response_type: string;
    post_logout_redirect_uri: string;
    post_login_route: string;
    auto_userinfo: boolean;
    max_id_token_iat_offset_allowed_in_seconds: number;
}

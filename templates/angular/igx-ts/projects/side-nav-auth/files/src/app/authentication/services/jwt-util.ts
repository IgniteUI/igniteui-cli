import { User } from '../models/user';

export function parseUser(jwt: string): User {
  const token = decodeJWT(jwt);
  if (token === null) {
    console.error(`The JWT token provided was not valid:\n${jwt}`);
    return null;
  }
  const user = JSON.parse(token.payload) as User;
  // store token:
  user.token = jwt;
  return user;
}

export function decodeJWT(str: string) {
  const parts = str.split('.');
  if (parts.length < 2) {
    return null;
  }
  return {
    header: decodeBase64Url(parts[0]),
    payload: decodeBase64Url(parts[1]),
    signature: parts[2]
  };
}

export function decodeBase64Url(base64Url: string) {
  // convert Base64Url to Base64: https://tools.ietf.org/html/rfc4648#section-5
  let output = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const padding = (4 - output.length % 4) % 4;
  if (padding === 3) {
    throw Error('Invalid base64 input');
  }
  output += new Array(1 + padding).join('=');
  return atob(output);
}

export interface IRouteLike {
  path?: string;
  identifierName?: string;
  modulePath?: string;
  lazyload?: boolean;
  children?: IRouteLike[];
}

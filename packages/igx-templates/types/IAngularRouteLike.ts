import { IRouteLike, KeyValuePair } from "@igniteui/cli-core";

export interface IAngularRouteLike extends IRouteLike {
  pathMatch?: 'prefix' | 'full';
  root?: boolean;
  data?: KeyValuePair<string>;
  redirectTo?: string;
  children?: IAngularRouteLike[];
}

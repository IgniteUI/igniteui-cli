import { IRouteLike } from "@igniteui/cli-core";

export interface IAngularRouteLike extends IRouteLike {
  pathMatch?: 'prefix' | 'full';
  root?: boolean;
  data?: string;
  redirectTo?: string;
  children?: IAngularRouteLike[];
}

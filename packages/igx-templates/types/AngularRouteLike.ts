import { RouteLike, KeyValuePair } from "@igniteui/cli-core";

export interface AngularRouteLike extends RouteLike {
  pathMatch?: 'prefix' | 'full';
  root?: boolean;
  data?: KeyValuePair<string>;
  redirectTo?: string;
  children?: AngularRouteLike[];
}

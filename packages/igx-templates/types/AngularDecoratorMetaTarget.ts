/** TODO: Unify this with `packages/core/types/TemplateDependency.ts` */

/** Represents possible meta data members in an Angular decorator. */
export interface AngularDecoratorMetaTarget {
  imports?: string[];
  declarations?: string[];
  providers?: string[];
  exports?: string[];
  schemas?: string[];
}

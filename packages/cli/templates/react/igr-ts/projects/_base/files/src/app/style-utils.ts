/**
 * Creates a class transformer function that maps matches from a module object
 * @param styles Object map of classes and their scoped name, normally from a CSS Module import
 */
export default function createClassTransformer(styles: CSSModuleClasses) {
  return (classes: string) => {
    return classes
      .split(' ')
      .map(className => styles[className] || className)
      .join(' ');
  }
}

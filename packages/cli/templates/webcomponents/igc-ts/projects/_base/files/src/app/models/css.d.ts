declare module '*.css?inline' {
  import { CSSResult } from 'lit';
  const content: CSSResult;
  export default content;
}

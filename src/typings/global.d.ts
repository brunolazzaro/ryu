declare module '*.css' {
  const exports: { [styleName: string]: string };
  export = exports;
}

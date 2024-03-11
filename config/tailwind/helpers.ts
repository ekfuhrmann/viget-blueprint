/**
  Helper function to pair key and value together

  Note: PostCSS Converts all `px` values to `rem`
*/
export function pxPair(value: number) {
  return { [value]: `${value}px` };
}

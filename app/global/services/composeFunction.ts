export default function composeFunction(...fns: Function[]) {
  return fns.reduce((y, f) => f(y));
}

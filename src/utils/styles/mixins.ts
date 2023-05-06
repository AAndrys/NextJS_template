// Fix Safari mobile fix, where vh values are wrongly calculated
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
export const setVh = (value: number) => `calc(var(--vh, 1vh) * ${value})`;

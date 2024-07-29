export const kelvinToFarhenheit = (kelvin: number) => {
  return Math.round((kelvin - 273.15) *(9/5) + 32);
};
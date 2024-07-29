export const kelvinToFarhenheit = (kelvin: number) => {
  return Math.round((kelvin - 273.15) *(9/5) + 32);
};

export const airQualityIndexText = [
  {
    rating: 20,
    description: "good",
  },
  {
    rating: 40,
    description: "fair",
  },
  {
    rating: 60,
    description: "moderate",
  },
  {
    rating: 80,
    description: "poor",
  },
  {
    rating: 100,
    description: "very poor",
  },
];
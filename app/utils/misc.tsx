import moment from "moment";

export const kelvinToFarhenheit = (kelvin: number) => {
  return Math.round((kelvin - 273.15) *(9/5) + 32);
};

export const unixToTime = (unix: number, timezone: number) => {
  return moment.unix(unix).utcOffset(timezone / 60).format("HH:mm A");
};

export const unixToDate = (unix: number) => {
  return moment.unix(unix).format("ddd");
};

export const formatNumber = (num: number) => {
  if(num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if(num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
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
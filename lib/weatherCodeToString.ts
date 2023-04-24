const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "clear-day",
    label: "Güneşli",
  },
  1: {
    icon: "partly-cloudy-day",
    label: "Parçalı Bulutlu",
  },
  2: {
    icon: "partly-cloudy-day",
    label: "Parçalı Bulutlu",
  },
  3: {
    icon: "cloudy",
    label: "Bulutlu",
  },
  45: {
    icon: "fog",
    label: "Sisli",
  },
  48: {
    icon: "haze",
    label: "Yoğun Sis / Kırağı",
  },
  51: {
    icon: "drizzle",
    label: "Yer Yer Yağışlı",
  },
  53: {
    icon: "drizzle",
    label: "Yer Yer Yağışlı",
  },
  55: {
    icon: "drizzle",
    label: "Yer Yer Yağışlı",
  },
  56: {
    icon: "drizzle",
    label: "Yer Yer Yağışlı",
  },
  57: {
    icon: "drizzle",
    label: "Yer Yer Yağışlı",
  },
  61: {
    icon: "rain",
    label: "Yağışlı",
  },
  63: {
    icon: "rain",
    label: "Yağışlı",
  },
  65: {
    icon: "rain",
    label: "Yağışlı",
  },
  66: {
    icon: "overcast-hail",
    label: "Yağışlı / Dolu",
  },
  67: {
    icon: "overcast-hail",
    label: "Yağışlı / Dolu",
  },
  71: {
    icon: "snow",
    label: "Kar Yağışlı",
  },
  73: {
    icon: "snow",
    label: "Kar Yağışlı",
  },
  75: {
    icon: "snow",
    label: "Kar Yağışlı",
  },
  77: {
    icon: "snow",
    label: "Kar Yağışlı",
  },
  80: {
    icon: "overcast-rain",
    label: "Sağanak Yağışlı",
  },
  81: {
    icon: "overcast-rain",
    label: "Sağanak Yağışlı",
  },
  82: {
    icon: "overcast-rain",
    label: "Sağanak Yağışlı",
  },
  85: {
    icon: "overcast-snow",
    label: "Sağanak Kar Yağışı",
  },
  86: {
    icon: "overcast-snow",
    label: "Sağanak Kar Yağışı",
  },
  95: {
    icon: "thunderstorms",
    label: "Gök Gürültülü Fırtına",
  },
  96: {
    icon: "thunderstorms",
    label: "Gök Gürültülü Fırtına",
  },
  99: {
    icon: "thunderstorms",
    label: "Gök Gürültülü Fırtına",
  },
};

export default weatherCodeToString;

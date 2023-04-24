const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "c01d",
    label: "Güneşli",
  },
  1: {
    icon: "c02d",
    label: "Çoğunlukla Güneşli",
  },
  2: {
    icon: "c03d",
    label: "Parçalı Bulutlu",
  },
  3: {
    icon: "c04d",
    label: "Bulutlu",
  },
  45: {
    icon: "s05d",
    label: "Sisli",
  },
  48: {
    icon: "s05d",
    label: "Yoğun Sis / Kırağı",
  },
  51: {
    icon: "d01d",
    label: "Yer Yer Yağışlı",
  },
  53: {
    icon: "d01d",
    label: "Yer Yer Yağışlı",
  },
  55: {
    icon: "d01d",
    label: "Yer Yer Yağışlı",
  },
  56: {
    icon: "d01d",
    label: "Yer Yer Yağışlı",
  },
  57: {
    icon: "d01d",
    label: "Yer Yer Yağışlı",
  },
  61: {
    icon: "r01d",
    label: "Yağışlı",
  },
  63: {
    icon: "r01d",
    label: "Yağışlı",
  },
  65: {
    icon: "r01d",
    label: "Yağışlı",
  },
  66: {
    icon: "f01d",
    label: "Yağışlı / Dolu",
  },
  67: {
    icon: "f01d",
    label: "Yağışlı / Dolu",
  },
  71: {
    icon: "s02d",
    label: "Kar Yağışlı",
  },
  73: {
    icon: "s02d",
    label: "Kar Yağışlı",
  },
  75: {
    icon: "s02d",
    label: "Kar Yağışlı",
  },
  77: {
    icon: "s02d",
    label: "Kar Yağışlı",
  },
  80: {
    icon: "r02d",
    label: "Sağanak Yağışlı",
  },
  81: {
    icon: "r02d",
    label: "Sağanak Yağışlı",
  },
  82: {
    icon: "r02d",
    label: "Sağanak Yağışlı",
  },
  85: {
    icon: "s01d",
    label: "Sağanak Kar Yağışı",
  },
  86: {
    icon: "s01d",
    label: "Sağanak Kar Yağışı",
  },
  95: {
    icon: "t04d",
    label: "Gök Gürültülü Fırtına",
  },
  96: {
    icon: "t04d",
    label: "Gök Gürültülü Fırtına",
  },
  99: {
    icon: "t04d",
    label: "Gök Gürültülü Fırtına",
  },
};

export default weatherCodeToString;

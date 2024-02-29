export type User = {
  username: string;
  sex: string;
  address: string;
  name: string;
  email: string;
};

export type City = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  population: number;
  is_capital: boolean;
};

export type Dog = {
  image_link: string;
  name: string;
  max_height_male: number;
  max_height_female: number;
  max_weight_male: number;
  max_weight_female: number;
  good_with_children: number;
  good_with_other_dogs: number;
  //score_strangers;
};

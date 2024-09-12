export type RecipeDetail= {
    id: string;
    name: string;
    image_url: string;
    descript:string;
    prep_time:number;
    ingredients:string;
    steps_to_follow:string;
    created_date:string;
};

export type RecipeTable = {
  id: string;
  name: string;
  image_url: string;
  descript:string;
  prep_time:number;
  ingredients:string;
  steps_to_follow:string;
  created_date:string;
};

export type RecipeAdmin = {
  id: string;
  name: string;
  image_url: string;
  descript:string;
  prep_time:number;
  ingredients:string;
  steps_to_follow:string;
  created_date:string;
};
export type JWTPayload = {
    id: string;
    username: string;
    name:string
  };

  export type userSigin = {
    username: string;
    password:string;
    provider:string;
  };

  
export interface requestCustom extends Request {
    authen: JWTPayload 
}

export type userSigup = {
  username: string;
  password:string;
};

export type User = {
  id: string;
  username: string;
  name: string;
  password: string;
};
export type userSignup = {
  id: string;
  username: string;
  name: string;
  password: string;
};
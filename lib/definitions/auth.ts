export type JWTPayload = {
    id: string;
    name: string;
    email:string
  };

  export type userSigin = {
    email: string;
    password:string;
    provider:string;
  };

  
export interface requestCustom extends Request {
    authen: JWTPayload 
}
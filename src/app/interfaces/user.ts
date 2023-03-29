export interface UserInterface {
  id?: string;
  username?: string;
  email: string;
  password: string;
  role?:Array<string>;
  accessToken?:string;
}

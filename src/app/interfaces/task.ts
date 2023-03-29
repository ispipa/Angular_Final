export interface TaskInterface{
  id_Task?: string;
  title: string;
  description: string;
  expiration_date?:Date|null;
  state:boolean;
  id_User?:string | [];
}

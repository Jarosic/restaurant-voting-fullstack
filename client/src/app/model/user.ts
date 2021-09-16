export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  registered: any;
  enabled: boolean;
  votingDateTime: any;
  restaurantId: number;
  roles: [];
}
export type Users = User[];

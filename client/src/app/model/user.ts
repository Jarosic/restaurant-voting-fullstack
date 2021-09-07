export class User {
  id: number;
  name: string;
  email: string;
  registered: any;
  enabled: boolean;
  votingDateTime: any;
  restaurantId: number;
  roles: [];
}
export type Users = User[];

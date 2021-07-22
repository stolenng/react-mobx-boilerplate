export default class User {
  username: string;
  password: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

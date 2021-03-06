export interface User {
  uid: string;
  email: string;
  password?: string;
  username?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  img?: boolean;
  profileImgUrl?: string;
  news?: [{
    displayName: string;
    uid: string;
  }];
}

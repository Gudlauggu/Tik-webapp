export interface Category {
  uid: string;
  name: string;
  news?: [{
    displayName: string;
    uid: string
  }];
}

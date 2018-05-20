export interface Category {
  uid: string;
  name: string;
  news?: [{
    displayName: string;
    uid: string
    created?: string;
    ownerFirstName?: string;
    ownerMiddleName?: string;
    ownerLastName?: string;
  }];
}

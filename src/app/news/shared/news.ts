export interface News {
  uid: string;
  created: string;
  displayName: string;
  text?: string;
  image?: boolean;
  categoryName?: string;
  categoryUid?: string;
  ownerFirstName?: string;
  ownerMiddleName?: string;
  ownerLastName?: string;
  ownerUid?: string;
}

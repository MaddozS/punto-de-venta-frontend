interface IProduct {
  _id: string;
  name: string;
  price: number;
  description?: string;
  createdAt: Date;
}

export type { IProduct };

export interface IServiceCard {
  iconPath: string;
  title: string;
  description: string;
}

export interface IServiceDetail {
  id: number;
  icon: string;
  name: string;
  title: string;
  description: string;
  detailCards: IDetailCard[];
  largeImage: string;
}

export interface IDetailCard {
  icon: string;
  text: string;
}



export interface IPost{
  image: string;
  title: string;
  category: string;
  content: string;
  customer: string;
}


export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface AssociateType {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  category: string;
  content: string;
  date: string;
  author: string;
}

export interface User {
  username: string;
  isAuthenticated: boolean;
}

export type Category = 'Nature' | 'Food' | 'Culture' | 'Guide';

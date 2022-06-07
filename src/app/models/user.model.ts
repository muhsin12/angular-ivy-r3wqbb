export interface UserDetails {
  total_count: number;
  items: user[];
}

export interface user {
  avatar_url: string;
  login: string;
  type: string;
}

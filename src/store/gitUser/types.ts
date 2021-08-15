export interface IGitUserState {
  user: IGitUser
}

interface IGitUser {
  name?: string
  login?: string
  avatar_url?: string
  created_at?: string
  updated_at?: string
  html_url?: string
}

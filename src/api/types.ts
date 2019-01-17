export interface Hashtag {
  text: string
  indices: number[]
}

export interface UserMention {
  screen_name: string
  name: string
  id: any
  id_str: string
  indices: number[]
}

export interface Url {
  url: string
  expanded_url: string
  display_url: string
  indices: number[]
}

export interface Thumb {
  w: number
  h: number
  resize: string
}

export interface Medium2 {
  w: number
  h: number
  resize: string
}

export interface Large {
  w: number
  h: number
  resize: string
}

export interface Small {
  w: number
  h: number
  resize: string
}

export interface Sizes {
  thumb: Thumb
  medium: Medium2
  large: Large
  small: Small
}

export interface Medium {
  id: any
  id_str: string
  indices: number[]
  media_url: string
  media_url_https: string
  url: string
  display_url: string
  expanded_url: string
  type: string
  sizes: Sizes
}

export interface Entities {
  hashtags: Hashtag[]
  symbols: any[]
  user_mentions: UserMention[]
  urls: Url[]
  media: Medium[]
}

export interface Thumb2 {
  w: number
  h: number
  resize: string
}

export interface Medium4 {
  w: number
  h: number
  resize: string
}

export interface Large2 {
  w: number
  h: number
  resize: string
}

export interface Small2 {
  w: number
  h: number
  resize: string
}

export interface Sizes2 {
  thumb: Thumb2
  medium: Medium4
  large: Large2
  small: Small2
}

export interface Medium3 {
  id: any
  id_str: string
  indices: number[]
  media_url: string
  media_url_https: string
  url: string
  display_url: string
  expanded_url: string
  type: string
  sizes: Sizes2
}

export interface ExtendedEntities {
  media: Medium3[]
}

export interface Url3 {
  url: string
  expanded_url: string
  display_url: string
  indices: number[]
}

export interface Url2 {
  urls: Url3[]
}

export interface Description {
  urls: any[]
}

export interface Entities2 {
  url: Url2
  description: Description
}

export interface User {
  id: any
  id_str: string
  name: string
  screen_name: string
  location: string
  description: string
  url: string
  entities: Entities2
  protected: boolean
  followers_count: number
  friends_count: number
  listed_count: number
  created_at: string
  favourites_count: number
  utc_offset?: any
  time_zone?: any
  geo_enabled: boolean
  verified: boolean
  statuses_count: number
  lang: string
  contributors_enabled: boolean
  is_translator: boolean
  is_translation_enabled: boolean
  profile_background_color: string
  profile_background_image_url: string
  profile_background_image_url_https: string
  profile_background_tile: boolean
  profile_image_url: string
  profile_image_url_https: string
  profile_banner_url: string
  profile_link_color: string
  profile_sidebar_border_color: string
  profile_sidebar_fill_color: string
  profile_text_color: string
  profile_use_background_image: boolean
  has_extended_profile: boolean
  default_profile: boolean
  default_profile_image: boolean
  following?: any
  follow_request_sent?: any
  notifications?: any
  translator_type: string
}

export interface Hashtag2 {
  text: string
  indices: number[]
}

export interface UserMention2 {
  screen_name: string
  name: string
  id: number
  id_str: string
  indices: number[]
}

export interface Url4 {
  url: string
  expanded_url: string
  display_url: string
  indices: number[]
}

export interface Small3 {
  w: number
  h: number
  resize: string
}

export interface Thumb3 {
  w: number
  h: number
  resize: string
}

export interface Large3 {
  w: number
  h: number
  resize: string
}

export interface Medium6 {
  w: number
  h: number
  resize: string
}

export interface Sizes3 {
  small: Small3
  thumb: Thumb3
  large: Large3
  medium: Medium6
}

export interface Medium5 {
  id: number
  id_str: string
  indices: number[]
  media_url: string
  media_url_https: string
  url: string
  display_url: string
  expanded_url: string
  type: string
  sizes: Sizes3
}

export interface Entities3 {
  hashtags: Hashtag2[]
  symbols: any[]
  user_mentions: UserMention2[]
  urls: Url4[]
  media: Medium5[]
}

export interface Small4 {
  w: number
  h: number
  resize: string
}

export interface Thumb4 {
  w: number
  h: number
  resize: string
}

export interface Large4 {
  w: number
  h: number
  resize: string
}

export interface Medium8 {
  w: number
  h: number
  resize: string
}

export interface Sizes4 {
  small: Small4
  thumb: Thumb4
  large: Large4
  medium: Medium8
}

export interface Medium7 {
  id: number
  id_str: string
  indices: number[]
  media_url: string
  media_url_https: string
  url: string
  display_url: string
  expanded_url: string
  type: string
  sizes: Sizes4
}

export interface ExtendedEntities2 {
  media: Medium7[]
}

export interface Url6 {
  url: string
  expanded_url: string
  display_url: string
  indices: number[]
}

export interface Url5 {
  urls: Url6[]
}

export interface Description2 {
  urls: any[]
}

export interface Entities4 {
  url: Url5
  description: Description2
}

export interface User2 {
  id: number
  id_str: string
  name: string
  screen_name: string
  location: string
  description: string
  url: string
  entities: Entities4
  protected: boolean
  followers_count: number
  friends_count: number
  listed_count: number
  created_at: string
  favourites_count: number
  utc_offset?: any
  time_zone?: any
  geo_enabled: boolean
  verified: boolean
  statuses_count: number
  lang: string
  contributors_enabled: boolean
  is_translator: boolean
  is_translation_enabled: boolean
  profile_background_color: string
  profile_background_image_url: string
  profile_background_image_url_https: string
  profile_background_tile: boolean
  profile_image_url: string
  profile_image_url_https: string
  profile_banner_url: string
  profile_link_color: string
  profile_sidebar_border_color: string
  profile_sidebar_fill_color: string
  profile_text_color: string
  profile_use_background_image: boolean
  has_extended_profile: boolean
  default_profile: boolean
  default_profile_image: boolean
  following?: any
  follow_request_sent?: any
  notifications?: any
  translator_type: string
}

export interface RetweetedStatus {
  created_at: string
  id: number
  id_str: string
  full_text: string
  truncated: boolean
  display_text_range: number[]
  entities: Entities3
  extended_entities: ExtendedEntities2
  source: string
  in_reply_to_status_id?: any
  in_reply_to_status_id_str?: any
  in_reply_to_user_id?: any
  in_reply_to_user_id_str?: any
  in_reply_to_screen_name?: any
  user: User2
  geo?: any
  coordinates?: any
  place?: any
  contributors?: any
  is_quote_status: boolean
  retweet_count: number
  favorite_count: number
  favorited: boolean
  retweeted: boolean
  possibly_sensitive: boolean
  lang: string
}

export interface Tweet {
  created_at: string
  id: any
  id_str: string
  full_text: string
  truncated: boolean
  display_text_range: number[]
  entities: Entities
  extended_entities: ExtendedEntities
  source: string
  in_reply_to_status_id?: number
  in_reply_to_status_id_str: string
  in_reply_to_user_id?: number
  in_reply_to_user_id_str: string
  in_reply_to_screen_name: string
  user: User
  geo?: any
  coordinates?: any
  place?: any
  contributors?: any
  is_quote_status: boolean
  retweet_count: number
  favorite_count: number
  favorited: boolean
  retweeted: boolean
  possibly_sensitive: boolean
  lang: string
  retweeted_status: RetweetedStatus
}

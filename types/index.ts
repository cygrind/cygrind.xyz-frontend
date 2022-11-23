export { }

declare global {

  // pub pattern_id: Uuid,
  // pub name: String,
  // pub description: String,
  // pub featured: bool,
  // pub downloads: i32,
  // pub likes: i32,
  // pub dislikes: i32,
  // pub owner: search_models::Owner,
  // pub versions: Vec<search_models::PatternVersionMeta>,
  // pub created_at: DateTime<Utc>,
  // pub updated_at: DateTime<Utc>,

  interface IPattern {
    pattern_id: string,
    name: string,
    description: string,
    featured: boolean,
    verified: boolean,
    downloads: number,
    likes: number,
    dislikes: number,
    owner: IOwner,
    versions: IPatternVersion[],
    latest_version: string,
    created_at: string,
    updated_at: string,
  }

  // pub user_id: Uuid,
  // pub username: String,
  // pub displayname: Option<String>,

  interface IOwner {
    user_id: string,
    username: string,
    displayname?: string
  }

  // pub version: String,
  // pub downloads: i32,
  // pub private: bool,
  // pub created_at: DateTime<Utc>,
  // pub updated_at: DateTime<Utc>,

  interface IPatternVersion {
    version: string,
    downloads: number,
    private: boolean,
    created_at: string,
    updated_at: string,
  }

  // pub mods: Vec<Mod>,
  // pub patterns: Vec<Pattern>,
  // pub total_processing_time_ms: usize,

  interface IPatternModSearchResponse {
    patterns: IPattern[],
    total_processing_time_ms: number
  }

  // pub hits: Vec<T>,
  // pub processing_time_ms: usize,

  interface IGenericSearchResponse<T> {
    hits: T[],
    processing_time_ms: number,
  }

  interface ICoreCard {
    imageSrc: string,
    imageAlt: string,
    title: string,
    description: string,
    author: string,
    uploaded: string,
    likes: string,
    dislikes: string,
    downloads: string,
    type: string,
    id: string,
    verified?: boolean,
    featured?: boolean,
    latestVersion: string,
  }
}


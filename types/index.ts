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
    patternId: string,
    name: string,
    description: string,
    featured: boolean,
    downloads: number,
    likes: number,
    dislikes: number,
    owner: IOwner,
    versions: IPatternVersion[],
    createdAt: string,
    updatedAt: string,
  }

  // pub user_id: Uuid,
  // pub username: String,
  // pub displayname: Option<String>,

  interface IOwner {
    userId: string,
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
    createdAt: string,
    updatedAt: string,
  }

  // pub mods: Vec<Mod>,
  // pub patterns: Vec<Pattern>,
  // pub total_processing_time_ms: usize,

  interface IPatternModSearchResponse {
    patterns: IPattern[],
    totalProcessingTime: number
  }

  // pub hits: Vec<T>,
  // pub processing_time_ms: usize,

  interface IGenericSearchResponse<T> {
    hits: T[],
    processingTimeMs: number,
  }
}


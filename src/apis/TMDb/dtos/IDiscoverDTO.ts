export interface Result {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  media_type: string;
  original_name: string;
  name: string;
  first_air_date: string;
  origin_country: string[];
}

export interface IDiscoverDTO {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

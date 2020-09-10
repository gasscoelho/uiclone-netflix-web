import api from '../../tmdbAPI';
import ITMDbService from '../models/ITMDbService';
import { IDiscoverDTO } from '../dtos/IDiscoverDTO';

type MediaType = 'all' | 'movie' | 'tv' | 'person';
type TimeWindow = 'day' | 'week';

export type GenreOptions =
  | 'action'
  | 'comedy'
  | 'horror'
  | 'romance'
  | 'documentary';

interface IGenre {
  id: number;
  name: string;
}

const genres: IGenre[] = [
  { id: 28, name: 'action' },
  { id: 35, name: 'comedy' },
  { id: 27, name: 'horror' },
  { id: 10749, name: 'romance' },
  { id: 99, name: 'documentary' },
];

export default class TMDbService implements ITMDbService {
  private static instance: TMDbService;

  private constructor() {}

  static getInstance(): TMDbService {
    if (!TMDbService.instance) {
      TMDbService.instance = new TMDbService();
    }
    return TMDbService.instance;
  }

  public async fetchTrending(): Promise<IDiscoverDTO> {
    const mediaType: MediaType = 'all';
    const timeWindow: TimeWindow = 'week';
    const response = (await api.get(`trending/${mediaType}/${timeWindow}`))
      .data as IDiscoverDTO;
    return response;
  }

  public async fetchNetflixOriginals(): Promise<IDiscoverDTO> {
    const response = (
      await api.get('discover/tv', {
        params: {
          with_networks: 213,
        },
      })
    ).data as IDiscoverDTO;
    return response;
  }

  public async fetchMoviesTopRated(): Promise<IDiscoverDTO> {
    const response = (await api.get('movie/top_rated')).data as IDiscoverDTO;
    return response;
  }

  public async fetchMovies(genre: GenreOptions): Promise<IDiscoverDTO> {
    const genreFiltered = genres.filter(g => g.name === genre)[0];
    const response = (
      await api.get('discover/movie', {
        params: {
          with_genres: genreFiltered.id,
        },
      })
    ).data as IDiscoverDTO;
    return response;
  }
}

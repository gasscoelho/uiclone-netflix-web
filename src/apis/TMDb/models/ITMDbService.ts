import { IDiscoverDTO } from '../dtos/IDiscoverDTO';

export default interface ITMDbService {
  fetchTrending(): Promise<IDiscoverDTO>;
  fetchNetflixOriginals(): Promise<IDiscoverDTO>;
  fetchMoviesTopRated(): Promise<IDiscoverDTO>;
  fetchMovies(genre: string): Promise<IDiscoverDTO>
}

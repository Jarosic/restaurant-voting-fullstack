import { RestaurantsFilterPipe } from './restaurants-filter.pipe';

describe('RestaurantsFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new RestaurantsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});

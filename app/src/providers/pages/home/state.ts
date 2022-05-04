import { HomePageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';

export const initialState: HomePageInterface = {
  banner: {
    image_url: '#',
    banner_link: '#',
    banner_desc: ''
  },
  featuredProductsList: [],
  numberOfFeaturedProd: 10,
  slides: [],
  status: StatusType.Loading
};

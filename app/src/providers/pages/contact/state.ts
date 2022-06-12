import { ContactPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';

export const initialState: ContactPageInterface = {
  contact: {
    contacts: [],
    message: '',
    allow_file_upload: true,
    orders: [],
    email: '',
    formLoader: StatusType.Success
  },
  status: StatusType.Loading,
  token: ''
};

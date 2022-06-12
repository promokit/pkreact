import { ContactPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';

export const initialState: ContactPageInterface = {
  contact: {
    email: '',
    message: '',
    orders: [],
    contacts: [],
    allow_file_upload: true,
    formStatus: StatusType.Success,
    formMessage: {
      errors: '',
      success: ''
    }
  },
  status: StatusType.Loading,
  token: ''
};

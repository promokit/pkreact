import { StatusType } from '../../../model/enums';
import { CmsPageInterface } from '../../../model/interfaces';

export const initialState: CmsPageInterface = {
  status: StatusType.Success,
  content: '',
  cms_title: '',
  id_cms: ''
};

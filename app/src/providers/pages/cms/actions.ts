import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestCmsPage } from '../../../rest/rest';
import { CmsPageActionInterface, CmsPageInterface, RestResponse } from '../../../model/interfaces';

export const fetchCmsPageAction = createAsyncThunk(
  `cmspage/fetch`,
  async (arg: CmsPageActionInterface, { rejectWithValue }) => {
    const { cmsId } = arg;
    try {
      const { psdata, message, success }: RestResponse<CmsPageInterface> = await getRestCmsPage(
        cmsId
      );

      if (!success) {
        throw new Error(message);
      }

      return psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

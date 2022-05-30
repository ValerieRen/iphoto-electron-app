import {
  ImageActionTypes,
  ImageReduxActionTypes,
  ImageState,
  SaveImagesAction,
} from "./type";
import { Status, useGetImages } from "../../api";
import { ImageModel } from "../../models";

export const getMovies = (): ((
  dispatch: any
) => { payload: ImageModel[]; type: ImageReduxActionTypes }) => {
  return (dispatch) => {
    console.log(" success ");
    const [imageRemoteData] = useGetImages();
    if (imageRemoteData.status === Status.SUCCESS) {
      return dispatch({
        type: ImageReduxActionTypes.SAVE_IMAGES,
        payload: imageRemoteData.data,
      });
    }
  };
};

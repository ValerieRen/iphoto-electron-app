import { ImageState, ImageActionTypes, ImageReduxActionTypes } from "./type";

const initialState: ImageState = {
  images: [],
  imagesMetadata: [],
};

export function imageReducer(
  state = initialState,
  action: ImageActionTypes
): ImageState {
  console.log(state, action);
  switch (action.type) {
    case ImageReduxActionTypes.SAVE_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case ImageReduxActionTypes.SAVE_IMAGES_METADATA:
      return {
        ...state,
        imagesMetadata: action.payload,
      };
    default:
      return state;
  }
}

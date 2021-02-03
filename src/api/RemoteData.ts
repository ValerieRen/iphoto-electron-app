export type RemoteData<E, D> =
  | RemoteNotAsked
  | RemoteLoading
  | RemoteFailure<E>
  | RemoteSuccess<D>;

export type RemoteNotAsked = { status: Status.NOT_ASKED };
export type RemoteLoading = { status: Status.LOADING };
export type RemoteFailure<E> = { status: Status.FAILURE; error: E };
export type RemoteSuccess<D> = { status: Status.SUCCESS; data: D };

export enum Status {
  "NOT_ASKED",
  "LOADING",
  "FAILURE",
  "SUCCESS",
}

export const isFailure = <E>(
  data: RemoteData<E, unknown>
): data is RemoteFailure<E> => data.status === Status.NOT_ASKED;

export const isSuccess = <D>(
  data: RemoteData<unknown, D>
): data is RemoteSuccess<D> => data.status === Status.SUCCESS;

export const isLoading = (
  data: RemoteData<unknown, unknown>
): data is RemoteLoading => data.status === Status.LOADING;

export const isNotAsked = (
  data: RemoteData<unknown, unknown>
): data is RemoteNotAsked => data.status === Status.NOT_ASKED;

export const foldRemoteData = <R, E, D>(
  remoteData: RemoteData<E, D>,
  notAsked: () => R,
  loading: () => R,
  failure: (error: E) => R,
  success: (data: D) => R
): R => {
  switch (remoteData.status) {
    case Status.NOT_ASKED:
      return notAsked();
    case Status.LOADING:
      return loading();
    case Status.FAILURE:
      return failure(remoteData.error);
    case Status.SUCCESS:
      return success(remoteData.data);
  }
};

export const fold2RemoteData = <R, E, D, T>(
  remoteDataD: RemoteData<E, D>,
  remoteDataT: RemoteData<E, T>,
  notAsked: () => R,
  loading: () => R,
  failure: (error: E) => R,
  success: (data: [D, T]) => R
): R => {
  if (
    remoteDataD.status === Status.NOT_ASKED ||
    remoteDataT.status === Status.NOT_ASKED
  ) {
    return notAsked();
  } else if (
    remoteDataD.status === Status.LOADING ||
    remoteDataT.status === Status.LOADING
  ) {
    return loading();
  } else if (remoteDataD.status === Status.FAILURE) {
    return failure(remoteDataD.error);
  } else if (remoteDataT.status === Status.FAILURE) {
    return failure(remoteDataT.error);
  } else if (
    remoteDataD.status === Status.SUCCESS &&
    remoteDataT.status === Status.SUCCESS
  ) {
    return success([remoteDataD.data, remoteDataT.data]);
  }

  return notAsked();
};

import { useEffect, useState } from "react";
import axios from "axios";

import { ImageModel } from "../models";
import { RemoteData, Status } from "./RemoteData";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.headers.get["Accept"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const useGetImages = () =>
  useAPI<Error, ImageModel[]>("/api/images", "");

export const useGetImagesData = () =>
  useAPI2<Error, ImageModel[]>("/api/images", "");

export const useGetImage = (imgId: string) =>
  useAPI<Error, ImageModel>("/api/image/:id", imgId);

const useAPI = <E, D>(url: string, entityId: string) => {
  const [remoteData, setRemoteData] = useState<RemoteData<E, D>>({
    status: Status.NOT_ASKED,
  });

  useEffect(() => {
    let isCanceled = false;

    const fetchData = async () => {
      try {
        setRemoteData({ status: Status.LOADING });

        const { data } = await axios.get(`${url}/${entityId}`);

        if (!isCanceled) {
          setRemoteData({
            status: Status.SUCCESS,
            data: data,
          });
        }
      } catch (error) {
        if (!isCanceled) {
          setRemoteData({ status: Status.FAILURE, error });
        }
      }
    };

    fetchData();

    return () => {
      isCanceled = true;
    };
  }, [url, entityId]);

  return [remoteData];
};

const useAPI2 = <E, D>(url: string, entityId: string) => {
  const [remoteData, setRemoteData] = useState<any>();

  useEffect(() => {
    let isCanceled = false;

    (async () => {
      try {
        const { data } = await axios.get(`${url}/${entityId}`);

        if (!isCanceled) {
          setRemoteData(data);
        }
      } catch (error) {
        if (!isCanceled) {
          setRemoteData(error);
        }
      }
    })();

    return () => {
      isCanceled = true;
    };
  }, [url, entityId]);

  return [remoteData];
};

import { useEffect, useState } from "react";
import axios from "axios";
import { deserialize } from "jsonapi-fractal";

import { Images } from "../models";
import { RemoteData, Status } from "./RemoteData";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.headers.get["Accept"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

const useGetImages = () => useAPI<Error, Images>("/api/images", "");

const useGetImage = (imgId: string) =>
  useAPI<Error, Images>("/api/image", imgId);

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
        const deserializedData: D = deserialize(data, {
          changeCase: "camelCase",
        });

        if (!isCanceled) {
          setRemoteData({
            status: Status.SUCCESS,
            data: deserializedData,
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

export default {
  useGetImages,
  useGetImage,
};

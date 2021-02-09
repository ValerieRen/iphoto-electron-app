import { useEffect, useState } from "react";
import axios from "axios";

import { Image } from "../models";
import { RemoteData, Status } from "./RemoteData";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.headers.get["Accept"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const useGetImages = () => useAPI<Error, Image[]>("/api/images", "");

export const useGetImage = (imgId: string) =>
  useAPI<Error, Image>("/api/image/:id", imgId);

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
        console.log("data", data);
        // const deserializedData: D = deserialize(data);
        // console.log("deserializedData", deserializedData);
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

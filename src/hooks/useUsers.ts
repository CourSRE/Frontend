'use client'

import { getUsersApi } from "@/api";
import {  IUsersType } from "@/types";
import { message } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useUsers = () => {
  const [data, setData] = useState<IUsersType[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getUsersApi()
      .then(({data}) => {
        setLoading(false);
        setData(data);
      }).catch((err) => {
        message.error(`Error: ${err}`);
      });
  }, []);

  const emptyData = useCallback(() => {
    setData([])
  }, [setData])

  const refetchData = useCallback(async () => {
    setLoading(true);
    await getUsersApi()
      .then(({data}) => {
        setLoading(false);
        setData(data);
      }).catch((err) => {
        message.error(`Error: ${err}`);
      });
  }, [setData, setLoading])

  return {
    data,
    isLoading,
    emptyData,
    refetchData
  };
};

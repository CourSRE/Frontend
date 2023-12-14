'use client'

import { getUserRankApi } from "@/api";
import { IRankUsersDataType } from "@/types";
import { message } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useUserRank = () => {
  const [data, setData] = useState<IRankUsersDataType[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getUserRankApi()
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
    await getUserRankApi()
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

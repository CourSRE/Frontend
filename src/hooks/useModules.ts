'use client'

import { getModulesApi } from "@/api";
import { IModuleType } from "@/types";
import { message } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useModules = (id: string) => {
  const [data, setData] = useState<IModuleType[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getModulesApi(id)
      .then(({data}) => {
        setLoading(false);
        setData(data);
      }).catch((err) => {
        message.error(`Error: ${err}`);
      });
  }, [id]);

  const emptyData = useCallback(() => {
    setData([])
  }, [setData])

  const refetchData = useCallback(async () => {
    setLoading(true);
    await getModulesApi(id)
      .then(({data}) => {
        setLoading(false);
        setData(data);
      }).catch((err) => {
        message.error(`Error: ${err}`);
      });
  }, [setData, setLoading, id])

  return {
    data,
    isLoading,
    emptyData,
    refetchData
  };
};

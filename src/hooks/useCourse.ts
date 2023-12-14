'use client'

import { getCourseApi } from "@/api";
import { ICourseType } from "@/types";
import { message } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useCourse = (id: string) => {
  const [data, setData] = useState<ICourseType | undefined>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCourseApi(id)
      .then(({data}) => {
        setLoading(false);
        setData(data);
      }).catch((err) => {
        message.error(`Error: ${err}`);
      });
  }, [id]);

  const emptyData = useCallback(() => {
    setData(undefined)
  }, [setData])

  const refetchData = useCallback(async () => {
    setLoading(true);
    await getCourseApi(id)
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

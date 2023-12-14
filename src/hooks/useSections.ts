'use client'

import { getSectionsApi } from "@/api";
import { ISectionType } from "@/types";
import { message } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useSections = (courseId: string) => {
  const [data, setData] = useState<ISectionType[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getSectionsApi(courseId)
      .then(({data}) => {
        setLoading(false);
        setData(data);
      }).catch((err) => {
        message.error(`Error: ${err}`);
      });
  }, [courseId]);

  const emptyData = useCallback(() => {
    setData([])
  }, [setData])

  const refetchData = useCallback(async () => {
    setLoading(true);
    await getSectionsApi(courseId)
      .then(({data}) => {
        setLoading(false);
        setData(data);
      }).catch((err) => {
        message.error(`Error: ${err}`);
      });
  }, [setData, setLoading, courseId])

  return {
    data,
    isLoading,
    emptyData,
    refetchData
  };
};

'use client'

import { getCoursesApi } from "@/api";
import { ICourseType } from "@/types";
import { message } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useCourses = () => {
  const [data, setData] = useState<ICourseType[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCoursesApi()
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
    await getCoursesApi()
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

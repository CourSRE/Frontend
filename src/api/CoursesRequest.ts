import { baseAxios } from "@/configs";
import { IAddCourseFieldType } from "@/types/coursesType/AddCourseFieldType";

export const addCourseApi = async (obj: IAddCourseFieldType) => {
  return await baseAxios({
    method: "POST",
    url: "/api/courses",
    data: obj,
  })
};

export const editCourseApi = async (obj: IAddCourseFieldType, id: string | string[]) => {
  return await baseAxios({
    method: "PUT",
    url: `/api/courses/${id}`,
    data: obj,
  })
};

export const deleteCourseApi = async (id: string) => {
  return await baseAxios({
    method: "DELETE",
    url: `/api/courses/${id}`,
  })
};

export const getCoursesApi = async () => {
  return await baseAxios({
    method: "GET",
    url: '/api/courses',
  })
};

export const getCourseApi = async (id: string) => {
  return await baseAxios({
    method: "GET",
    url: `/api/courses/${id}`,
  })
};

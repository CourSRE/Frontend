import { baseAxios } from "@/configs";

export const getSectionsApi = async (courseId: string) => {
  return await baseAxios({
    method: "GET",
    url: '/api/sections',
    data: {
      courseId
    }
  })
};

export const addSectionApi = async (sectionName: string, courseId: string) => {
  return await baseAxios({
    method: "POST",
    url: '/api/sections',
    data: {
      sectionName, 
      courseId
    }
  })
};

export const editSectionApi = async (sectionName: string, sectionId: string) => {
  return await baseAxios({
    method: "PUT",
    url: `/api/sections/${sectionId}`,
    data: {
      sectionName
    }
  })
};

export const deleteSectionApi = async (sectionId: string) => {
  return await baseAxios({
    method: "DELETE",
    url: `/api/sections/${sectionId}`,
  })
};

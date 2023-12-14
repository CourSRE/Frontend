import { baseAxios } from "@/configs";
import { IModuleType } from "@/types";

export const getModulesApi = async (sectionId: string) => {
  return await baseAxios({
    method: "GET",
    url: `/api/modules`,
    data: {
      sectionId
    }
  })
};

export const editModuleApi = async (obj: IModuleType, moduleId: string) => {
  return await baseAxios({
    method: "PUT",
    url: `/api/modules/${moduleId}`,
    data: {
      obj
    }
  })
};

export const deleteModuleApi = async (moduleId: string) => {
  return await baseAxios({
    method: "DELETE",
    url: `/api/modules/${moduleId}`,
  })
};
import { TokenService } from "@/services";
import axios from "axios";

export const getAuthorizationHeader = () => `Bearer ${TokenService.getToken()}`;

export const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || '',
  headers: {
    Authorization: getAuthorizationHeader(),
    "Content-Type": "application/x-www-form-urlencoded"
  },
})

import toast from "react-hot-toast";
import { clearUserData, getAccessToken } from "../utils/utils";

const host = import.meta.env.VITE_API_BASE_URL;

const HTTPRequest = async (method, url, data) => {
  const options = {
    method,
    headers: {},
    credentials: "include",
  };

  const token = getAccessToken();
  console.log(token);
  if (token) {
    options.headers["X-Authorization"] = token;
  }
  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);
    if (response.ok != true) {
      if (response.status == 403 || response.status == 401) {
        clearUserData();
      }

      const error = await response.json();
      throw new Error(error.message);
    }
    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const get = HTTPRequest.bind(null, "GET");
export const post = HTTPRequest.bind(null, "POST");
export const put = HTTPRequest.bind(null, "PUT");
export const remove = HTTPRequest.bind(null, "DELETE");
export const patch = HTTPRequest.bind(null, "PATCH");

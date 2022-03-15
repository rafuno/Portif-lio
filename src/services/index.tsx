import axios from "axios";

export type cardProps = {
  data: { title: string; link: string };
};
export const api = axios.create({
  baseURL: "http://demo2619122.mockable.io/",
});

export const getProjects = async (): Promise<cardProps | undefined> => {
  try {
    const { data } = await api.get("projects");
    return data;
  } catch (err) {
    console.error(err);
  }
};

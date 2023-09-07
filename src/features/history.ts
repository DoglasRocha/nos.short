import axios from "axios";

interface APIResponse {
  url: string;
  key: string;
  ttl: string;
  "link+url": string;
}

export const putInHistory = (link: APIResponse) => {
  let history = JSON.parse(localStorage.getItem("links"));
  if (history === null) history = [];
  history.push(link);
  localStorage.setItem("links", JSON.stringify(history));
};

export const getLastLinkFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("lastLink"));
};

export const clearLinkHistory = () => {
  localStorage.setItem("links", "[]");
};

export const getLinksFromHistory = () => {
  return JSON.parse(localStorage.getItem("links"));
};

export const handleLinkSubmission = async (url: string) => {
  const request = await axios.post(
    "https://url.api.stdlib.com/temporary@0.3.0/create/",
    { url }
  );

  const result = await request.data;
  putInHistory(result);

  localStorage.setItem("lastLink", JSON.stringify(result));
};

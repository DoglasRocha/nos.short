import axios from "axios";

export interface HistoryObject {
  url: string;
  key: string;
  ttl: number;
  link_url: string;
  date: number;
}

export const putInHistory = (link: HistoryObject) => {
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
  let links = JSON.parse(localStorage.getItem("links"));
  links = links.filter(
    (link) => link.ttl - (Date.now() - link.date) / 1000 < link.ttl
  );
  localStorage.setItem("links", JSON.stringify(links));
  return links;
};

export const handleLinkSubmission = async (url: string) => {
  const request = await axios.post(
    "https://url.api.stdlib.com/temporary@0.3.0/create/",
    { url }
  );

  const result = await request.data;
  result.date = Date.now();
  result.ttl = parseInt(result.ttl);
  putInHistory(result);

  localStorage.setItem("lastLink", JSON.stringify(result));
};

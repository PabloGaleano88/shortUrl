import { LinkModel } from "../models/mysql/mysql.js";
import formatDate from "../utils/dateFormatter.js";

export function getUrl(short_url) {
  const fetchLink = new LinkModel();
  return fetchLink
    .getLink(short_url)
    .then((lUrl) => {
      if (!lUrl.startsWith("http://") && !lUrl.startsWith("https://")) {
        lUrl = "http://" + lUrl;
      }
      return lUrl;
    })
    .catch((err) => {
      return "Error al obtener la URL:";
    });
}

export function createUrl(info) {
  const user_address =
    info.ip || info.headers["x-forwarded-for"] || info.socket.remoteAddress;
  const { original_url, duration } = info.body;
  const expired_at = formatDate(duration);
  const newLink = new LinkModel();
  return newLink
    .addLink(original_url, expired_at, user_address)
    .then((response) => {
      return {
        shortUrl: `https://www.shortmyurl/${response}`,
        originalUrl: original_url,
        expiredAt: expired_at,
      };
    })
    .catch((err) => {
      return "ocurrio un error al intentar agregar un link";
    });
}

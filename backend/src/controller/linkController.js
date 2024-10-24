import { getUrl, createUrl } from "../manager/linkManager.js";

export async function getLongUrl(req, res) {
  const { url } = req.params;
  if (url === "favicon.ico") {
    return res.status(204).end();
  } else {
    let link = await getUrl(url);
    res.send(link);
  }
}

export async function createLink(req, res) {
  const create = await createUrl(req);
  setTimeout(() => {
    res.send(create);
  }, 1000);
}

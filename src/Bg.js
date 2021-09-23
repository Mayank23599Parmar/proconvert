import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageFile } from "remove.bg";

const localFile = "./image.48.png";
const outputFile = `${__dirname}/out/img-removed-from-file.png`;

removeBackgroundFromImageFile({
  path: localFile,
  apiKey: "YOUR-API-KEY",
  size: "regular",
  type: "auto",
  scale: "50%",
  outputFile
}).then((result: RemoveBgResult) => {
 console.log(`File saved to ${outputFile}`);
  const base64img = result.base64img;
}).catch((errors: Array<RemoveBgError>) => {
 console.log(JSON.stringify(errors));
});
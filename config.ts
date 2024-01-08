import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://flintex.com.sg/",
  match: "https://flintex.com.sg/**",
  maxPagesToCrawl: 1000,
  outputFileName: "flintex.json",
  resourceExclusions: ['jpg', 'pdf']
};

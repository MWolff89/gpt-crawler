import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.wmhlaw.com.sg/",
  match: "https://www.wmhlaw.com.sg/**",
  maxPagesToCrawl: 1000,
  outputFileName: "wmh-law.json",
  resourceExclusions: ['jpg', 'pdf']
};

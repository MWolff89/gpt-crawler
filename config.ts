import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://absolutelybatter.com/",
  match: "https://absolutelybatter.com/**",
  maxPagesToCrawl: 1000,
  outputFileName: "absolutely-batter.json",
  resourceExclusions: ['jpg', 'pdf']
};

import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.thegreaterclub.co/",
  match: "https://www.thegreaterclub.co/**",
  maxPagesToCrawl: 1000,
  outputFileName: "greater-club.json",
  resourceExclusions: ['jpg', 'pdf']
};

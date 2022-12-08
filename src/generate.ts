import {
  LanguageRepository,
  languageRepositoryCompare,
} from "./models/LanguageRepository.ts";
import { librariesToString } from "./models/Libraries.ts";
import { Repositories } from "./models/Repositories.ts";
import { repositories } from "./repositories.ts";

export function toMarkdownRow(repository: LanguageRepository) {
  const languageWithLink = `[${repository.language}](${repository.url})`;
  const generateLink = `[🚀](${repository.url}/generate)`;
  const libraries = librariesToString(repository.libraries);

  const joined = [languageWithLink, generateLink, libraries].join(" | ");

  return `| ${joined} |`;
}

function generateReadmeLanguageTable(repositories: Repositories) {
  const header = "| Language | Generate | Libraries |";
  const separator = "| --- | --- | --- |";
  const rows = repositories.map(toMarkdownRow);

  return [header, separator, ...rows].join("\n");
}

const sortedRepositories = repositories.sort(languageRepositoryCompare);
const table = generateReadmeLanguageTable(sortedRepositories);

const readme = `# Kata Setup

<!-- This file is generated by src/generate.ts -->
<!-- Do not edit this file manually -->
<!-- If you want to add a new language, create a PR adding it to repositories.ts and the bot will update this file -->

This repository contains a setup for different programming languages to practice katas.
You can create a new repository from the temmplate of your preferred language.

You can click the 🚀 emoji to create a new repository from the template.

${table}
`;

console.log(readme);
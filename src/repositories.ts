import { Repositories } from "./models/Repositories.ts";

export const repositories: Repositories = [
  {
    language: "TypeScript",
    url: "https://github.com/AgileCraftsmanshipCanarias/kata-setup-typescript",
    libraries: [
      {
        name: "TypeScript",
        emoji: "💬",
      },
      {
        name: "Vitest",
        emoji: "✅",
      },
      {
        name: "Prettier",
        emoji: "💅",
      },
    ],
  },
  {
    language: "Kotlin",
    url: "https://github.com/AgileCraftsmanshipCanarias/kata-setup-typescript",
    libraries: [
      {
        name: "AssertJ",
        emoji: "✅",
      },
      {
        name: "Mockito",
        emoji: "🤖",
      },
    ],
  },
];

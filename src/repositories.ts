import { Repositories } from "./models/Repositories.ts";

export const repositories: Repositories = [
  {
    language: "Kotlin",
    url: "https://github.com/AgileCraftsmanshipCanarias/kata-setup-kotlin",
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
    language: "TypeScript (deno)",
    url: "https://github.com/AgileCraftsmanshipCanarias/kata-setup-typescript-deno",
    libraries: [
      {
        name: "expect",
        emoji: "✅",
      },
    ],
  },
];

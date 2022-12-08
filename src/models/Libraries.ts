import { Library, libraryToString } from "./Library.ts";

export type Libraries = Library[];

export function librariesToString(libraries: Libraries) {
  return libraries.map(libraryToString).join(", ");
}

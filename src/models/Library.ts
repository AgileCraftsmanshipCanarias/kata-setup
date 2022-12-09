export type Library = {
  name: string;
  emoji: string;
};

export function libraryToString(library: Library) {
  return library.name;
}

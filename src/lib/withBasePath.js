const repoName = "SudoSapient-Algora";

export const basePath =
  process.env.NODE_ENV === "production" ? `/${repoName}` : "";

export function withBasePath(path) {
  if (!path) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

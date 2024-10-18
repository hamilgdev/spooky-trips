export function formatTransformedImageHandler(transformed: string) {
  const regex = /<img\s+src=['"]([^'"]+)['"]/;
  const match = transformed.match(regex);
  if (match && match[1]) return match[1];
  return null;
}

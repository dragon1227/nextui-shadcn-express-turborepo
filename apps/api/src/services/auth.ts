export const parseToken = (authHeader: string): string => {
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;
  return token;
};

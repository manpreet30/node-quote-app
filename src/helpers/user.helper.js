import jwt from "jsonwebtoken";

const getToken = (headers) => {
  return headers.authorization.split(" ").length > 1 ? headers.authorization.split(" ")[1] : "";
};

const getCurrentUserId = (headers) => {
  const user = jwt.verify(getToken(headers), "jswSecret");
  return user.id;
};

export { getToken, getCurrentUserId };

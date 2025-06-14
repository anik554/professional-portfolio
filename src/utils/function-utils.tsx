export const getPathByValue = (value: string) => {
  if (value === "HOME") {
    return "/";
  } else if (value === "ABOUT") {
    return "/about";
  } else if (value === "RESUME") {
    return "/resume";
  } else if (value === "WORKS") {
    return "/works";
  } else if (value === "CONTACT") {
    return "/contact";
  } else {
    return "";
  }
};

export const formatDate = (date: string): string => {
  const splitteDate = date.split("-");

  const dateFormat = splitteDate[2].split("T");
  return `${dateFormat[0]}/${splitteDate[1]}/${splitteDate[0]}`;
};

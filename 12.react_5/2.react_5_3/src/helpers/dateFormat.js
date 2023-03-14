export const getDateFormat = (
  dataStr,
  isOnlyDate = true,
  //   isShort = true,
  isCapitalizeMonth = true,
  separateDate = "-",
  separateClock = ":"
) => {
  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avqust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
  ];
  const monthsCapitalize = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const d = typeof dataStr === "string" ? new Date(dataStr) : dataStr;
  const year = d.getFullYear();
  const month = isCapitalizeMonth
    ? monthsCapitalize[d.getMonth()]
    : months[d.getMonth()];
  const day = ("0" + d.getDate()).slice(-2);
  const hours = ("0" + d.getHours()).slice(-2);
  const minutes = ("0" + d.getMinutes()).slice(-2);
  const seconds = ("0" + d.getSeconds()).slice(-2);
  const dateSeparator = separateDate ? separateDate : "";
  const clockSeparator = separateClock ? separateClock : "";

  return isOnlyDate
    ? `${day}${dateSeparator}${month}${dateSeparator}${year}`
    : `${day}${dateSeparator}${month}${dateSeparator}${year}` +
        ` ${hours}${clockSeparator}${minutes}${clockSeparator}${seconds}`;
};

export const getAZDate = (
  date,
  isShort = true,
  isOnlyDate = true,
  separateDate = "-",
  separateClock = ":",
  isCapitalizeMonth = true
) => {
  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avqust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
  ];

  const d = typeof date === "string" ? new Date(date) : date;
  const year = d.getFullYear();
  const month = isCapitalizeMonth
    ? months[d.getMonth()].charAt(0).toUpperCase() +
      months[d.getMonth()].slice(1)
    : months[d.getMonth()];
  const day = isShort ? d.getDate() : ("0" + d.getDate()).slice(-2);
  const hours = ("0" + d.getHours()).slice(-2);
  const minutes = ("0" + d.getMinutes()).slice(-2);
  const seconds = ("0" + d.getSeconds()).slice(-2);
  const dateSeparator = separateDate ? separateDate : "";
  const clockSeparator = separateClock ? separateClock : "";

  const dateString = isShort
    ? `${day}${dateSeparator}${month.substr(0, 3)}${dateSeparator}${year}`
    : `${day}${dateSeparator}${month}${dateSeparator}${year}`;
  const timeString = `${hours}${clockSeparator}${minutes}${clockSeparator}${seconds}`;

  return isOnlyDate ? `${dateString}` : `${dateString} ${timeString}`;
};

export const getAZDateTime = (date, obj) => {
  let formatOptions = {
    isShort: true,
    isOnlyDate: true,
    separateDate: ".",
    separateClock: ":",
    isCapitalizeMonth: false,
  };

  formatOptions = { ...formatOptions, ...obj };

  const {
    isShort,
    isOnlyDate,
    separateDate,
    separateClock,
    isCapitalizeMonth,
  } = formatOptions;
  const options = {
    year: isShort ? "2-digit" : "numeric",
    month: isCapitalizeMonth ? "long" : "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const monthNamesAZ = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avqust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
  ];

  const d = typeof date === "string" ? new Date(date) : date;

  const formattedDate = d.toLocaleString("az-AZ", options);
  const dateParts = formattedDate.split(/[.,/,\s]/);

  let [day, timeStr] = dateParts.slice(2);
  const time = timeStr.split(":").join(separateClock);

  const year = d.getFullYear();
  let month = "";

  if (isCapitalizeMonth) {
    month = isCapitalizeMonth
      ? monthNamesAZ[d.getMonth()].charAt(0).toUpperCase() +
        monthNamesAZ[d.getMonth()].slice(1)
      : monthNamesAZ[d.getMonth()];
  } else {
    month = monthNamesAZ[new Date(d).getMonth()];
  }

  const formattedDateString = `${day}${separateDate}${month}${separateDate}${year}`;

  if (isOnlyDate) {
    return formattedDateString;
  } else {
    return time ? `${formattedDateString} ${time}` : formattedDateString;
  }
};

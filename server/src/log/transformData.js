const transformLogs = (logdata) => {
  return logdata.map((entry) => {
    const parsedEntry = JSON.parse(entry);
    console.log(parsedEntry);
    return {
      message: parsedEntry.message,
      code: parsedEntry.code,
      time: parsedEntry.time,
    };
  });
};

module.exports = transformLogs;

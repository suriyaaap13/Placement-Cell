module.exports.convert = function(str) {
    str = str.toString();
    date = str.substring(0,11);
    var mnths = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12"
    },
    date = str.split(" ");
    return [date[2], mnths[date[1]], date[3]].join("-");
}
Beautifyp = 6;
Beautifyl = ['million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion'];
function Beautify(num) {
  if (num < 0) {
    return '-' + Beautify(-num);
  }
  if (num < 1000) {
    return num + '';
  }
  if (num < 1000000) {
    num = num + '';
    return num.substr(0, num.length - 3) + ',' + num.substr(num.length - 3, 3);
  }
  var sec = Math.floor(Math.log10(num)/3-2);
  var sed = num / Math.pow(10, sec * 3 + 6);
  sed = Math.floor(sed * Math.pow(10, Beautifyp)) / Math.pow(10, Beautifyp);
  if (sec < Beautifyl.length) {
    return sed.toFixed(Beautifyp) + ' ' + Beautifyl[sec];
  }
  return num + '';
}

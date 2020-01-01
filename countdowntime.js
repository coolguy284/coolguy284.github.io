var date, UpdDate, hnl;
date = new Date();
function getMonday(d) {
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
function getNextMonday(d) {
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1) + 7; // adjust when day is sunday
  return new Date(d.setDate(diff));
}
UpdDate = function() {
  dl = {
    'sf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 7, 53, 27, 0),
    'st': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 42, 27, 0),
    'shf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 7, 53, 27, 0),
    'sht': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 7, 58, 27, 0),
    's1f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 2, 27, 0),
    's1t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 46, 27, 0),
    's2f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 50, 27, 0),
    's2t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 34, 27, 0),
    's3f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 38, 27, 0),
    's3t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 22, 27, 0),
    's4f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 26, 27, 0),
    's4t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 10, 27, 0),
    's51f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 14, 27, 0),
    's51t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 44, 27, 0),
    's52f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 48, 27, 0),
    's52t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 18, 27, 0),
    's6f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 22, 27, 0),
    's6t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 6, 27, 0),
    's7f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 10, 27, 0),
    's7t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 54, 27, 0),
    's8f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 58, 27, 0),
    's8t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 42, 27, 0),
    'muf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0),
    'mut': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()+1, 0, 0),
    'hf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0),
    'ht': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()+1, 0, 0, 0),
    'df': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
    'dt': new Date(date.getFullYear(), date.getMonth(), date.getDate()+1, 0, 0, 0, 0),
    'wf': getMonday(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)),
    'wt': getNextMonday(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)),
    'mf': new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
    'mt': new Date(date.getFullYear(), date.getMonth()+1, 1, 0, 0, 0, 0),
    'yf': new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0),
    'yt': new Date(date.getFullYear()+1, 0, 1, 0, 0, 0, 0),
    'def': new Date(Math.floor(date.getFullYear() / 10) * 10, 0, 1, 0, 0, 0, 0),
    'det': new Date(Math.ceil(date.getFullYear() / 10) * 10, 0, 1, 0, 0, 0, 0),
    'cf': new Date(Math.floor(date.getFullYear() / 100) * 100, 0, 1, 0, 0, 0, 0),
    'ct': new Date(Math.ceil(date.getFullYear() / 100) * 100, 0, 1, 0, 0, 0, 0),
    'mlf': new Date(Math.floor(date.getFullYear() / 1000) * 1000, 0, 1, 0, 0, 0, 0),
    'mlt': new Date(Math.ceil(date.getFullYear() / 1000) * 1000, 0, 1, 0, 0, 0, 0),
    'net': new Date('2024-04-08T17:59:17.000Z')
  };
};
hnl = {
  s: 'School',
  sh: 'Homeroom',
  s1: '1st Period',
  s2: '2nd Period',
  s3: '3rd Period',
  s4: '4th Period',
  s51: '1st Lunch / Flex',
  s52: '2nd Lunch / Flex',
  s6: '6th Period',
  s7: '7th Period',
  s8: '8th Period',
  mu: 'Minute',
  h: 'Hour',
  d: 'Day',
  w: 'Week',
  m: 'Month',
  y: 'Year',
  de: 'Decade',
  c: 'Century',
  ml: 'Millennium',
  ne: 'Next Eclipse'
}
/*
var hr = window.location.href;
if (hr.substr(0, 28) != 'https://coolguy284.github.io' && hr.substr(0, 35) != 'https://replit.org/data/web_project') {
  document.write('<br>This code is not legit.  It has been rehosted.  It\'s original source was <a href=\'https://coolguy284.github.io\'>https://coolguy284.github.io</a>');
}*/

var id, cd, dif, sd, nexteclipse;
date = new Date();
id = new Date(2017, 11, 7, 0, 0, 0);
cd = new Date(date.getFullYear(), date.getMonth()+1, date.getDate(), 0, 0, 0);
dif = Math.round(Math.abs((id.getTime() - cd.getTime())/86400000));
sd = 158-dif*3;
nexteclipse = new Date('2024-04-08T17:59:17.000Z');

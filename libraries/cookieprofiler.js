var statarr = [];
setInterval(function() {
  var sobj = {
    time: Date.now(),
    cookiesInBank: Game.cookies,
    cookiesEarned: Game.cookiesEarned,
    cookiesPs: Game.cookiesPs,
    buffs: {},
  };
  var okbuf = Object.keys(Game.buffs);
  for (var i in okbuf) {
    var k = okbuf[i];
    buffs[k] = { time: Game.buffs[k].time, multCps: Game.buffs[k].multCps };
  }
  statarr.push(JSON.stringify(sobj));
}, 1000);

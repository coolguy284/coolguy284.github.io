sChars = 'abcdefghijklmnopqrstuvwxyz';
sToSeed = function(num) {
  var str = '', pc = Math.floor(Math.log(num) / Math.log(sChars.length));
  for (;pc >= 0; pc--) {
    str += sChars[Math.floor((num / sChars.length ** pc) % 26)];
  }
  return s.padStart(5, sChars[0]);
};
sToNum = function (str) {
  var num = 0, pc = str.length - 1;
  for (;pc >= 0; pc--) {
    console.log([pc, sChars.indexOf(str[str.length - pc - 1]), sChars.length ** pc]);
    num += sChars.indexOf(str[str.length - pc - 1]) * sChars.length ** pc;
  }
  return num;
};
sBack = () => Game.seed = sToSeed(sToNum(Game.seed) - 1);
sForw = () => Game.seed = sToSeed(sToNum(Game.seed) + 1);
sKeyDown = (e) => {
  if (e.shiftKey) {
    if(e.key == 'I') sBack();
    if(e.key == 'O') sForw();
  }
}
addEventListener('keydown', (e) => sKeyDown(e));

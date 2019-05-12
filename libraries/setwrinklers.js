setWrinklers = function (num) {
	Game.wrinklers.splice(0, Infinity);
	for (var i = 0; i < num; i++) {
		Game.wrinklers.push({id:parseInt(i),close:0,sucked:0,phase:0,x:0,y:0,r:0,hurt:0,hp:Game.wrinklerHP,selected:0,type:0});
	}
	Game.getWrinklersMax = () => num;
};

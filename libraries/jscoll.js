function DeleteAll() {
  vars = Object.keys(window);
  for (var i in vars) {
    eval('delete ' + vars[i]);
  }
}
function Mod1(x) {
  if (x >= 0) {
    return x % 1;
  } else {
    return (1-(-x % 1))%1;
  }
}
function suc(a) {
  return a + 1;
}       //successor                H0
function add(a, b) {
  return a + b;
}    //addition                 H1
function sub(a, b) {
  return a - b;
}    //subtraction              H1^-1
function mul(a, b) {
  return a * b;
}    //multiplication           H2
function div(a, b) {
  return a / b;
}    //division                 H2^-1
function pow(b, x) {
  return Math.pow(b, x);
}    //exponent                 H3
function rtv(v, x) {
  return Math.pow(v, 1/x);
}    //root                     H3^-1 base
function log(v, b) {
  if (b == 2) {
    return Math.log2(v);
  } else if (b == 10) {
    return Math.log10(v);
  } else if (b === undefined) {
    return Math.log(v);
  }
  return Math.log(v) / Math.log(b);
}    //logarithm                H3^-1 power
function tet(b, x) {
  var val;
  if (x < -1) {
    val = tet(b, Mod1(x)-1);
    while (x <= -1) {
      if (isNaN(val)) {
        break;
      }
      val = log(val, b);
      x++;
    }
  } else if (x <= 0) {
    //val = x + 1;
    if (x == -1) {
      val = 0;
    } else {
      val = 1 + ((2 * log(b)) / (1 + log(b))) * x - ((1 - log(b)) / (1 + log(b))) * pow(x, 2);
    }
  } else if (x > 0) {
    val = tet(b, Mod1(x)-1);
    while (x >= 0) {
      if (val == Infinity) {
        break;
      }
      val = pow(b, val);
      x--;
    }
  }
  return val;
}    //tetration                H4
function srt(v, x) {
	var xv = 2;
	var min = 1;
	var max = 1e12;
	var ct = 1000;
	while (Math.abs(max-min)>1e-12) {
	  var val = tet(xv, x);
	  if (val > v) {
	    max=xv;
	    xv=(min+xv)/2;
	  } else if (val < v) {
	    min=xv;
	    xv=(xv+max)/2;
	  } else {
	    break;
	  }
	  if (!--ct) {
	    break;
	  }
	}
	return xv;
}    //super-root               H4^-1 base
function slg(v, b) {
  var val;
	if (v < 0) {
	  return slg(pow(b, v), b) - 1;
	} else if (v <= 1) {
	  //val = -1 + v;
		val = -1 + ((2 * log(b)) / (1 + log(b))) * v + ((1 - log(b)) / (1 + log(b))) * pow(v, 2);
	} else if (v > 1) {
	  return slg(log(v, b), b) + 1;
	}
	return val;
}    //super-logarythm          H4^-1 power
function sls(v, b) {
  var xv = 2;
	var min = -2;
	var max = 1e12;
	var ct = 1000;
	while (Math.abs(max-min)>1e-12) {
	  var val = tet(b, xv);
	  if (val > v) {
	    max=xv;
	    xv=(min+xv)/2;
	  } else if (val < v) {
	    min=xv;
	    xv=(xv+max)/2;
	  } else {
	    break;
	  }
	  if (!--ct) {
	    break;
	  }
	}
	return xv;
}    //super-logarythm (search) H4^-1 power
function pen(b, x) {
  var val;
  if (x < -1) {
    val = pen(b, Mod1(x)-1);
    while (x <= -1) {
      if (isNaN(val)) {
        break;
      }
      val = slg(val, b);
      x++;
    }
  } else if (x <= 0) {
    //val = x + 1;
    if (x == -1) {
      val = 0;
    } else {
      val = 1 + ((2 * log(b)) / (1 + log(b))) * x - ((1 - log(b)) / (1 + log(b))) * pow(x, 2);
    }
  } else if (x > 0) {
    val = pen(b, Mod1(x)-1);
    while (x >= 0) {
      if (val == Infinity) {
        break;
      }
      val = tet(b, val);
      x--;
    }
  }
  return val;
}    //pentation                H5
function prt(v, x) {
  var xv = 2;
	var min = -10;
	var max = 1e12;
	var ct = 1000;
	while (Math.abs(max-min)>1e-12) {
	  var val = pen(xv, x);
	  if (val > v) {
	    max=xv;
	    xv=(min+xv)/2;
	  } else if (val < v) {
	    min=xv;
	    xv=(xv+max)/2;
	  } else {
	    break;
	  }
	  if (!--ct) {
	    break;
	  }
	}
	return xv;
}    //penta-root               H5^-1 base
function plg(v, b) {
  var val;
	if (v < 0) {
	  return plg(tet(b, v), b) - 1;
	} else if (v <= 1) {
	  //val = -1 + v;
		val = -1 + ((2 * log(b)) / (1 + log(b))) * v + ((1 - log(b)) / (1 + log(b))) * pow(v, 2);
	} else if (v > 1) {
	  return plg(slg(v, b), b) + 1;
	}
	return val;
}    //penta-logarythm          H5^-1 power
function pls(v, b) {
  var xv = 2;
	var min = -100;
	var max = 1e12;
	var ct = 1000;
	while (Math.abs(max-min)>1e-12) {
	  var val = pen(b, xv);
	  if (val > v) {
	    max=xv;
	    xv=(min+xv)/2;
	  } else if (val < v) {
	    min=xv;
	    xv=(xv+max)/2;
	  } else {
	    break;
	  }
	  if (!--ct) {
	    break;
	  }
	}
	return xv;
}    //penta-logarythm (search) H4^-1 power
function wtn(b, x) {
  return pow(b, pow(b, (x - 1)));
  /*var val = b;
  for (var i = 0; i < x - 1; i++) {
    val = pow(val, b);
  }
  return val;*/
}
function wpn(b, x) {
  var val = b;
  for (var i = 0; i < x - 1; i++) {
    val = tet(val, b);
  }
  return val;
}
function logH0(a, b, base) {
  if (base === undefined) {base = 2;}
  return log(pow(base, a) + pow(base, b), base);
}
function logH1(a, b) {
  return a + b;
}
function logH2(a, b) {
  return a * b;
}
function logH3(a, b, base) {
  if (base === undefined) {base = 2;}
  return pow(base, log(a, base) * log(b, base));
}
function g(a, b, c) {
  if (a > 3) {
    return g(a-1,g(a-1,b,c),c);
  }
  if (a == 0) {
    return c + b;
  } else if (a == 1) {
    return c * b;
  } else if (a == 2) {
    return pow(c, b);
  } else if (a == 3) {
    return tet(c, b);
  }
}
function gamma(n) {
  var g = 7,
      p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (n < 0.5) {
    return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
  } else {
    n--;
    var x = p[0];
    for (var i = 1; i < g + 2; i++) {
      x += p[i] / (n + i);
    }
    var t = n + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
  }
}
function seekval(result, func, xv, min, max, ct) {
  if (xv === undefined) {
    xv = 2;
  }
  if (min === undefined) {
	  min = 1;
  }
	if (max === undefined) {
	  max = 1e12;
	}
	if (ct === undefined) {
	  ct = 1000;
	}
	while (Math.abs(max-min)>1e-12) {
	  var val = func(xv);
	  if (val > result) {
	    max=xv;
	    xv=(min+xv)/2;
	  } else if (val < result) {
	    min=xv;
	    xv=(xv+max)/2;
	  } else {
	    break;
	  }
	  if (!--ct) {
	    break;
	  }
	}
	return xv;
}
/*
Object.defineProperty(obj, prop, descriptor)
descriptor:
  configurable    false
  enumerable      false
  value           undefined
  writable        false
  get             undefined
  set             undefined
Object.defineProperties(obj, props)
{
  get getfunction
  set setfunction
}
*/
e = {val: 47};
Object.defineProperties(e, {
  'unsettable': {
    configurable: true,
    enumerable: true,
    get: function() {return 'This cannot be set.';},
    set: function() {},
  },
  'symlinkval': {
    configurable: true,
    enumerable: true,
    get: function() {return this.val;},
    set: function(val) {this.val=val;}
  }
});
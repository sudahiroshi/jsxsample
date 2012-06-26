var JSX = {};
(function () {

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/*
 * global functions called by JSX as Number.* (renamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
}
/**
 * class dft_gui extends Object
 * @constructor
 */
function dft_gui() {
}

dft_gui.prototype = new Object;
/**
 * @constructor
 */
function dft_gui$() {
};

dft_gui$.prototype = new dft_gui;

/**
 * @param {!string} canvas1Id
 * @param {!string} canvas2Id
 * @param {!string} button1
 * @param {!string} button2
 * @param {!string} button3
 */
dft_gui.main$SSSSS = function (canvas1Id, canvas2Id, button1, button2, button3) {
	/** @type {HTMLCanvasElement} */
	var elm1;
	/** @type {VCanvas} */
	var vc1;
	/** @type {HTMLCanvasElement} */
	var elm2;
	/** @type {VCanvas} */
	var vc2;
	/** @type {HTMLButtonElement} */
	var b1;
	/** @type {HTMLButtonElement} */
	var b2;
	/** @type {HTMLButtonElement} */
	var b3;
	/** @type {!number} */
	var p;
	/** @type {dft} */
	var spectrum;
	/** @type {Array.<undefined|!number>} */
	var wave;
	var dft;
	var sin;
	var sin2;
	var rectangle;
	elm1 = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(canvas1Id)));
	vc1 = new VCanvas$LHTMLCanvasElement$(elm1);
	elm2 = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(canvas2Id)));
	vc2 = new VCanvas$LHTMLCanvasElement$(elm2);
	b1 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(button1)));
	b2 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(button2)));
	b3 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(button3)));
	p = 80;
	spectrum = new dft$();
	wave = [  ];
	dft = (function () {
		/** @type {!number} */
		var i;
		/** @type {Array.<undefined|!number>} */
		var ar;
		/** @type {Array.<undefined|!number>} */
		var ai;
		vc1.context.fillStyle = 'rgb( 255, 255, 255 )';
		vc1.context.fillRect(0, 0, vc1.canvas.width, vc1.canvas.height);
		vc1.context.fillStyle = 'rgb( ' + vc1._color.join(',').toString() + ')';
		vc2.context.fillStyle = 'rgb( 255, 255, 255 )';
		vc2.context.fillRect(0, 0, vc2.canvas.width, vc2.canvas.height);
		vc2.context.fillStyle = 'rgb( ' + vc2._color.join(',').toString() + ')';
		vc1.scale$NNNN(-10, 1.2, p + 20, -2.4);
		vc1._color = [ 100, 100, 100, 1 ];
		vc1.context.fillStyle = 'rgba(' + vc1._color.join(',').toString() + ')';
		vc1.context.strokeStyle = 'rgba(' + vc1._color.join(',').toString() + ')';
		vc1.line$NNNN(-10, 0, p + 20, 0);
		vc1.line$NNNN(0, -10, 0, 10);
		for (i = 0; i <= p; i += 10) {
			vc1.line$NNNN(i, -0.05, i, 0.05);
		}
		vc1._color = [ 50, 100, 50, 1 ];
		vc1.context.fillStyle = 'rgba(' + vc1._color.join(',').toString() + ')';
		vc1.context.strokeStyle = 'rgba(' + vc1._color.join(',').toString() + ')';
		for (i = 0; i < p - 1; i++) {
			vc1.line$NNNN(i, wave[i], i + 1, wave[i + 1]);
		}
		spectrum.dft$AN(wave);
		ar = spectrum.ar;
		ai = spectrum.ai;
		vc2.scale$NNNN(-10, 1.2, p + 20, -2.4);
		vc2._color = [ 100, 100, 100, 1 ];
		vc2.context.fillStyle = 'rgba(' + vc2._color.join(',').toString() + ')';
		vc2.context.strokeStyle = 'rgba(' + vc2._color.join(',').toString() + ')';
		vc2.line$NNNN(-10, 0, p + 20, 0);
		vc2.line$NNNN(0, -10, 0, 10);
		for (i = 0; i <= p; i += 10) {
			vc2.line$NNNN(i, -0.05, i, 0.05);
		}
		vc2.line$NNNN(0, 0, p, 0);
		vc2._color = [ 200, 50, 50, 1 ];
		vc2.context.fillStyle = 'rgba(' + vc2._color.join(',').toString() + ')';
		vc2.context.strokeStyle = 'rgba(' + vc2._color.join(',').toString() + ')';
		for (i = 0; i < p; i++) {
			vc2.line$NNNN(i, 0, i, ar[i]);
		}
		vc2._color = [ 50, 50, 200, 1 ];
		vc2.context.fillStyle = 'rgba(' + vc2._color.join(',').toString() + ')';
		vc2.context.strokeStyle = 'rgba(' + vc2._color.join(',').toString() + ')';
		for (i = 0; i < p; i++) {
			vc2.line$NNNN(i + 0.3, 0, i + 0.3, ai[i]);
		}
	});
	sin = (function (e) {
		var fn;
		fn = (function (x) {
			return Math.sin(x);
		});
		wave = FG$sin$F$NN$N(fn, p);
		dft();
	});
	sin2 = (function (e) {
		var fn;
		fn = (function (x) {
			return Math.sin(x);
		});
		wave = FG$sin30$F$NN$N(fn, p);
		dft();
	});
	rectangle = (function (e) {
		/** @type {!number} */
		var i;
		wave = [  ];
		for (i = 0; i < p / 2; i++) {
			wave.push(1);
		}
		for (i = p / 2; i < p; i++) {
			wave.push(-1);
		}
		dft();
	});
	b1.addEventListener("click", sin);
	b2.addEventListener("click", sin2);
	b3.addEventListener("click", rectangle);
};

var dft_gui$main$SSSSS = dft_gui.main$SSSSS;

/**
 * class FG extends Object
 * @constructor
 */
function FG() {
}

FG.prototype = new Object;
/**
 * @constructor
 */
function FG$() {
};

FG$.prototype = new FG;

/**
 * @param {!number} num
 * @return {Array.<undefined|!number>}
 */
FG.sin$F$NN$N = function (f, num) {
	/** @type {Array.<undefined|!number>} */
	var wave;
	/** @type {!number} */
	var i;
	wave = [  ];
	for (i = 0; i < num; i++) {
		wave.push(f(6.283185307179586 / num * i));
	}
	return wave;
};

var FG$sin$F$NN$N = FG.sin$F$NN$N;

/**
 * @param {!number} num
 * @return {Array.<undefined|!number>}
 */
FG.sin30$F$NN$N = function (f, num) {
	/** @type {Array.<undefined|!number>} */
	var wave;
	/** @type {!number} */
	var i;
	wave = [  ];
	for (i = 0; i < num; i++) {
		wave.push(f(6.283185307179586 / num * i + 0.5235987755982988));
	}
	return wave;
};

var FG$sin30$F$NN$N = FG.sin30$F$NN$N;

/**
 * class dom extends Object
 * @constructor
 */
function dom() {
}

dom.prototype = new Object;
/**
 * @constructor
 */
function dom$() {
};

dom$.prototype = new dom;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.id$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(id));
};

var dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(id));
};

var dom$getElementById$S = dom.getElementById$S;

/**
 * @param {!string} tag
 * @return {HTMLElement}
 */
dom.createElement$S = function (tag) {
	return dom.window.document.createElement(tag);
};

var dom$createElement$S = dom.createElement$S;

/**
 * class dft extends Object
 * @constructor
 */
function dft() {
}

dft.prototype = new Object;
/**
 * @constructor
 */
function dft$() {
	this.ar = [  ];
	this.ai = [  ];
};

dft$.prototype = new dft;

/**
 * @param {Array.<undefined|!number>} wave
 */
dft.prototype.dft$AN = function (wave) {
	/** @type {!number} */
	var p;
	/** @type {!number} */
	var n;
	/** @type {!number} */
	var m;
	/** @type {!number} */
	var x;
	p = wave.length;
	for (n = 0; n < p; n++) {
		this.ar.push(0);
		this.ai.push(0);
		for (m = 0; m < p; m++) {
			x = 6.283185307179586 / p * m * n;
			this.ar[n] += wave[m] * Math.cos(- x);
			this.ai[n] += wave[m] * Math.sin(- x);
		}
		this.ar[n] /= p;
		this.ai[n] /= p;
	}
};

/**
 * @return {Array.<undefined|!number>}
 */
dft.prototype.get_ar$ = function () {
	return this.ar;
};

/**
 * @return {Array.<undefined|!number>}
 */
dft.prototype.get_ai$ = function () {
	return this.ai;
};

/**
 * class VCanvas extends Object
 * @constructor
 */
function VCanvas() {
}

VCanvas.prototype = new Object;
/**
 * @constructor
 * @param {HTMLCanvasElement} canvas
 */
function VCanvas$LHTMLCanvasElement$(canvas) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var width;
	/** @type {!number} */
	var height;
	this.scaleWidth = 0;
	this.scaleHeight = 0;
	this.scaleTop = 0;
	this.scaleLeft = 0;
	this._scalable = false;
	this._dir_x = 1;
	this._dir_y = 1;
	this._color = [ 0, 0, 0, 1 ];
	this.context = (function (o) { return o instanceof CanvasRenderingContext2D ? o : null; })(canvas.getContext("2d"));
	this.canvas = canvas;
	x = canvas.offsetLeft;
	y = canvas.offsetTop;
	width = canvas.width;
	height = canvas.height;
};

VCanvas$LHTMLCanvasElement$.prototype = new VCanvas;

/**
 * @param {!number} left
 * @param {!number} top
 * @param {!number} width
 * @param {!number} height
 */
VCanvas.prototype.scale$NNNN = function (left, top, width, height) {
	this.scaleLeft = left;
	this.scaleTop = top;
	this.scaleWidth = width;
	this.scaleHeight = height;
	this._scalable = true;
	if (this.scaleWidth < 0) {
		this.scaleWidth = - this.scaleWidth;
		this._dir_x = -1;
	} else {
		this._dir_x = 1;
	}
	if (this.scaleHeight < 0) {
		this.scaleHeight = - this.scaleHeight;
		this._dir_y = -1;
	} else {
		this._dir_y = 1;
	}
};

/**
 * @param {!number} r
 * @param {!number} g
 * @param {!number} b
 */
VCanvas.prototype.forecolor$NNN = function (r, g, b) {
	this._color = [ r, g, b, 1 ];
	this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
	this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
};

/**
 * @param {!number} r
 * @param {!number} g
 * @param {!number} b
 * @param {!number} a
 */
VCanvas.prototype.forecolor$NNNN = function (r, g, b, a) {
	this._color = [ r, g, b, a ];
	this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
	this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
};

/**
 * @param {!number} x1
 * @param {!number} y1
 * @param {!number} x2
 * @param {!number} y2
 */
VCanvas.prototype.line$NNNN = function (x1, y1, x2, y2) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var xx2;
	/** @type {!number} */
	var yy1;
	/** @type {!number} */
	var yy2;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		xx2 = (x2 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
		yy2 = (y2 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		xx2 = x2;
		yy1 = y1;
		yy2 = y2;
	}
	this.context.beginPath();
	this.context.moveTo(xx1, yy1);
	this.context.lineTo(xx2, yy2);
	this.context.stroke();
};

/**
 */
VCanvas.prototype.cls$ = function () {
	this.context.fillStyle = 'rgb( 255, 255, 255 )';
	this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	this.context.fillStyle = 'rgb( ' + this._color.join(',').toString() + ')';
};

/**
 * class js extends Object
 * @constructor
 */
function js() {
}

js.prototype = new Object;
/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

$__jsx_lazy_init(dom, "window", function () {
	return js.global.window;
});
js.global = (function () { return this; })();

var $__jsx_classMap = {
	"dft_gui.jsx": {
		dft_gui: dft_gui,
		dft_gui$: dft_gui$,
		FG: FG,
		FG$: FG$
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom$
	},
	"dftlib.jsx": {
		dft: dft,
		dft$: dft$
	},
	"vcanvas.jsx": {
		VCanvas: VCanvas,
		VCanvas$LHTMLCanvasElement$: VCanvas$LHTMLCanvasElement$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
	}
};


}());

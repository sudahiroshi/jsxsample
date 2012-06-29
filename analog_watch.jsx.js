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
 * class analog_watch extends Object
 * @constructor
 */
function analog_watch() {
}

analog_watch.prototype = new Object;
/**
 * @constructor
 */
function analog_watch$() {
};

analog_watch$.prototype = new analog_watch;

/**
 * @param {!string} elmId
 */
analog_watch.main$S = function (elmId) {
	/** @type {HTMLCanvasElement} */
	var elm;
	/** @type {VCanvas} */
	var vc;
	var watch;
	elm = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(elmId)));
	vc = new VCanvas$LHTMLCanvasElement$(elm);
	vc.scale$NNNN(-1, -1, 2, 2);
	watch = (function () {
		/** @type {!number} */
		var i;
		/** @type {!number} */
		var rad;
		/** @type {Date} */
		var date;
		/** @type {!number} */
		var hour;
		/** @type {!number} */
		var min;
		/** @type {!number} */
		var sec;
		/** @type {!number} */
		var msec;
		/** @type {!number} */
		var rad_hour;
		/** @type {!number} */
		var rad_min;
		/** @type {!number} */
		var rad_sec;
		vc.context.fillStyle = 'rgb( 255, 255, 255 )';
		vc.context.fillRect(0, 0, vc.canvas.width, vc.canvas.height);
		vc.context.fillStyle = 'rgb( ' + vc._color.join(',').toString() + ')';
		for (i = 0; i < 12; i++) {
			rad = i * 30 * 3.141592653589793 / 180;
			vc.line$NNNN(0.95 * Math.cos(rad), 0.95 * Math.sin(rad), 0.9 * Math.cos(rad), 0.9 * Math.sin(rad));
		}
		date = new Date();
		hour = date.getHours();
		min = date.getMinutes();
		sec = date.getSeconds();
		msec = date.getMilliseconds();
		rad_hour = (hour * 30 + min / 2 - 90) * 3.141592653589793 / 180;
		rad_min = (min * 6 + sec / 10 - 90) * 3.141592653589793 / 180;
		rad_sec = (sec * 6 + msec / 166 - 90) * 3.141592653589793 / 180;
		vc.line$NNNN(0, 0, 0.7 * Math.cos(rad_hour), 0.7 * Math.sin(rad_hour));
		vc.line$NNNN(0, 0, 0.9 * Math.cos(rad_min), 0.9 * Math.sin(rad_min));
		vc._color = [ 200, 50, 50, 1 ];
		vc.context.fillStyle = 'rgba(' + vc._color.join(',').toString() + ')';
		vc.context.strokeStyle = 'rgba(' + vc._color.join(',').toString() + ')';
		vc.line$NNNN(0, 0, 0.9 * Math.cos(rad_sec), 0.9 * Math.sin(rad_sec));
		vc._color = [ 0, 0, 0, 1 ];
		vc.context.fillStyle = 'rgba(' + vc._color.join(',').toString() + ')';
		vc.context.strokeStyle = 'rgba(' + vc._color.join(',').toString() + ')';
	});
	Timer$setInterval$F$V$I(watch, 100);
};

var analog_watch$main$S = analog_watch.main$S;

/**
 * class TimerHandle extends Object
 * @constructor
 */
function TimerHandle() {
}

TimerHandle.prototype = new Object;
/**
 * @constructor
 */
function TimerHandle$() {
};

TimerHandle$.prototype = new TimerHandle;

/**
 * class Timer extends Object
 * @constructor
 */
function Timer() {
}

Timer.prototype = new Object;
/**
 * @constructor
 */
function Timer$() {
};

Timer$.prototype = new Timer;

/**
 * @param {!number} milliseconds
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$I = function (listener, milliseconds) {
	var f;
	f = (function (o) { return typeof(o) === "function" ? o : null; })(js.global.setTimeout);
	return f(listener, milliseconds);
};

var Timer$setTimeout$F$V$I = Timer.setTimeout$F$V$I;

/**
 * @param {TimerHandle} timerID
 */
Timer.clearTimeout$LTimerHandle$ = function (timerID) {
	var f;
	f = (function (o) { return typeof(o) === "function" ? o : null; })(js.global.clearTimeout);
	f(timerID);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {!number} milliseconds
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$I = function (listener, milliseconds) {
	var f;
	f = (function (o) { return typeof(o) === "function" ? o : null; })(js.global.setInterval);
	return f(listener, milliseconds);
};

var Timer$setInterval$F$V$I = Timer.setInterval$F$V$I;

/**
 * @param {TimerHandle} timerID
 */
Timer.clearInterval$LTimerHandle$ = function (timerID) {
	var f;
	f = (function (o) { return typeof(o) === "function" ? o : null; })(js.global.clearInterval);
	f(timerID);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

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
	"analog_watch.jsx": {
		analog_watch: analog_watch,
		analog_watch$: analog_watch$
	},
	"system:lib/js/timer.jsx": {
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle$,
		Timer: Timer,
		Timer$: Timer$
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom$
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
var aw = JSX;

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
		Object.defineProperty(obj, prop, {
			value: value, 
			enumerable: true,
			writable: true,
			configurable: true
		});
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
 * class Pen extends Object
 * @constructor
 */
function Pen() {
}

Pen.prototype = new Object;
/**
 * @constructor
 * @param {HTMLCanvasElement} canvas
 */
function Pen$LHTMLCanvasElement$(canvas) {
	this.context = (function (o) { return o instanceof CanvasRenderingContext2D ? o : null; })(canvas.getContext("2d"));
	this.canvas = canvas;
	this.mouse_condition = false;
};

Pen$LHTMLCanvasElement$.prototype = new Pen;

/**
 */
Pen.prototype.start$ = function () {
	var $this = this;
	var pen_down;
	var pen_up;
	var draw;
	pen_down = (function (e) {
		$this.mouse_condition = true;
	});
	pen_up = (function (e) {
		$this.mouse_condition = false;
	});
	draw = (function (e) {
		/** @type {MouseEvent} */
		var es;
		/** @type {!number} */
		var x;
		/** @type {!number} */
		var y;
		if ($this.mouse_condition) {
			es = (function (o) { return o instanceof MouseEvent ? o : null; })(e);
			x = es.clientX;
			y = es.clientY;
			$this.context.beginPath();
			$this.context.arc(x, y, 5, 0, Math.PI * 2.0, false);
			$this.context.fill();
		}
	});
	this.canvas.addEventListener("mousedown", pen_down);
	this.canvas.addEventListener("mouseup", pen_up);
	this.canvas.addEventListener("mousemove", draw);
};

/**
 * class Application extends Object
 * @constructor
 */
function Application() {
}

Application.prototype = new Object;
/**
 * @constructor
 */
function Application$() {
};

Application$.prototype = new Application;

/**
 * @param {!string} canvasId
 */
Application.main$S = function (canvasId) {
	/** @type {HTMLCanvasElement} */
	var canvas;
	/** @type {Pen} */
	var pen;
	canvas = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(canvasId)));
	pen = new Pen$LHTMLCanvasElement$(canvas);
	pen.start$();
};

Application$main$S = Application.main$S;

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

dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.window.document.getElementById(id));
};

dom$getElementById$S = dom.getElementById$S;

/**
 * @param {!string} tag
 * @return {HTMLElement}
 */
dom.createElement$S = function (tag) {
	return dom.window.document.createElement(tag);
};

dom$createElement$S = dom.createElement$S;

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
	return js.global["window"];
});
js.global = (function () { return this; })();

var $__jsx_classMap = {
	"pen.jsx": {
		Pen: Pen,
		Pen$LHTMLCanvasElement$: Pen$LHTMLCanvasElement$,
		Application: Application,
		Application$: Application$
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
	}
};


}());

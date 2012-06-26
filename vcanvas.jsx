import "js/web.jsx";

final class VCanvas {
	var context: CanvasRenderingContext2D;
	var canvas: HTMLCanvasElement;
	var scaleWidth: number;
	var scaleHeight: number;
	var scaleTop: number;
	var scaleLeft: number;
	var _scalable = false;
	var _dir_x = 1;
	var _dir_y = 1;
	var _color = [ 0, 0, 0, 1 ];

	function constructor( canvas: HTMLCanvasElement ) {
		this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
		this.canvas = canvas;
		var x = canvas.offsetLeft;
		var y = canvas.offsetTop;
		var width = canvas.width;
		var height = canvas.height;
	}

	function scale( left: number, top: number, width: number, height: number ): void {
		this.scaleLeft = left;
		this.scaleTop = top;
		this.scaleWidth = width;
		this.scaleHeight = height;
		this._scalable = true;
		if( this.scaleWidth < 0 ) {
			this.scaleWidth = -this.scaleWidth;
			this._dir_x = -1;
		} else	this._dir_x = 1;
		if( this.scaleHeight < 0 ) {
			this.scaleHeight = -this.scaleHeight;
			this._dir_y = -1;
		} else	this._dir_y = 1;
	}

	function forecolor( r: number, g: number, b: number ): void {
		this._color = [r, g, b, 1 ];
		this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
		this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
	}

	function forecolor( r: number, g: number, b: number, a: number ): void {
		this._color = [r, g, b, a ];
		this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
		this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
	}

	function line( x1: number, y1: number, x2: number, y2: number ): void {
		if( this._scalable ) {
			var xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
			var xx2 = (x2 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
			var yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
			var yy2 = (y2 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
		} else {
			var xx1 = x1;
			var xx2 = x2;
			var yy1 = y1;
			var yy2 = y2;
		}
		this.context.beginPath();
		this.context.moveTo( xx1, yy1 );
		this.context.lineTo( xx2, yy2 );
		this.context.stroke();
	}

	function cls(): void {
		this.context.fillStyle = 'rgb( 255, 255, 255 )';
		this.context.fillRect( 0, 0, this.canvas.width, this.canvas.height );
		this.context.fillStyle = 'rgb( ' + this._color.join(',').toString() + ')';
	}
}

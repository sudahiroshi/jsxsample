import "js/web.jsx";

final class Pen {
	var context : CanvasRenderingContext2D;
	var canvas : HTMLCanvasElement;
	var mouse_condition : boolean;

	function constructor( canvas : HTMLCanvasElement ) {
		this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
		this.canvas = canvas;
		this.mouse_condition = false;
	}

	function start() : void {
		var pen_down = function( e : Event ) : void {
			this.mouse_condition = true;
		};
		var pen_up = function( e : Event ) : void {
			this.mouse_condition = false;
		};
		var draw = function( e : Event ) : void {
			if( this.mouse_condition ) {
				var es = e as MouseEvent;
				var x = es.offsetX;
				var y = es.offsetY;
				this.context.beginPath();
				this.context.arc( x, y, 5, 0, Math.PI * 2.0, false );
				this.context.fill();
			}
		};
		this.canvas.addEventListener( "mousedown", pen_down );
		this.canvas.addEventListener( "mouseup", pen_up );
		this.canvas.addEventListener( "mousemove", draw );
	}
}

final class Application {
	static function main( canvasId : string ) : void {
		var canvas = dom.id(canvasId) as HTMLCanvasElement;
		var pen = new Pen( canvas );
		pen.start();
	}
}

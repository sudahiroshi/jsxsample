import "timer.jsx";
import "js/web.jsx";
import "vcanvas.jsx";

final class analog_watch {
	static function main( elmId: string ) : void {
		var elm = dom.id( elmId ) as HTMLCanvasElement;
		var vc = new VCanvas( elm );
		vc.scale( -1, -1, 2, 2 );

		var watch = function(): void {
			vc.cls();

			for( var i=0; i<12; i++ ) {
				var rad = i * 30 * Math.PI / 180;
				vc.line( 0.95*Math.cos(rad), 0.95*Math.sin(rad), 0.9*Math.cos(rad), 0.9*Math.sin(rad) );
			}

			var date = new Date;
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var msec = date.getMilliseconds();

			var rad_hour = ( hour * 30 + min / 2 - 90 ) * Math.PI / 180;
			var rad_min = ( min * 6 + sec / 10 - 90 ) * Math.PI / 180;
			var rad_sec = ( sec * 6 + msec / 166 - 90 ) * Math.PI / 180;

			vc.line( 0, 0, 0.7 * Math.cos( rad_hour ), 0.7 * Math.sin( rad_hour ) );
			vc.line( 0, 0, 0.9 * Math.cos( rad_min ), 0.9 * Math.sin( rad_min ) );
			vc.forecolor( 200, 50, 50 );
			vc.line( 0, 0, 0.9 * Math.cos( rad_sec ), 0.9 * Math.sin( rad_sec ) );
			vc.forecolor( 0, 0, 0 );
			
		};
		Timer.setInterval( watch, 100 );
	}
}

import "js/web.jsx";
import "dftlib.jsx";
import "vcanvas.jsx";

final class dft_gui {
	static function main( canvas1Id: string, canvas2Id: string, button1: string, button2: string, button3: string ) : void {
		var elm1 = dom.id(canvas1Id) as HTMLCanvasElement;
		var vc1 = new VCanvas( elm1 );
		var elm2 = dom.id(canvas2Id) as HTMLCanvasElement;
		var vc2 = new VCanvas( elm2 );
		var b1 = dom.id(button1) as HTMLButtonElement;
		var b2 = dom.id(button2) as HTMLButtonElement;
		var b3 = dom.id(button3) as HTMLButtonElement;

		var p = 80;	// サンプル数
		var spectrum = new dft();
		var wave = []: number[];

		var dft = function(): void {
			vc1.cls();
			vc2.cls();

			// 元波形の軸などの描画
			vc1.scale( -10, 1.2, p+20, -2.4 );
			vc1.forecolor( 100, 100, 100, 1 );
			vc1.line( -10, 0, p+20, 0 );
			vc1.line( 0, -10, 0, 10 );
			for( var i=0; i<=p; i+=10 )
				vc1.line( i, -0.05, i, 0.05 );

			vc1.forecolor( 50, 100, 50, 1 );
			for( var i=0; i<p-1; i++ )
				vc1.line( i, wave[i], i+1, wave[i+1] );

			// DFT
			spectrum.dft( wave );
			var ar = spectrum.get_ar();
			var ai = spectrum.get_ai();

			// 周波数成分の軸などの描画
			vc2.scale( -10, 1.2, p+20, -2.4 );
			vc2.forecolor( 100, 100, 100, 1 );
			vc2.line( -10, 0, p+20, 0 );
			vc2.line( 0, -10, 0, 10 );
			for( var i=0; i<=p; i+=10 )
				vc2.line( i, -0.05, i, 0.05 );
			vc2.line( 0, 0, p, 0 );

			// 実部の描画
			vc2.forecolor( 200, 50, 50 );
			for( var i=0; i<p; i++ )
				vc2.line( i, 0, i, ar[i] );
			// 虚部の描画
			vc2.forecolor( 50, 50, 200 );
			for( var i=0; i<p; i++ )
				vc2.line( i+0.3, 0, i+0.3, ai[i] );
		};
		var sin = function( e: Event ): void {
			var fn = ( x: number ): number -> Math.sin(x);
			wave = FG.sin( fn, p );
			dft();
		};
		var sin2 = function( e: Event ): void {
			var fn = ( x: number ): number -> Math.sin(x);
			wave = FG.sin30( fn, p );
			dft();
		};
		var rectangle = function( e: Event ): void {
			wave = []: number[];
			for( var i=0; i<p/2; i++ )	wave.push(  1 );
			for( var i=p/2; i<p; i++ )	wave.push( -1 );
			dft();
		};
		b1.addEventListener( "click", sin );
		b2.addEventListener( "click", sin2 );
		b3.addEventListener( "click", rectangle );
	}
}

class FG {
	static function sin( f:(number)->number, num: number ): number[] {
		var wave = []: number[];
		for( var i=0; i<num; i++ ) {
			wave.push( f( 2.0 * Math.PI / num * i) );
		}
		return wave;
	}
	static function sin30( f:(number)->number, num: number ): number[] {
		var wave = []: number[];
		for( var i=0; i<num; i++ ) {
			wave.push( f( 2.0 * Math.PI / num * i + 30.0 / 180.0 * Math.PI) );
		}
		return wave;
	}
}

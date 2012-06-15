class _Main {
	static function main( args: string[] ): void {
		var p = 10;
		var spectrum = new dft();
		var fn = ( x: number ):number -> {
			return( 3.0*Math.sin(x) + 7.0*Math.cos(3.0*x) );
		};
		var wave = FG.sampling( fn, p );
		spectrum.dft( wave );
		var ar = spectrum.get_ar();
		var ai = spectrum.get_ai();
		for( var i=0; i<ar.length; i++ ) {
			var x = Math.sqrt( ai[i] * ai[i] + ar[i] * ar[i] ) / p * 2.0;
			x = ((x*1000) as int)/1000;
			log( i.toString() + ":" + x.toString() );
		}
	}
}

class dft {
	var ar = []: number[];
	var ai = []: number[];

	function dft( wave: number[] ): void {
		var p = wave.length;
		for( var n=0; n<p; n++ ) {
			this.ar.push(0);
			this.ai.push(0);
			for( var m=0; m<p; m++ ) {
				var x = 2.0 * Math.PI / p * m * n;
				this.ar[n] += wave[m] * Math.cos(-x);
				this.ai[n] += wave[m] * Math.sin(-x);
			}
		}
	}
	function get_ar() : number[] {
		return this.ar;
	}
	function get_ai() : number[] {
		return this.ai;
	}
}

class FG {
	static function sampling( f:(number)->number, num: number ): number[] {
		var wave = []: number[];
		for( var i=0; i<num; i++ ) {
			wave.push( f( 2.0 * Math.PI / num * i) );
		}
		return wave;
	}
}

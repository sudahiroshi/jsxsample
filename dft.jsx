class _Main {
	static function main( args: string[] ): void {
		var p = 20;
		var spectrum = new dft(p);
		spectrum.sampling();
		spectrum.dft();
		var ar = spectrum.get_ar();
		var ai = spectrum.get_ai();
		for( var i=0; i<ar.length; i++ ) {
			var x = Math.sqrt( ai[i] * ai[i] + ar[i] * ar[i] ) / p * 2.0;
			log( x );
		}
	}
}

class dft {
	var ar = [0];
	var ai = [0];
	var f = [0];
	var p: number;

	function constructor( p: number ) {
		this.ar.pop();
		this.ai.pop();
		this.f.pop();
		this.p = p;
	}
	function sampling(): void {
		for( var i=0; i<this.p; i++ ) {
			this.f.push( this.func_y( 2.0 * Math.PI / this.p * i) / this.p);
		}
	}
	function func_y( x: number ): number {
		return( 3.0*Math.sin(x) + 7.0*Math.cos(3.0*x) );
	}
	function dft(): void {
		for( var n=0; n<this.p; n++ ) {
			this.ar.push(0);
			this.ai.push(0);
			for( var m=0; m<this.p; m++ ) {
				var x = 2.0 * Math.PI / this.p * m * n;
				this.ar[n] += this.f[m] * Math.cos(-x);
				this.ai[n] += this.f[m] * Math.sin(-x);
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

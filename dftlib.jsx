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
			this.ar[n] /= p;
			this.ai[n] /= p;
		}
	}
	function get_ar() : number[] {
		return this.ar;
	}
	function get_ai() : number[] {
		return this.ai;
	}
}

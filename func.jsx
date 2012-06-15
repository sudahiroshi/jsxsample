class _Main {
	static function main(args : string[]) : void {
		var baz = function( x: number, y: number ) : number { return x * y; };
		var qux = ( x: number, y: number ): number -> { return x * y; };
		var quux = ( x: number, y: number ): number -> x * y;

		// 渡したい関数がquuxに代入されている場合
		_Main.corge( quux, 3, 5 );

		// 無名関数を渡す場合（公開当初から使える記述方法）
		_Main.corge( function( x: number, y: number ): number {
			return x * y;
		}, 3, 5 );

		// 無名関数を渡す場合（->を使った新しい記述方法）
		_Main.corge( (( x: number, y: number ): number -> x * y ), 3, 5 );
	}

	// 公開当初から使える記述方法
	static function corge( fn: function( :number, :number): number, x: number, y: number ) :void {
		log fn( x, y );
	}

	// ->を使った新しい記述方法
	static function grault( fn: ( number, number )->number, x: number, y: number ) :void {
		log fn( x, y );
	}
}

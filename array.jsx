class _Main {
	static function main( args: string[] ) : void {

		// 直接値を代入する
		var array1 = [ 1, 3, 5 ];

		// 空の配列を作成する
		var array2 = [] : Array.<number>;

		// 空の配列を作成する　その2
		var array3 = [] : number[];

		// -----------------------------

		log array1.length;   // 3と表示される
		log array2.length;   // 0と表示される

		// array2の末尾に要素を追加する
		array2.push( 7 );
		// array1は [ 7 ]になる

		log array2.length;   // 1と表示される

		// 配列を結合する
		array2 = array1.concat( array2 );
		// array2は [ 1, 3, 5, 7 ]になる

		// 末尾を削る
		log array2.pop();
		// 7と表示され&#65292;array2は [ 1, 3, 5 ]になる

		// 先頭を削る
		log array2.shift();
		// 1と表示され&#65292;array2は[ 3, 5 ]になる

		// -----------------------------

		log array2[0];   // 3が表示される
		log "array2[0] = " + array2[0].toString();
		// array2[0] = 3 と表示される&#65294;このように文字列として結合したい場合は&#12300;toString()&#12301;が必須です&#65294;

		// toStringして全要素を表示
		log array2.toString();
		// 3, 5と表示される

		// joinで要素を全て結合して表示
		log array2.join( ", " );

		// for文で全要素を表示
		for( var i=0; i<array2.length; i++ ) {
			log array2[ i ];
		};

		// forEach文で全要素を表示
		array2.forEach( function( element : MayBeUndefined.<number> ) : void {
				log element;
				});

		// for-in文で全要素を表示
		for( var i in array2 ) {
			log array2[ i ];
		};

	}
}

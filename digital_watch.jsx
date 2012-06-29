import "timer.jsx";
import "js/web.jsx";

class Application {
	static function main( elm_id: string ): void {
		var elm = dom.id( elm_id ) as HTMLElement;
		var f = (): void -> {
			var date = new Date;
			var delimiter = ":";
			var hour = date.getHours() as string;
			var min = date.getMinutes() as string;
			var sec = date.getSeconds() as string;

			elm.innerHTML = hour+delimiter+min+delimiter+sec;
		};
		Timer.setInterval( f, 100 );
	}
}

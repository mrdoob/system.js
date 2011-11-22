/**
 * @author mr.doob / http://mrdoob.com/
 */

System = {

	browser: ( function () {

		var ua = navigator.userAgent;

		if ( /Arora/i.test( ua ) ) {

			 return 'Arora';

		} else if ( /Chrome/i.test( ua ) ) {

			 return 'Chrome';

		} else if ( /Epiphany/i.test( ua ) ) {

			return 'Epiphany';

		} else if ( /Firefox/i.test( ua ) ) {

			return 'Firefox';

		} else if ( /Mobile(\/.*)? Safari/i.test( ua ) ) {

			return 'Mobile Safari';

		} else if ( /MSIE/i.test( ua ) ) {

			return 'Internet Explorer';

		} else if ( /Midori/i.test( ua ) ) {

			return 'Midori';

		} else if ( /Opera/.test( ua ) ) {

			return 'Opera';

		} else if ( /Safari/i.test( ua ) ) {

			return 'Safari';

		}

		return false;

	} )(),

	os: ( function () {

		var ua = navigator.userAgent;

		if ( /Android/i.test( ua ) ) {

			 return 'Android';

		} else if ( /CrOS/i.test( ua ) ) {

			 return 'Chrome OS';

		} else if ( /iP[ao]d|iPhone/i.test( ua ) ) {

			return 'iOS';

		} else if ( /Linux/i.test( ua ) ) {

			return 'Linux';

		} else if ( /Mac OS/i.test( ua ) ) {

			return 'Mac OS';

		} else if ( /windows/i.test( ua ) ) {

			return 'Windows';

		}

		return false;

	} )(),

	support: {

		canvas: !! window.CanvasRenderingContext2D,

		localStorage: ( function () {

			try {

				return !! localStorage.getItem;

			} catch ( error ) {

				return false;

			}

		} )(),

		file: !! window.File && !! window.FileReader && !! window.FileList && !! window.Blob,

		fileSystem: !! window.requestFileSystem,

		requestAnimationFrame: !! window.mozRequestAnimationFrame || !! window.webkitRequestAnimationFrame || !! window.oRequestAnimationFrame || !! window.msRequestAnimationFrame,

		sessionStorage: ( function () {

			try {

				return !! sessionStorage.getItem;

			} catch ( error ) {

				return false;

			}

		} )(),

		webgl: !! window.WebGLRenderingContext,

		worker: !! window.Worker

	}

};


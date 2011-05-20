/**
 * @author mr.doob / http://mrdoob.com/
 */

System = {

	browser: ( function () {

		var ua = navigator.userAgent;

		if ( /Arora/.test( ua ) ) {

			 return 'Arora';

		} else if ( /Chrome/.test( ua ) ) {

			 return 'Chrome';

		} else if ( /Epiphany/.test( ua ) ) {

			return 'Epiphany';

		} else if ( /Firefox/.test( ua ) ) {

			return 'Firefox';

		} else if ( /Mobile Safari/.test( ua ) ) {

			return 'Mobile Safari';

		} else if ( /Midori/.test( ua ) ) {

			return 'Midori';

		} else if ( /Opera/.test( ua ) ) {

			return 'Opera';

		} else if ( /Safari/.test( ua ) ) {

			return 'Safari';

		} else if ( /MSIE/.test( ua ) ) {

			return 'Internet Explorer';

		}

		return false;

	} )(),

	os: ( function () {

		var ua = navigator.userAgent;

		if ( /Android/.test( ua ) ) {

			 return 'Android';

		} else if ( /iP[ao]d|iPhone/i.test( ua ) ) {

			return 'iOS';

		} else if ( /Linux/.test( ua ) ) {

			return 'Linux';

		} else if ( /Mac OS/.test( ua ) ) {

			return 'Mac OS';

		} else if ( /windows/.test( ua ) ) {

			return 'Windows';

		}

		return false;

	} )(),

	supports: {

		canvasContext: !! window.CanvasRenderingContext2D,

		webglContext: !! window.WebGLRenderingContext,

		webWorkers: !! window.Worker,

		localStorage: ( function() {

			try {

				return !! localStorage.getItem;

			} catch( error ) {

				return false;

			}

		} )(),

		sessionStorage: ( function() {

			try {

				return !! sessionStorate.getItem;

			} catch( error ) {

				return false;

			}

		} )(),

		file: !! window.File && !! window.FileReader && !! window.FileList && !! window.Blob

	}

};

/**
 * @author mr.doob / http://mrdoob.com/
 */

System = {

	browser: ( function () {

		if ( navigator.userAgent.match( /arora/i ) ) {

			 return 'Arora';

		} else if ( navigator.userAgent.match( /chrome/i ) ) {

			 return 'Chrome';

		} else if ( navigator.userAgent.match( /epiphany/i ) ) {

			return 'Epiphany';

		} else if ( navigator.userAgent.match( /firefox/i ) ) {

			return 'Firefox';

		} else if ( navigator.userAgent.match( /mobile safari/i ) ) {

			return 'Mobile Safari';

		} else if ( navigator.userAgent.match( /midori/i ) ) {

			return 'Midori';

		} else if ( navigator.userAgent.match( /opera/i ) ) {

			return 'Opera';

		} else if ( navigator.userAgent.match( /safari/i ) ) {

			return 'Safari';

		} else if ( navigator.userAgent.match( /msie/i ) ) {

			return 'Internet Explorer';

		}

		return false;

	} )(),

	os: ( function () {

		if ( navigator.userAgent.match( /android/i ) ) {

			 return 'Android';

		} else if ( navigator.userAgent.match( /ipod/i ) || navigator.userAgent.match( /ipad/i ) ) {

			return 'iOS';

		} else if ( navigator.userAgent.match( /linux/i ) ) {

			return 'Linux';

		} else if ( navigator.userAgent.match( /macintosh/i ) ) {

			return 'Macintosh';

		} else if ( navigator.userAgent.match( /windows/i ) ) {

			return 'Windows';

		}

		return false;

	} )(),

	supports: {

		canvas: !! window.CanvasRenderingContext2D,

		webgl: ( function () {

			try {

				return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' );

			} catch( error ) {

				return false;

			}

		} )(),

		worker: !! window.Worker,

		file: window.File && window.FileReader && window.FileList && window.Blob

	}

};

(function( $ ) {
	"use strict";

	// Header Background Color - Color Control
	wp.customize( 'header_background_color', function( value ) {
		value.bind( function( to ) {
			$( '.site-header' ).css( 'backgroundColor', to );
		} );
	});

	// Header Background Image - Image Control
	wp.customize( 'header_background_image', function( value ) {
		value.bind( function( to ) {
			$( '.site-header' ).css( 'background-image', 'url( ' + to + ')' );
		} );
	});

	// Header Background Image Repeat - Checkbox
	wp.customize( 'header_background_image_repeat', function( value ) {
		value.bind( function( to ) {
			true === to ? $( '.site-header' ).css( 'background-repeat', 'repeat' ) : $( '.site-header' ).css( 'background-repeat', 'no-repeat' );
		} );
	} );

	// Header Background Image Size - Checkbox
	wp.customize( 'header_background_image_size', function( value ) {
		value.bind( function( to ) {
			true === to ? $( '.site-header' ).css( 'background-size', 'cover' ) : $( '.site-header' ).css( 'background-size', 'auto auto' );
		} );
	} );

})( jQuery );

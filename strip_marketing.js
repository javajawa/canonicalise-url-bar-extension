function stripMarketingInfo()
{
	"use strict";

	const canonical_tag = document.querySelector( 'meta[rel="canonical"]' );

	let url;

	if ( canonical_tag )
	{
		url = canonical_tag.getAttribute( 'value' );
	}
	else
	{
		url = window.location.href;
	}

	url = new URL( url );

	[...url.searchParams.keys()].forEach( key => {
		if ( key.startsWith( 'utm_' ) || key.includes( 'clid' ) )
		{
			url.searchParams.delete( key );
		}
	} );

	url = url.toString();

	if ( url === window.location.href )
	{
		return;
	}

	window.history.pushState( null, window.title, url );
}

stripMarketingInfo();

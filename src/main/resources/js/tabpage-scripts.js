

var lastUrl;
var Fenster;


function forwardInternLink( trgurl ){
	window.location.href=trgurl;
}

function forwardInternLinkNewWindow( trgurl ){
	Fenster = window.open( trgurl );
	Fenster.location.href=trgurl;
	Fenster.focus();
}

function forwardInternDocument( trgurl, mimetyp ){
	var downloadDocument;
	downloadDocument=window.document.open( mimetyp );
	downloadDocument.location.href=trgurl;
}

function forwardExternLink( infourl, trgurl ){
 
  lastUrl=trgurl;
  Fenster = window.open( infourl );
  if( Fenster.closed == false ){
    Fenster.location.href=infourl;
    Fenster.focus();

  } 
 
}

function externLinkViaDir( chdir, trgurl ){
	forwardExternLink( chdir+'/'+'nav/externpage.html', trgurl );
}

function externLink( trgurl ){
	externLinkViaDir( '.', trgurl );
}


function moveToUrl(){
	Fenster.location.href=lastUrl;
}
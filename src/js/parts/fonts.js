WebFontConfig = {
	google: { families: [ 'Roboto:300,300i,400,400i,500,500i,700,700i,900,900i' ]}
};
(function() {
	let wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	let s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
var _link_finder = (function(window){
	if (window.$ === undefined){
		document.head.innerHTML += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>';
		setTimeout(function(){
			if (window.$ !== undefined){
				run();
				clearInterval(this);
			}

		}, 100);
	}
	else{
		run();
	}


	function run(){
		$('a').click(function(e){
			e.preventDefault();
			var href = $(this).attr('href');
			if (href && href.length > 0 && href[0] != '#'){
				e.preventDefault();
				var o = {
					href: href,
					loc: window.location.href
				};
				window.location.href = 'https://aqueous-reef-1725.herokuapp.com/link/' + encodeURIComponent(o.loc + '~~' + href);
			}
			else{
				window.location.href = href;
			}
		});
	}
})(window)
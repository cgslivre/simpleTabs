/**
 * jQuery simpleTabs plugin v1.0
 */
(function($){
  $.fn.extend({
		simpleTabs: function(){
			return this.each(function(){
				var el = $(this);
				// Variáveis
				var toolbar = $('>ul', el),
					links = $('a', toolbar),
					tabs = $('.tabs-content .tab', el);
				// Esconde as tabs
				tabs.hide();
				// Ao clicar em uma tab
				links.on('click', function(e){
					e.preventDefault();
					// Esconde a tab
					tabs.hide();
					var s = $(this), 
						link = s.attr('href');
					// Coloca o linka atual no estado ativo
					links.removeClass('active').filter(s).addClass('active');
					// Exibe a tab selecionada
					tabs.filter(link).show();
					return false;
				});
				// Exibe a primeira tab
				links.eq(0).trigger('click');
			});
		}
	});
})(window.jQuery);

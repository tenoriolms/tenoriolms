$( function(){

    $('.seemore_desc_btn').on('click', function () {
        const $btn = $(this);
        const $hidden = $btn.siblings('.textContent');
        $hidden.slideToggle(100);

        // Alterna ícone e texto
        const isExpanded = $btn.data('expanded');
        $btn.data('expanded', !isExpanded);
        $btn.html(`<span class="toggleIcon">${isExpanded ? '▼' : '►'}</span> ${isExpanded ? 'Description' : 'Description'}`);
        $btn.find('.toggleIcon').css('transform', isExpanded ? 'rotate(0deg)' : 'rotate(180deg)');

    });

    $('.seemore_links_btn').on('click', function () {
        const $btn = $(this);
        const $hidden = $btn.siblings('.links');
        $hidden.slideToggle(100);

        // Alterna ícone e texto
        const isExpanded = $btn.data('expanded');
        $btn.data('expanded', !isExpanded);
        $btn.html(`<span class="toggleIcon">${isExpanded ? '▼' : '►'}</span> ${isExpanded ? 'Links' : 'Links'}`);
        $btn.find('.toggleIcon').css('transform', isExpanded ? 'rotate(0deg)' : 'rotate(180deg)');

    });

});


$(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();

    if (scrollTop === 0) {
        // 🔄 Usa o data-bg da primeira .page_section
        const firstBg = $('.page_section').first().data('bg');
        if (firstBg) {
            $('body').css('background-image', firstBg);
        }
        return;
    }

    // 🎯 Se não está no topo, detecta qual seção está visível
    const scrollPos = scrollTop + ($(window).height() / 2);

    $('.page_section').each(function () {
        const sectionTop = $(this).offset().top;
        const sectionBottom = sectionTop + $(this).outerHeight();

        if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
            const bgImage = $(this).data('bg');
        if (bgImage) {
            $('body').css('background-image', bgImage);
        }
        }
    });
});

  // Executa no carregamento inicial
$(document).ready(function () {
    $(window).trigger('scroll');
});


$(document).ready(function () {
    $('.md-footer .md-copyright').html('Last updated <strong>July 2025</strong> - Made with help from <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank" rel="noopener"> Material for MkDocs </a>');
});






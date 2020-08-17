(function(){
    const langBtn = $('.lang-toggle');
    let lang_toggle_open = false;
    
    $(document).click(function(e) {
        const target = $(e.target);

        if (target.is('.modal') || target.closest('a.close').length) {
            $("body").find(".modal").removeClass("open");
        };
    });

    $('#open-modal').click(function(){
        $('.modal').addClass('open');
    })

    $('.open-sidebar').click(function(){
        $('.sidebar-mobile').toggleClass('hide')
    });

    function toggleLangMenu(element) {
        element.find('.options-menu-dropdown').toggleClass('hide');
        element.find('i.fa').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
        lang_toggle_open = !lang_toggle_open;
    };

    $(window).on('click', function(e){
        const target = $(e.target);
        
        // toggle language select pop up
        if (!target.is('.lang-toggle') && !target.parent().is('.lang-toggle') && lang_toggle_open) {
            toggleLangMenu(langBtn);
        } else if ($(e.target).is('.lang-toggle')) {
            toggleLangMenu(langBtn);
        };

        // toggle sidebar on mobile screen size
        if (target.is('.close-sidebar') || target.parent().is('.close-sidebar') || target.is('.backdrop')) {
            $('.sidebar-mobile').toggleClass('hide');
        };
    });

    $('input[name=plan]').on('change', function() {
        $('.card.current').toggleClass('current');
        $(this).parents('.card').toggleClass('current');
    });
})()
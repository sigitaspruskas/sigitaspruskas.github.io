(function(){

    $('#open-modal').click(function(){
        $('.modal').addClass('open');
        $('body').toggleClass('no-scroll');
    })

    $('.open-sidebar').click(function(){
        $('.sidebar-mobile').toggleClass('hide');
        $('body').toggleClass('no-scroll');
    });

    $(window).on('click', function(e){
        const target = $(e.target);

        // toggle modal
        if (target.is('.modal') || target.closest('a.close').length) {
            $('.modal').removeClass('open');
            $('body').toggleClass('no-scroll');
        };
        
        // toggle lang menu
        if (target.is('.lang-toggle') || target.parent().is('.lang-toggle')) {
            $('.options-menu-dropdown').toggleClass('hide');
            $('.lang-toggle').find('i.fa').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
        };

        // close sidebar on mobile screen size
        if (target.parent().is('.close-sidebar') || target.is('.backdrop')) {
            $('.sidebar-mobile').toggleClass('hide');
            $('body').toggleClass('no-scroll');
        };
    });

    $('input[name=plan]').on('change', function() {
        $('.card.current').toggleClass('current');
        $(this).parents('.card').toggleClass('current');
    });
    
})()
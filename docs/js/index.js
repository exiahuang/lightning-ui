$(function () {
    
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    // $("#sidebar").load("sidebar.html");

    // console.log('>>>hello world');
    ui.show_side_bar_menu();
    $('#search-bar').on('input',function(e){
        key = $(this).val();
        ui.show_side_bar_menu(key);
    });
});


var ui = {
    side_bar_menu : [
        {
            title : 'Datatable',
            href  : 'lightning-table.html'
        },
        {
            title : 'Modal',
            href  : 'modal.html'
        },
        {
            title : 'Prompt',
            href  : 'prompt.html'
        },
        {
            title : 'Dropdown',
            href  : 'dropdown.html'
        },
        {
            title : 'ScrollSpy',
            href  : 'ScrollSpy.html'
        },
        {
            title : 'Tab',
            href  : 'tab.html'
        },
        {
            title : 'Tooltip',
            href  : 'tooltip.html'
        },
        {
            title : 'Popover',
            href  : 'popover.html'
        },
        {
            title : 'Alert',
            href  : 'alert.html'
        },
        {
            title : 'Button',
            href  : 'button.html'
        },
        {
            title : 'Collapse',
            href  : 'collapse.html'
        },
        {
            title : 'Carousel',
            href  : 'carousel.html'
        }
    ],
    show_side_bar_menu : function(search_key){
        console.log(search_key);
        let html = '';
        for (let i = 0; i < ui.side_bar_menu.length; i++) {
            let element = ui.side_bar_menu[i];
            if(search_key && element.title.indexOf(search_key) == -1){
                continue;
            }
            html += '<li class="slds-nav-vertical__item"><a href="' + element.href + '" class="slds-nav-vertical__action" aria-describedby="entity-header">' + element.title + '</a></li>';
        }
        $('#side-bar-menu').html(html);
    }
};
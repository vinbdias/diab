class StickyNavigation {

    constructor() {

        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 0;
        let self = this;
        $(document).on('click', '.et-hero-tab',  function() { 
            self.onTabClick(event, $(this)); 
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }
    
    onTabClick(event, element) {

        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }
    
    onScroll() {

        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }
    
    onResize() {

        if(this.currentId)
            this.setSliderCss();        
    }
}
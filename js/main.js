(function(){

    "use strict";
    
    // constant
    var LINK_ACTIVE_CLASS = 'active';
    var LINK_INACTIVE_CLASS = '';
    var PAGE_ACTIVE_CLASS = 'page active';
    var PAGE_INACTIVE_CLASS = 'page';
    var HEADER_CLASS = 'header';
    var SHRINK_HEADER_CLASS = 'header shrink';
    var PREFIX_PAGE = 'page-';
    var HEADER_HEIGHT = 150; //px
    // flag
    var headerHasShrink = false;

    // cache elements
    var navLink = document.querySelectorAll('#nav .nav-link');
    var navLinkA = document.querySelectorAll('#nav .nav-link a');
    var pages = document.querySelectorAll('#content .page');
    var header = document.getElementById('header');

    

    // functions
    var resetNavLinks = function() {
        for(var i = 0; i < navLinkA.length; i++) {
            navLinkA[i].className = LINK_INACTIVE_CLASS;
        }
    };

    var setNavLinkActive = function(navLinkId) {
        document.getElementById(navLinkId).className = LINK_ACTIVE_CLASS;
    };

    var hideAllPages = function() {
        for(var i = 0; i < pages.length; i++) {
            pages[i].className = PAGE_INACTIVE_CLASS;
        }
    };

    var revealPage = function(pageId) {
        var id = PREFIX_PAGE + pageId;
        console.log(id);
        document.getElementById(id).className = PAGE_ACTIVE_CLASS;
    };

    var handleLinkClick = function(id){
        resetNavLinks();
        hideAllPages();
        setNavLinkActive(id);
        revealPage(id)
    };

    var shrinkHeader = function(){
        header.className = SHRINK_HEADER_CLASS;
    }

    var resetHeader = function(){
        header.className = HEADER_CLASS;
    }

    // register events
    for(var i = 0; i< navLink.length; i++) {
        navLink[i].addEventListener('click', function(e){
            if (e.target.id) {
                handleLinkClick(e.target.id);
            }
        });
    }

    window.addEventListener('scroll', function(){
       if (window.scrollY > HEADER_HEIGHT) {
            if (headerHasShrink) return;
            shrinkHeader();
            headerHasShrink = true;
        } else {
            if (!headerHasShrink) return;
            resetHeader();
            headerHasShrink = false;
        }
    });

})();
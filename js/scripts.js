//  Preloader Function
function showLoader(){
    document.getElementById("preloader").style.display = "block";
    document.getElementById("main-wrapper").style.display = "none";
}

function hideLoader(){
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main-wrapper").style.display = "block";
}

const base_url = "https://api.royalexecutive.com/v1/m/";

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function removeSession() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("login_time");
    localStorage.removeItem("fullname");
    localStorage.removeItem("email");
}

function checkSessionValid() {
    var timeNow = Math.round((new Date()).getTime() / 1000);

    var SyncTimePlusthirtyMin = 0;
    var syncTime = localStorage.getItem("login_time");
    var userid = localStorage.getItem("user_id");
    var fullname = localStorage.getItem("fullname");
    var email = localStorage.getItem("email");

    if(syncTime == null || userid == null || fullname == null || email == null)
    {
        removeSession();
        return false;
    }

    SyncTimePlusthirtyMin = parseInt(syncTime) + 1800;

    if (timeNow > SyncTimePlusthirtyMin) {
        removeSession();
        return false;
    } else {
        return true;
    }
}

function getUserFromSession () {
    var isValid = checkSessionValid();

    if(!isValid)
    {
        window.location.href = "/signin.php";
    } else {
        return localStorage.getItem("user_id");
    }
}

function getUserNameFromSession () {
    var isValid = checkSessionValid();

    if(!isValid)
    {
        window.location.href = "/signin.php";
    } else {
        return localStorage.getItem("fullname");
    }
}

function getUserEmailFromSession () {
    var isValid = checkSessionValid();

    if(!isValid)
    {
        window.location.href = "/signin.php";
    } else {
        return localStorage.getItem("email");
    }
}

(function ($) {
    "use strict";

    //to keep the current page active
    $(function () {
        for (
            var nk = window.location,
                o = $(".settings-menu a, .menu a")
                    .filter(function () {
                        return this.href == nk;
                    })
                    .addClass("active")
                    .parent()
                    .addClass("active");
            ;

        ) {
            // console.log(o)
            if (!o.is("li")) break;
            o = o.parent().addClass("show").parent().addClass("active");
        }
    });

    // Transaction history hove active
    $(".invoice-content").on("mouseover", "li", function () {
        $(".invoice-content li.active").removeClass("active");
        $(this).addClass("active");
    });

    // Balance Details widget of Home page
    $(".balance-stats").on("mouseover", function () {
        $(".balance-stats.active").removeClass("active");
        $(this).addClass("active");
    });

    //Bills widget of balance page
    $(".bills-widget-content").on("mouseover", function () {
        $(".bills-widget-content.active").removeClass("active");
        $(this).addClass("active");
    });

    $('.content-body').css({ 'min-height': (($(window).height())) + 50 +'px' });
})(jQuery);


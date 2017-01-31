function events() {
    var obj = $("#li-1");
    obj.html('<div class="grid"><div class="intro"><h1>Events</h1></div></div>');
    var str = "";
    for (i = num; i > 0; i--) str += '<div id="it-' + i + '" class="item"><h5>' + eval("date" + i) + '</h5><span id="di-' + i + '" class="divide"></span><p class="text-bt">' + eval("title" + i) + "</p></div>";
    obj.find(".grid").append(str), obj.show(0, function () {
        $(this).addClass("show-page")
    }), obj.on("click", ".item", function () {
        closeModal();
        var i = parseInt($(this).attr("id").replace(/[^0-9]/g, ""));
        focus.html('<div class="item-wrapper"><div class="item-content"><h1>' + eval("title" + i) + '</h1><h5 class="set"><span class="half">Date<br><span id="it-c-date">' + eval("date" + i) + '</span></span><span class="half">Time<br><span id="it-c-time">' + eval("time" + i) + '</span></span></h5><h5 class="set"><span class="full">Place<br><span id="it-c-place">' + eval("place" + i) + '</span></span></h5><br><p class="body">' + eval("body" + i) + "</p></div></div>")
    })
}

function news() {
    var obj = $("#li-2");
    obj.html('<div class="grid"><div class="intro"><h1>News</h1></div></div>');
    var str = "";
    for (i = numNews; i > 0; i--) str += '<div id="itn-' + i + '" class="item"><h5>' + eval("newsDate" + i) + '</h5><span id="din-' + i + '" class="divide"></span><p class="text-bt">' + eval("newsTitle" + i) + "</p></div>";
    obj.find(".grid").append(str), obj.show(0, function () {
        $(this).addClass("show-page")
    }), obj.on("click", ".item", function () {
        closeModal();
        var i = parseInt($(this).attr("id").replace(/[^0-9]/g, ""));
        focus.html('<div class="item-wrapper"><div class="item-content"><h1>' + eval("newsTitle" + i) + '</h1><h5 class="set"><span class="half">Date<br><span id="it-c-date">' + eval("date" + i) + '</span></span></h5><br><p class="body">' + eval("newsBody" + i) + "</p></div></div>")
    })
}

function topics() {
    $("#li-3").show(0, function () {
        $(this).addClass("show-page")
    })
}

function about() {
    $("#li-4").show(0, function () {
        $(this).addClass("show-page")
    })
}
function sponsors(){
    $("#li-6").show(0, function () {
        $(this).addClass("show-page")              
    })
}
function clearLogo() {
    $(window).scrollTop(0), sc.find(".page").hide(0, function () {
        $(this).removeClass("show-page")
    }), setTimeout(function () {
        hero.show(0, function () {
            $(this).removeClass("hero-hide")
        }), content.show(0, function () {
            $(this).addClass("content-active")
        })
    }, 10), line.removeClass("link-active"), liA.removeClass("current")
}

function clearHome() {
    $(window).scrollTop(0), setTimeout(function () {
        gallery.hasClass("gallery-show") && (sc.find(".page").hide(0, function () {
            $(this).removeClass("show-page")
        }), hero.show(0, function () {
            $(this).removeClass("hero-hide")
        }), content.show(0, function () {
            $(this).addClass("content-active")
        }), gallery.removeClass("gallery-show"))
    }, 10), line.removeClass("link-active"), liA.removeClass("current")
}

function clearCurrent(e) {
    $(window).scrollTop(0), $(".line:not(#l-" + e + "), .line:not(#ml-" + e + ")").removeClass("link-active"), $("li a:not(#a-" + e + "), li a:not(#ma-" + e + ")").removeClass("current"), $("#list li#l-" + e + " .line, #m-list li#ml-" + e + " .line").addClass("link-active"), $("#a-" + e).addClass("current"), $("#ma-" + e).addClass("current"), $(".page:not(#li-" + e + ")").hide(0, function () {
        $(this).removeClass("show-page")
    }), hero.addClass("hero-hide"), content.removeClass("content-active"), gallery.removeClass("gallery-show"), setTimeout(function () {
        hero.hide(), content.hide()
    }, 650)
}

function galleryImage(e) {
    gallery.on("click", ".btn", function (s) {
        $(this).is("#left") ? (e--, 1 > e && (s.preventDefault(), e = 1)) : $(this).is("#right") && (e++, e > numGallery && (s.preventDefault(), e = numGallery)), gal.attr("src", "img/gallery/" + e + ".jpg")
    })
}

function galleryShow() {
    $("#list li#l-5").find(".line").add("#m-list li#ml-5").find(".line").addClass("link-active"), $("#a-5,#ma-5").addClass("current"), closeModal(), gallery.show(0, function () {
        $(this).addClass("gallery-show")
    }), count = 1, gal.attr("src", "img/gallery/" + count + ".jpg"), galleryImage(count), gallery.hasClass("gallery-show") && close.add(overlay).on("click", function () {
        count = 1, window.location.hash = "", setTimeout(function () {
            clearHome(), line.removeClass("link-active"), liA.removeClass("current"), closeModalAlt()
        }, 650)
    })
}

function mobileMenu() {
    body.toggleClass("noscroll"), menuMobile.toggleClass("menu-toggle"), mMobile.show(0, function () {
        $(this).toggleClass("menu-show")
    })
}

function resetMenu() {
    body.removeClass("noscroll"), menuMobile.removeClass("menu-toggle"), mMobile.hide(0, function () {
        $(this).removeClass("menu-show")
    })
}

function closeModal() {
    overlay.show(), body.addClass("noscroll"), grid.addClass("grid-scroll"), full.addClass("resize"), gallery.hide(), setTimeout(function () {
        focus.find(".item-wrapper").addClass("content-show"), close.show(0, function () {
            $(this).addClass("close-show")
        })
    }, 10)
}

function closeModalAlt() {
    overlay.hide(), body.removeClass("noscroll"), grid.removeClass("grid-scroll"), full.removeClass("resize"), focus.find(".item-wrapper").add(close).add(gallery).hide(), setTimeout(function () {
        close.removeClass("close-show")
    }, 10)
}

function showTime() {
    var date = new Date,
        DD = date.getDate(),
        nextDate = eval("date" + num),
        CC = nextDate.substring(2, nextDate.length - 3),
        nextEvent = nextDate.substring(0, nextDate.length - 5).replace(/\./g, ""),
        MM = date.getMonth() + 1,
        currentDate = "" + MM + DD,
        diff = CC - DD,
        upcoming = $("#upcoming");
    if (MM == nextEvent) {
        nextEv.html('<div class="next-event"><h5>' + eval("date" + num) + " — </h5><p>" + eval("title" + num) + "</p></div>");
        var dt = $("#time-left");
        0 === diff ? dt.html("today") : 1 === diff ? dt.html("in " + diff + " day") : 0 > diff ? upcoming.html("<h5>No Upcoming Events</h5>") : dt.html(" in " + diff + " days")
    } else upcoming.html("<h5>No Upcoming Events</h5>");
    var nextE = nextDate.substring(0, nextDate.length - 3).replace(/\./g, "");
    nextE >= currentDate && $("#it-" + num).css("border", "2px solid #FFCC00").find("h5").css("color", "#FFCC00")
}

function navigation() {
    $("#logo-con").on("click", "a", function (e) {
        e.preventDefault(), window.location.hash = "", clearLogo(), resetMenu()
    }), list.add(mlist).find("li").on("click", "a", function (e) {
        e.preventDefault();
        var s = $(this).attr("id").split("-")[1],
            a = new Array;
        switch (a[1] = "events", a[2] = "news", a[3] = "topics", a[4] = "about", a[5] = "gallery", a[6] = "sponsors", window.location.hash = a[s], clearCurrent(s), s) {
        case "1":
            events();
            break;
        case "2":
            news();
            break;
        case "3":
            topics();
            break;
        case "4":
            about();
            break;
        case "5":
            galleryShow();
            break;
        case "6":
            sponsors();
            break;
        default:
            clearLogo()
        }
        resetMenu()
    });
    var e = window.location.hash;
    switch (e) {
    case "#events":
        clearCurrent(1), events();
        break;
    case "#news":
        clearCurrent(2), news();
        break;
    case "#topics":
        clearCurrent(3), topics();
        break;
    case "#about":
        clearCurrent(4), about();
        break;
    case "#gallery":
        clearCurrent(5), galleryShow();
        break;
    case "#sponsors":
        clearCurrent(6), sponsors();
        break;
    default:
        clearLogo()
    }
}

function WidthChange(e) {
    e.matches && resetMenu()
}

function supportsSvg() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0")
}
var content = $("#content"),
    hero = content.find(".hero"),
    list = $("#list"),
    mlist = $("#m-list"),
    line = list.add(mlist).find(".line"),
    liA = list.add(mlist).find("li a"),
    sc = $("#sc"),
    body = $("body"),
    menuMobile = $("#menu"),
    mMobile = $("#m-mobile"),
    overlay = $("#overlay"),
    grid = $(".grid"),
    full = $("header,main,footer,#banner,nav"),
    gallery = $("#gallery"),
    gal = gallery.find(".gallery"),
    close = $("#close"),
    focus = $("#focus"),
    nextEv = $("#next-event");
mlist.add(list).on("mouseenter", "li", function () {
    var e = $(this).attr("id");
    $("#" + e).find(".line").addClass("line-active")
}).on("mouseleave", "li", function () {
    var e = $(this).attr("id");
    $("#" + e).find(".line").removeClass("line-active")
}), nextEv.on("click", ".next-event", function () {
    focus.html('<div class="item-wrapper"><div class="item-content"><h1>' + eval("title" + num) + '</h1><h5 class="set"><span class="half">Date<br><span id="it-c-date">' + eval("date" + num) + '</span></span><span class="half">Time<br><span id="it-c-time">' + eval("time" + num) + '</span></span></h5><h5 class="set"><span class="full">Place<br><span id="it-c-place">' + eval("place" + num) + '</span></span></h5><br><p class="body">' + eval("body" + num) + "</p></div></div>"), closeModal()
}), close.add(overlay).on("click", function () {
    closeModalAlt()
});
var $d = $(document);
if ($d.on("click", "#menu", function () {
        mobileMenu(), $d.on("click", ".menu-toggle", function () {
            resetMenu()
        })
    }), $(function () {
        navigation(), showTime()
    }), matchMedia) {
    var mq = window.matchMedia("(min-width: 760px)");
    mq.addListener(WidthChange), WidthChange(mq)
}
1 != supportsSvg() && $("#logo").find("img").attr("src", "img/logo-usc-siggraph.png").css("max-width", "100%");

/* ウィンドウロードおよびリサイズ時、画層サイズを再計算する*/
$(function() {
	$(window).on("load resize",function(){
		$(".top-img-thumb-src").each( function(){
        var iw, ih;
        var cw = $(this).closest("p").width();    /*トリミング後の横幅*/
        var ch = $(this).closest("p").height();    /*トリミング後の縦幅*/
        iw = ($(this).width() - cw) / 2;
        ih = ($(this).height() - ch) / 2;
        $(this).css("top", "-"+ih+"px");
        $(this).css("left", "-"+iw+"px");
		});
		$(".card-img-thumb-src").each( function(){
        var iw, ih;
        var cw = $(this).closest("p").width();    /*トリミング後の横幅*/
        var ch = $(this).closest("p").height();    /*トリミング後の縦幅*/
        iw = ($(this).width() - cw) / 2;
        ih = ($(this).height() - ch) / 2;
        $(this).css("top", "-"+ih+"px");
        $(this).css("left", "-"+iw+"px");
		});
		$(".card-xs-img-thumb-src").each( function(){
        var iw, ih;
        var cw = $(this).closest("p").width();    /*トリミング後の横幅*/
        var ch = $(this).closest("p").height();    /*トリミング後の縦幅*/
        iw = ($(this).width() - cw) / 2;
        ih = ($(this).height() - ch) / 2;
        $(this).css("top", "-"+ih+"px");
        $(this).css("left", "-"+iw+"px");
		});
    });
});


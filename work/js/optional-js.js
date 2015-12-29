/* ウィンドウロードおよびリサイズ時、画像をトリミングする*/
$(function() {
	$(window).on("load resize",function(){
		$(".thumb-src").each( function(){
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


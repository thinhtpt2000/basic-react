$(document).ready(function() {
    let listBtn = $(":button");
    let maxWidth = 0;
    listBtn.each(function(){
        if (maxWidth < $(this).outerWidth()) {
            maxWidth = $(this).outerWidth();
        }
    });

    maxWidth = Math.round(maxWidth + 5);

    let style = document.createElement('style');
    $(style).append(`button {
        width: ${maxWidth}px
    }`);
    $("head")[0].append(style); 
});
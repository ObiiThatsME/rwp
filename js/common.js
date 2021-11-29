
$(document).ready(function(){
    afterResizing();
    appearControl('click', all_menu, menu_board, 'open');
});

$(window).resize(function(){
    clearTimeout(windowResizeCallback);
    windowResizeCallback = setTimeout(afterResizing, 120);
});

// 변수 선언
let windowResizeCallback;
        
const $gnb_li = $('.gnb>li');
const $snb = $('.snb>ul');
const $all_menu = $('#all_menu');
const $menu_board = $('#menu_board');

// 함수 선언


function afterResizing(){
    
    var windowWidth = $(window).width();
    if(windowWidth <= 790){
        console.log('mobile');
        $gnb_li.off('mouseenter',snbControl);
        $gnb_li.on('click',snbControl);
    } else{
        console.log('pc');
        $gnb_li.off('click',snbControl);
        $gnb_li.on('mouseenter',snbControl)
    }
}   
        
function snbControl(){
    $gnb_li.removeClass('on');
    $(this).addClass('on');
    $snb.removeClass('on');
    $($(this).children('a').attr('href')).addClass('on');
}        
    
function appearControl(event, el1, el2, class_name){
    $(el1).on(event,function(){
        if($(this).hasClass(class_name)){
            $(this).removeClass(class_name);
            $(el2).removeClass(class_name);
        } else{
            $(this).addClass(class_name);
            $(el2).addClass(class_name);
        }
    });
}
    

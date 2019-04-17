$(document).ready(function(){
    
    //메뉴 표시+숨김
    $('.all_menu').click(function(){
        $('.menu_wrap').stop().animate({'left':'0'},'normal');
    });
    $('.hover img').click(function(){
        //$('.menu_wrap').stop().animate({'left':'-100%'},'normal');
        $('.menu_wrap').stop().animate({'left':'-100%'},'normal');
    
    });
    
    //소메뉴 표시+숨김
    $(".s_menu").hide();
    $(".menu1").click(function() {
        $('.s_menu', this).slideToggle(500);	
    });

    $(".de_txt").hide();
    $(".de_txt").fadeIn(2000); 

    $(".ba_1, .ba_2, .ba_3").hide();
    $(".ba_1").fadeIn(2000);
    $(".ba_2").fadeIn(3000);
    $(".ba_3").fadeIn(3500);
    
    
//    $('#de_detail p:not(:first)').hide();
    $('.de_arrow').click(function(){
        // 첫번째 보여줄 이미지를 변수에 저장
        var showImg1 = $('#de_detail img:eq(0)');
        // 두번째 보여줄 이미지를 변수에 저장
        var nextImg1 = $('#de_detail img:eq(1)');
        nextImg1.addClass('selected'); // 두번째 이미지에 클래스 추가하여 z-index 변경
        nextImg1.css('opacity','0').animate({opacity : 1}, 1000, function(){ // 두번째 이미지의 opacity를 0~1로 애니메이션 설정하고 첫번째 이미지를 맨뒤로 보낸 후 클래스 삭제
            showImg1.appendTo('#de_detail').removeClass('selected');
        });

    });

});
    
    
    
               
        

            

        
        

   
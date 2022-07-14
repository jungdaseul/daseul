$(function(){
    //데스크탑 애니메이션
    var laptopsInner = document.querySelectorAll('div.laptop-inner');

    for (const laptopInner of laptopsInner) {
    laptopInner.addEventListener('mouseover', (e) => {
        var imageHeight = e.target.offsetHeight;
        var laptopHeight = e.currentTarget.offsetHeight;
        var scrollHeight = imageHeight-laptopHeight;
        console.log(`${imageHeight} | ${laptopHeight} | ${scrollHeight}`);  
        e.target.style.transform = "translate3d(0, -"+scrollHeight+"px, 0)";
    });
    laptopInner.addEventListener('mouseout', (e) => {
        e.target.style.transform = "translate3d(0, 0, 0)";
    });
    }

    //swiper
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    //top버튼을 클릭하면 body문서의 맨 위로 이동
    $('.top').click(function(){
      $('html,body').animate({
          scrollTop:0
      });
    });   

    $(window).on('scroll',function(){
      if($(window).scrollTop()){
          $('header').addClass('active');
      }else{
          $('header').removeClass('active');
      }
  });

    //diary 탭메뉴
    $(".tab_list").hide();
    $(".tab_list:first").show();
    $(".b1").click(function(){
        $(".tab_list").hide();
        $(".t1").show();
        $(".tab_title ul li a").removeClass("active");
        $(".b1 a").addClass("active");                                                             
    });
    $(".b2").click(function(){
        $(".tab_list").hide();
        $(".t2").show();
        $(".tab_title ul li a").removeClass("active");
        $(".b2 a").addClass("active");                
        
    });
    $(".b3").click(function(){
        $(".tab_list").hide();
        $(".t3").show();
        $(".tab_title ul li a").removeClass("active");
        $(".b3 a").addClass("active");                
    });
    $(".b4").click(function(){
        $(".tab_list").hide();
        $(".t4").show();
        $(".tab_title ul li a").removeClass("active");
        $(".b4 a").addClass("active");                
    });
    $(".b5").click(function(){
        $(".tab_list").hide();
        $(".t5").show();
        $(".tab_title ul li a").removeClass("active");
        $(".b5 a").addClass("active");                   
    });                                  
        $(".b6").click(function(){
        $(".tab_list").hide();
        $(".t6").show();
        $(".tab_title ul li a").removeClass("active");
        $(".b6 a").addClass("active");                   
    });  
    
    //a태그 속성 제거하기
    $('a').on("click",function(e){
        e.preventDefault();
    });

    $("#sub").attr("onclick","").unbind("click");
    $(".logo > a").attr("onclick","").unbind("click");


    //메뉴(GNB)를 클릭하면 해당 section으로 부드럽게 이동
    $('nav ul li a').click(function(){
        var $anchor=$(this);
        $('html, body').stop().animate({
            scrollTop:$($anchor.attr('href')).offset().top
        },1000);
    });

    //web 탭메뉴
    $(".tab_list2").hide();
    //첫번째 .tab_list만 보임
    //$(".tab_list:first-child").show(); 이렇게 써도됨
    //$(".t1").show(); 이렇게 써도됨
    $(".tab_list2:first").show();
    //.tab_title의 .b1에 클릭 이벤트 설정
    $(".c1").click(function(){
        //모든 탭내용 안보임
        $(".tab_list2").hide();
        //첫번째 탭내용만 보임
        $(".l1").show();
        //모든 제목(.tab_title ul li)에서 active제거
        $(".tab_title2 ul li a").removeClass("active");
        //첫번째 제목(.b1)에만 active 설정
        //active에 .을 안찍는 이유는 앞에 Class라고 되어있기 때문에
        $(".c1 a").addClass("active");                                                             
    });
    //.tab_title의 .b2에 클릭 이벤트 설정
    $(".c2").click(function(){
        //모든 탭내용 안보임
        $(".tab_list2").hide();
        //첫번째 탭내용만 보임
        $(".l2").show();
        $(".tab_title2 ul li a").removeClass("active");
        //두번째 제목(.b2)에만 active 설정
        $(".c2 a").addClass("active");                
        
    });
    //.tab_title의 .b3에 클릭 이벤트 설정
    $(".c3").click(function(){
        //모든 탭내용 안보임
        $(".tab_list2").hide();
        //첫번째 탭내용만 보임
        $(".l3").show();
        $(".tab_title2 ul li a").removeClass("active");
        //세번째 제목(.b3)에만 active 설정
        $(".c3 a").addClass("active");                
    });

    //햄버거 메뉴 버튼  
    $('.menu_icon').click(function(){        
        $('.gnb').animate({
            right:0
        }); 
    });
    $('.close_icon').click(function(){
        $('.gnb').animate({
            right:'-100%'
        });
    });
});
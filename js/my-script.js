
	
$('[data-fancybox="gallery"]').fancybox({
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'download',
    'close'
  ],
  hideOnOverlayClick: true,
  hideOnContentClick:true,
  enableEscapeButton:true,
  loop: true,
  gutter : 10,
  keyboard: true,
  arrows: true,
  infobar: true,
  smallBtn: true,
  toolbar: false,
  protect: true,
  modal: true,
  idleTime: 3,
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionEffect: "rotate",
  transitionDuration: 400,
  slideClass: "myClass",
  baseClass: "myclass",
   slideShow: {
    autoStart: true,
    speed: 1000
  },
 youtube : {
  controls : 0,
  showinfo : 0
 },
  thumbs : {
    autoStart : true
  }
});


	
$(document).ready(function() {
  $("[data-fancybox]").fancybox({
     protect: true, // пользователь не может сохранить изображение 
     toolbar  : true, // убрали панель инструментов
     hideOnOverlayClick: true,
  hideOnContentClick:true,
  enableEscapeButton:true,
  });
});

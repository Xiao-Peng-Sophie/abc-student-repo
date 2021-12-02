
window.onscroll = function () { window.scrollTo(0, 0); };
jQuery(function ($) {

  //keyup
  let d=0;

let rightPressed=false;
let leftPressed=false;
let upPressed=false;
let downPressed=false;



let stepX=200;
let stepY=200;

//key


	start(name);

	function start(name) {

document.addEventListener("keydown", keyDown);
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var cl = 'rgb('+r+','+g+','+b+')';


		var pos = document.getElementById('zone').getBoundingClientRect();



		var pl = {
			id : 0,
			name : name,
			cl : cl,
			x : stepX,
			y : stepY
		};

		var ball = '';

    let socket = io();

		socket.on('connect', function () {
				socket.emit('client_connected', pl);
		});

		socket.on('id_ball', function (id) {
				pl.id = id;
		});
		// List of all connected players' hash
		socket.on('get_all_balls', function (tab_pl) {
				$('#zone').html('');
				var i = 0;
				var bl;
				pos = document.getElementById('zone').getBoundingClientRect();
				while (i < tab_pl.length)
			{
					bl = tab_pl[i];
					//ball = '<div id="'+bl.id+'" class="ball" style="background-color:'+bl.cl+';left:'+(pos.left + bl.x)+'px;top:'+(pos.top + bl.y)+'px;"></div>';
          ball = '<div id="'+bl.id+'" class="ball" style="background-color:white;left:'+(pos.left + bl.x)+'px;top:'+(pos.top + bl.y)+'px;"></div>';

console.log("blone",bl)
					$('#zone').append(ball);
					i++;
			}
		});

		socket.on('new_ball', function (data) {
			pos = $('#zone').position();
			//ball = '<div id="'+data.id+'" class="ball" style="background-color:'+data.cl+';left:'+(pos.left + data.x)+'px;top:'+(pos.top + data.y)+'px;"></div>';
      ball = '<div id="'+data.id+'" class="ball" style="background-color:white;left:'+(pos.left + data.x)+'px;top:'+(pos.top + data.y)+'px;"></div>';

console.log("dataid",data)
      //ball.style.zIndex = "-1";
			$('#zone').append(ball);
		});

		socket.on('move_the_ball', function (data) {

			 var duration = Math.round($('#duration').val());
			 pos = $('#zone').position();
			 $('#'+data.id).animate({
			'left' : pos.left + data.x,
			'top' : pos.top + data.y
		}, 200);
    console.log("!!!!!");
    console.log(data.x,data.y);

		});




		function move_ball(x, y)
		{
			var duration = Math.round($('#duration').val());

			// pos = $('#zone').position();

			// pl.x = x - pos.left;
			// pl.y = y - pos.top;
      pl.x = x
			pl.y = y;
      console.log(pos.left,pos.top)
			socket.emit('move_ball', pl);
			console.log(pl.x,pl.y)
			$('#'+pl.id).animate({
		 'left' : x,
			'top' : y
    }, 200);

		}


    function keyDown(e){
      if(e.key == "Right" || e.key == "ArrowRight"){
      //  if(stepX>0&& stepX<screen.width){
          stepX+=50;
        //}
        // if(stepX<0){
        //   stepX=0;
        // }
        // if(stepX>screen.width){
        //   stepX=screen.width;
        // }
         move_ball(stepX, stepY)

       }
       else if(e.key == "Left" || e.key == "ArrowLeft"){
         //if(stepX>0&& stepX<screen.width){
  stepX-=50;
//}
   move_ball(stepX, stepY)


}
else if(e.key == "Up" || e.key == "ArrowUp"){
  //if(stepY>0&& stepY<screen.height){
  stepY-=50;
//}
   move_ball(stepX, stepY)
}
else if(e.key == "Down" || e.key == "ArrowDown"){
  //box.style.transform = "translateY("+stepY+"px)";
  //if(stepY>0&& stepY<screen.height){

  stepY+=50;
//}
   move_ball(stepX, stepY)

}
     }





	}
});

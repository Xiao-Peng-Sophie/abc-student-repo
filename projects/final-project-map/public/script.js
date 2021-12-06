window.onscroll = function () { window.scrollTo(0, 0); };
let ring=document.getElementById("ring");


jQuery(function ($) {


	let d;

	let rightPressed = false;
	let leftPressed = false;
	let upPressed = false;
	let downPressed = false;



	let stepX = Math.random() * 1000;
	let stepY = Math.random()*500;

 	// let ballX=Math.random()*1000;
	// let ballY=Math.random()*500;



	start(name);

	function start(name) {

		document.addEventListener("keydown", keyDown);
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var cl = 'rgb(255,255,255)';


		var pos = document.getElementById('zone').getBoundingClientRect();



		var pl = {
			id: 0,
			name: name,
			cl: cl,
			x: stepX,
			y: stepY
		};

		var ball = '';

		let socket = io();

		socket.on('connect', function () {
			socket.emit('client_connected', pl);
		});

		socket.on('id_ball', function (id) {
			pl.id = id;

		});

		socket.on('get_all_balls', function (tab_pl) {
			$('#zone').html('');
			var i = 0;
			var bl;


			pos = document.getElementById('zone').getBoundingClientRect();

			while (i < tab_pl.length) {
				bl = tab_pl[i];
				ball = '<div id="' + bl.id + '" class="ball" style="left:' + bl.x+ 'px;top:' +  bl.y+'px;display:block"></div>';

				// console.log(bl)
				$('#zone').append(ball);
				socket.on('id_ball', function (id) {
					pl.id = id;
					if (bl.id == pl.id) {
						$('#' + bl.id).css("display", "none");
					}
				});

				i++;

			}

			let peopleimg;
			peopleimg = '<div class="peopleimg" style="left:200px;top:200px;"><img src = "wholepage.png" width="3000px "/></div>';

			$('#zone').append(peopleimg);
		});

		socket.on('new_ball', function (data) {
			pos = $('#zone').position();
			let ball = '<div id="' + data.id + '" class="ball" style="background-color:' + data.cl + ';left:' +data.x + 'px;top:' +data.y+ 'px; display:block;"></div>';
			$('#zone').append(ball);
		});



		socket.on('move_the_ball', function (data) {

			$('#' + data.id).animate({
				'left': data.x,
				'top': data.y
			}, 200);

			let temp_d=(data.x-stepX)**2+(data.y-stepY)**2;
            d=Math.sqrt(temp_d);
	        console.log(d);


			let k=50/d;
			if(k>0 && k<1){
			ring.volume=50/d;

		   }
		   else if (k<=0){
			 ring.volume=0;

		   }
		   else if(k>=1){
			ring.volume=1;

		}

			function move_div(x, y)
			{



				pl.x = x
				pl.y = y;
				socket.emit('move_div', pl);

				// console.log(x, y)


				$('#'+pl.id).animate({
			 'left' : x,
				'top' : y
		}, 500);

			}





		});




		function move_div(x, y) {

			pl.x = x
			pl.y = y;

			//pl is me
			socket.emit('move_ball', pl);


			$('#zone').animate({
				'left': 300-x,
				'top': 300-y
			}, 200);

		}


		function keyDown(e) {
			if (e.key == "Right" || e.key == "ArrowRight") {
				stepX += 50;
				move_div(stepX, stepY)

			}
			else if (e.key == "Left" || e.key == "ArrowLeft") {
				stepX -= 50;
				move_div(stepX, stepY)


			}
			else if (e.key == "Up" || e.key == "ArrowUp") {
				stepY -= 50;
				move_div(stepX, stepY)
			}
			else if (e.key == "Down" || e.key == "ArrowDown") {
				stepY += 50;
				move_div(stepX, stepY)

			}
		}






	}
});

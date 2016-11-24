$(document).ready(function(){
	var random = true;
	var widthOfGrid = 30;
	var widthOfSquare = 480/widthOfGrid;
	var removeGrid = false;
	
	var squareRow = '<div class="square-row"></div>';
	var square = '<div class="square"></div>';
	
	var colourSquare = function(){
		$('.square').on('mouseover', function(){
			var $this = $(this);
			if(random === true){
				var finalColour = '';
				if($this.css('background-color') == 'rgb(255, 255, 255)'){
					var colour1 = Math.floor(Math.random() * 255);
					var colour2 = Math.floor(Math.random() * 255);
					var colour3 = Math.floor(Math.random() * 255);
					finalColour = 'rgb(' + colour1 + ',' + colour2 + ',' + colour3 + ')';
				}
				else{
					var background = $this.css('background-color');
					var colours = '';
					var finalValues = '';
					for(var i = 0; i < background.length; i++){
						if(background.charAt(i) < 10 && background.charAt(i) >= 0){
							colours += background.charAt(i);
						}
					}
					colours += " ";
					var j = 0;
					var temp = '';
					for(var i = 0; i < colours.length; i++){
						if(colours.charAt(i) === ' '){
							temp = colours.substr(j, i-j);
							j = i + 1;
							finalValues += temp - 20 + ',';
						}
					}
					var final = finalValues.substr(0, finalValues.length - 1);
					finalColour = 'rgb(' + final + ')';
				}
				$this.css('background-color', finalColour);
			}
			else{
				$this.css('background-color', 'red');
			}
		});
	};

	var makeGrid = function(widthOfGrid){
		$('.grid').empty();
		widthOfSquare = 480/widthOfGrid;
		for(var i = 0; i < widthOfGrid; i++){
			$('.grid').append(squareRow);
		}
		$("div.square-row").css("height", widthOfSquare);

		
		for(var i = 0; i < widthOfGrid; i++){
			$('.square-row').append(square);
		}
		$("div.square").css("height", widthOfSquare - 2);
		$("div.square").css("width", widthOfSquare - 2);
		$("div.square").css("border", "1px solid black");
		$('#removeGrid').html('Remove Grid');
		$('#removeGrid').removeClass('removed');

		colourSquare();
	};
	makeGrid(30);
	
	
	$('#removeGrid').on('click', function(){
		if($(this).hasClass('removed')){
			removeGrid = false;
			$(this).html('Remove Grid');
			$(this).removeClass('removed');
			$("div.square").css("height", widthOfSquare - 2);
			$("div.square").css("width", widthOfSquare - 2);
			$("div.square").css("border", "1px solid black");
		}
		else{
			removeGrid = true;
			$(this).html('Reapply Grid');
			$(this).addClass('removed');
			$("div.square").css("border", "none");
			$("div.square").css("height", widthOfSquare);
			$("div.square").css("width", widthOfSquare);
		}
	});

	$('#numOfSquaresButton').on('click', function(){
		var val = $('#numOfSquares').val();
		while(val < 1 || val > 35){
			val = prompt("Please enter number between 1 and 35");
		}
		widthOfGrid =  val;
		$('#numOfSquares').val('');
		makeGrid(widthOfGrid);
	});

	$('#random').on('click', function(){
		if($(this).hasClass('fixed')){
			random = true;
			$(this).html('Fixed Colour');
			$(this).removeClass('fixed');
		}
		else{
			random = false;
			$(this).html('Random Colours');
			$(this).addClass('fixed');
		}
		
	});
	
	colourSquare();	

	$('#reset').on('click', function(){
		$('.square').css('background-color', 'white');
	});
})
$(document).ready(function(){
	var random = true;
	var squareRow = '<div class="square-row"></div>';
	for(var i = 0; i < 16; i++){
		$('.container').append(squareRow);
	}
	var square = '<div class="square"></div>';
	for(var i = 0; i < 16; i++){
		$('.square-row').append(square)
	}


	$('#random').on('click', function(){
		$('.square').css('background-color', 'white');
		if($(this).hasClass('fixed')){
			random = true;
			$(this).html('Fixed Colour');
			$(this).removeClass('fixed');
		}
		else{
			random = false;
			$(this).html('Random Colours!!');
			$(this).addClass('fixed');
		}
		
	});

	$('.square').on('mouseover', function(){
		var $this = $(this);
		if(random === true){
			var finalColour = '';
			if($this.css('background-color') == 'rgb(255, 255, 255)'){
				var colour1 = Math.floor(Math.random() * 255);
				var colour2 = Math.floor(Math.random() * 255);
				var colour3 = Math.floor(Math.random() * 255);
				finalColour = 'rgb(' + colour1 + ',' + colour2 + ',' + colour3 + ')';
				$this.css('background-color', finalColour);
			}
			else{
				var background = $this.css('background-color');
				console.log(background);
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

	$('#reset').on('click', function(){
		$('.square').css('background-color', 'white');
	});
})
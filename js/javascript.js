$(document).ready(function() {
	var x = 0;
	
	/* --- Monster trinken anfangs verstecken --- */
	$("#leer").hide();
	
	/* --- Monster holen --- */
	$('#monster_h').click(function(){
		x = x + 10;
		$("#leer").show();
	});
	
	
	/* --- Monster trinken --- */
	$('#monster_t').click(function(){

		
		var w = 100;
		document.getElementById('pb1').style.width=w+'%';
		document.getElementById('pb2').style.width=w+'%';
		document.getElementById('pb3').style.width=w+'%';
		document.getElementById('pb4').style.width=w+'%';
		$('.skill').text('100%');
		
		$('.upgrade').css({
			'background-image': 'none'
		});
		
		$('#pb1').css({
			'background-color': colors()
		});
		
		$('#pb2').css({
			'background-color': colors()
		});
		
		$('#pb3').css({
			'background-color': colors()
		});
		
		$('#pb4').css({
			'background-color': colors()
		});
		
		x--;
		
		if (x == 0)
		{
			alert("Die Dose ist leider leer :(");
			x = 10;
			document.getElementById('pb1').style.width=0+'%';
			document.getElementById('pb2').style.width=0+'%';
			document.getElementById('pb3').style.width=0+'%';
			document.getElementById('pb4').style.width=0+'%';
			$("#leer").hide();
			$('.skill').text('0%');			
		}
		
		
	});
	
});

//gibt eine von 15 Farben zurück
function colors() {

	auswahl = Math.floor((Math.random() * 15) + 1); 
	var farbe;
	
	switch(auswahl)
	{
		case 1:
			farbe = '#DF01D7';
		break;
		
		case 2:
			farbe = '#74DF00';
		break;
		
		case 3:
			farbe = '#FA5858';
		break;
		
		case 4:
			farbe = '#0B3B0B';
		break;
		
		case 5:
			farbe = '#2E2EFE';
		break;
		
		case 6:
			farbe = '#81F7D8';
		break;
		
		case 7:
			farbe = '#F3F781';
		break;
		
		case 8:
			farbe = '#240B3B';
		break;
		
		case 9:
			farbe = '#F5A9D0';
		break;
			
		case 10:
			farbe = '#F7D358';
		break;
			
		case 11:
			farbe = '#045FB4';
		break;
		
		case 12:
			farbe = '#8A4B08';
		break;
			
		case 13:
			farbe = '#B40431';
		break;	
		
		case 14:
			farbe = '#CEF6D8';
		break;
		
		case 15:
			farbe = '#CEE3F6';
		break;
	}
	return farbe;
}
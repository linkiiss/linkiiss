$(document).ready(function(){
	
	
	
	
	
	
	
	const canvasMytextphoto = document.getElementById('mytextphoto');
	const ctxMytextphoto = canvasMytextphoto.getContext('2d');
	const canvasMytextphoto_WIDTH = canvasMytextphoto.width = 1165;
	const canvasMytextphoto_HEIGHT = canvasMytextphoto.height = 602;
	const mytextphoto = new Image();
	mytextphoto.src = 'iam.png';
	const spriteWidth = 1165;
	const spriteHeight = 602;
	let frameX = 0;
	let gameframe = 0;
	const staggerFrames = 80;
	
	function showmyphoto() { 
		ctxMytextphoto.clearRect(0,0, canvasMytextphoto_WIDTH, canvasMytextphoto_HEIGHT);
		ctxMytextphoto.drawImage(mytextphoto, 0, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
		requestAnimationFrame(showmyphoto);
	}
	
	function animate() { 
		let cycle = 0;
		ctxMytextphoto.clearRect(0,0, canvasMytextphoto_WIDTH, canvasMytextphoto_HEIGHT);
		ctxMytextphoto.drawImage(mytextphoto, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
		if (gameframe % staggerFrames == 0) {
			if (frameX < 4) { frameX++;}
			else { frameX = 0; }
		}
		gameframe++;
		cycle++;
		requestAnimationFrame(animate);
		
	}
	
	animate();
	
	const canvasCoalKitty = document.getElementById('kitty');
	const ctxCoalKitty = canvasCoalKitty.getContext('2d');
	const canvasCoalKitty_WIDTH = canvasCoalKitty.width = 233;
	const canvasCoalKitty_HEIGHT = canvasCoalKitty.height = 300;
	const CoalKittyImage = new Image();
	
	const CoalKittySpriteWidth = 233;
	const CoalKittySpriteHeight = 300;
	let CoalKittyFrameX = 0;
	let CoalKittyGameFrame = 0;
	const CoalKittyStaggerFrames = 20;
	
	function kittySits() { // статический кот
	CoalKittyImage.src = 'kitty.png';
		ctxCoalKitty.drawImage(CoalKittyImage, 0, 0, CoalKittySpriteWidth, CoalKittySpriteHeight, 0, 0, CoalKittySpriteWidth, CoalKittySpriteHeight);
		requestAnimationFrame(kittySits);
	}
	
	function kittyWalks() { // 
		CoalKittyImage.src = 'kitty.png'
		ctxCoalKitty.clearRect(0,0, canvasCoalKitty_WIDTH, canvasCoalKitty_HEIGHT);
		ctxCoalKitty.drawImage(CoalKittyImage, CoalKittyFrameX * CoalKittySpriteWidth, 0, CoalKittySpriteWidth, CoalKittySpriteHeight, 0, 0, CoalKittySpriteWidth, CoalKittySpriteHeight);
		if (CoalKittyGameFrame % CoalKittyStaggerFrames == 0) {
			if (CoalKittyFrameX < 3) { CoalKittyFrameX++;}
			else { CoalKittyFrameX = 0; }
		}
		CoalKittyGameFrame++;
		requestAnimationFrame(kittyWalks)
	} 
	kittyWalks()
	
	$('.header-like-element a').hover(
	function() {
		$(this).css('background-color', '#BE3C3C').css('border-bottom', '2.8rem #BE3C3C solid').css('border-top', '2rem #BE3C3C solid').css('border-radius', '0 0 4px 4px').css('height', '5rem').css('filter', 'drop-shadow(rgb(0, 0, 0, 0.1) 0px 7px)');;
	}, function() {
		$(this).css('background-color', '').css('border', '').css('border-radius', '').css('height', '');;
	})
	
	
	$('.gallery-item-wrapper').hover(
	function() {
		$(this).find('.img-desc').fadeIn('slow');;
	}, function() {
		$(this).find('.img-desc').css('display', 'none');;
	})
})
$(document).ready(function() {
	let imgWraps = $("#jq__gallery ul li");
	let imgs = $("#jq__gallery ul li img");
	imgWraps.css("height",imgWraps.width());

	for (let i = 0;i<imgs.length;i++) {
		if (imgs[i].naturalWidth<imgs[i].naturalHeight) {
			console.log(imgs[i]);
			imgs[i].style.width = "100%";
		} else {
			imgs[i].style.height = "100%";
		}
	}

	$(window).on("resize",()=> {
		imgWraps.css("height",imgWraps.width());
	});
});
# jQuery based image gallery

This gallery automatically resizes according to its parent element.


## Installation

At the the end of the `<head>` tag of your HTML, copy and paste this code:

```
.slideshow {
  width:100%;
  height: 600px;
  position: relative;
  overflow:hidden;
}
.slideshow__image {
  position: absolute;
  height: 100%;
  width: 100%;
  transition: all 0.5s linear;
}
.slideshow__image--one {
  background: url("https://cmxpv89733.i.lithium.com/t5/image/serverpage/image-id/779434i1000F43A5E387397/image-size/large?v=1.0&px=999") no-repeat center;
  background-size: cover;
}
.slideshow__image--two {
  background:url("https://avante.biz/wp-content/uploads/Winter-Wallpaper-Hd/Winter-Wallpaper-Hd-001.jpg") no-repeat center;
  background-size: cover;
  right: -100%;
}
.slideshow__image--three {
  background:url("https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&w=1000&q=80") no-repeat center;
  background-size:cover;
  right: -100%;
}
.slideshow__image--current {
  right: 0px;
}
.slideshow__title {
  position: absolute;
  margin: 50px;
  bottom: 150px;
  font-size: 24px;
}
.slideshow__button {
  position: absolute;
  bottom: 75px;
  margin: 50px;
}
.slideshow__pips {
  position: absolute;
  right: 50px;
  bottom: 50px;
}
.slideshow__pips .pip {
  display: inline-block;
  transition: background 0.2s linear;
  width: 10px;
  height: 10px;
  border: 2px solid white;
  border-radius: 50%;
  margin-right: 20px;
  background: white;
}
.slideshow__pips .pip--current {
  background: transparent;
}

```

Then, at the end of the <body> tag of your HTML file, copy and paste this code:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript">
	const $slideShowImgs = $(".slideshow__image");
	const $pips = $(".pip");

	let slideIndex = 1;

	let slideShowInterval = setInterval(function() {
		changeSlide()
	},5000);

	function changeSlide() {
		if (slideIndex==3) {
			slideIndex = 0;
			$($slideShowImgs[1]).removeClass("slideshow__image--current");
			$($slideShowImgs[2]).removeClass("slideshow__image--current");
			$($pips[2]).removeClass("pip--current");
		}
		$($pips[slideIndex-1]).removeClass("pip--current");
		$($pips[slideIndex]).addClass("pip--current");
		$($slideShowImgs[slideIndex]).addClass("slideshow__image--current");
		slideIndex++;
	}
</script>
```

Finally find wherever you want the gallery in your HTML and copy and paste this code:

```
<div class="slideshow">
	<div class="slideshow__image slideshow__image--one"></div>
	<div class="slideshow__image slideshow__image--two"></div>
	<div class="slideshow__image slideshow__image--three"></div>
	<div class="slideshow__pips">
		<div class="pip pip--current"></div>
		<div class="pip"></div>
		<div class="pip"></div>
	</div>
</div>
```

Example file:
[ENKEL HTML FIL]
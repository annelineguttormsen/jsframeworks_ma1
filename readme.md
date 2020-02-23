# JQUERY BASED IMAGE GALLERY

This gallery automatically resizes according to its parent element.
All images are put in squares in a grid. The grid automatically adjusts
images per row based on width of the gallery.


**Installation**
At the start of the <head> tag of your HTML file, copy and paste this code:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
	let imgWraps = $("#jq__gallery ul li");
	imgWraps.css("height",imgWraps.width());

	$(window).on("resize",()=> {
		imgWraps.css("height",imgWraps.width());
	});
});
</script>
[CSS DEL]<style type="text/css"></style>
```

Then find wherever you want the gallery in your HTML and copy and paste this code:

```
[[HTML]]
```

Example file:
[ENKEL HTML FIL]
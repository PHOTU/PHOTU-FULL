<script language="JavaScript1.2">

var howOften = 5; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<a target="_blank" href='https://www.youtube.com/watch?v=lXusfMECkGI'><img src='/images/index/top-most/cover-matty.jpg'/></a>"; //a linked image
    items[1]="<a href='/categories/music/turn-up-the-music/'><img alt='' src='/images/index/top-most/cover.png'/></a>"; //a linked image

function rotater() {
    document.getElementById("cover").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("coverdiv").innerHTML=items[current]
        if(document.all)
            placeholderdiv.innerHTML=items[current];

    current = (current==items.length-1) ? 0 : current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;
//-->
</script>

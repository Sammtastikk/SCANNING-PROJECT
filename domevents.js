function randomRGBColorString() {
    var r = parseInt( Math.random()*255 );                 
   var g = parseInt( Math.random()*255 );
   var b = parseInt( Math.random()*255 );
   return "rgb("+r+","+g+","+b+")";   
}

function colorFromXY(x,y) {
    hue = parseInt (x*255);
    lightness= parseInt(y*100)
    return "hsl("+hue+", 100%, "+lightness+"%)";
}


function myHandler(ev) {
    // generate a color based on x and y coordinates
    // both x and y should be in the range 0.0 to 1.0
    // set the color of the element to the generated color
    var myDiv = $(event.target);
    
    // first normalize x and y based on where insid e the div
    // we clicked i.e. to normalize divide the x/y offset of the click location 
    // by the width/height of hte element
    var x=ev.offsetX / myDiv.width();
    var y=1- (ev.offsetY / $(event.target).height() );
    
    console.log("y", y);
    //with x and y between 0.0 and 1.0 generate the color 
    
    var color=colorFromXY(x,y);
    //set the backgroundColor of the Div
   $(event.target).css ("background-color", color);
}

    $("div").mousemove(myHandler);



             
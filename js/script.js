$( document ).ready(function() {

    // Hero Section FUll Height
    $(function(){
    	var windowH = $(window).height();
    	var wrapperH = $('.hero').height();
    	if(windowH > wrapperH) {                            
    		$('.hero').css({'height':($(window).height())+'px'});
    	}                                                                               
    	$(window).resize(function(){
    		var windowH = $(window).height();
    		var wrapperH = $('.hero').height();
    		var differenceH = windowH - wrapperH;
    		var newH = wrapperH + differenceH;
    		var truecontentH = $('#truecontent').height();
    		if(windowH > truecontentH) {
    			$('.hero').css('height', (newH)+'px');
    		}
<title>Multiplication Table</title>
  <script type="text/javascript">
    var rows = prompt("How many rows for your multiplication table?");
    var cols = prompt("How many columns for your multiplication table?");
    if(rows == "" || rows == null)
   		 rows = 10;
    if(cols== "" || cols== null)
   		 cols = 10;
    createTable(rows, cols);
    function createTable(rows, cols)
    {
      var j=1;
      var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
      for(i=1;i<=rows;i++)
      {
    	output = output + "<tr>";
        while(j<=cols)
        {
  		  output = output + "<td>" + i*j + "</td>";
   		  j = j+1;
    	})          
    });


});

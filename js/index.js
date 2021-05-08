console.log("Your index.js file is loaded correctly");
<p id="p1">Case Study 1</p>
<p id="p2">Case Study 2</p>
<p id="p3">Case Study 3</p>
<p id="p4">Case Study 4</p>

<script>
    $(document).ready(function()) {
        $("#p1").hover(function()) {
            $(this).hide();
    });

    $( "#target" ).click(function() {
        alert( "Handler for .click() called." );
      });
    
      $( "#other" ).click(function() {
        $( "#target" ).click();
      });

</script>


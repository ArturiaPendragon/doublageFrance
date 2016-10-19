/*
  jqBootstrapValidation
  Documentation : jqBootstrapValidation
   */
   $(function() {

     $("input,textarea").jqBootstrapValidation(
     {
       preventSubmit: true,
       submitError: function($form, event, errors) {
    },
    submitSuccess: function($form, event) {
      event.preventDefault();
       var name = $("input#name").val();  
       var email = $("input#email").val(); 
       var message = $("textarea#message").val();
       var firstName = name;
           if (firstName.indexOf(' ') >= 0) {
            firstName = name.split(' ').slice(0, -1).join(' ');
          }        
          $.ajax({
            url: "contactForm.php",
            type: "POST",
            data: {name: name, email: email, message: message},
            cache: false,
            success: function() {  
            	// Success message
              $('#success').html("<div class='alert alert-success'>");
              $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append( "</button>");
              $('#success > .alert-success')
              .append("<strong>Votre message à été envoyé. </strong>");
              $('#success > .alert-success')
              .append('</div>');

 		  // clear all fields
 		  $('#contactForm').trigger("reset");
    },
    error: function() {		
 		// Fail message
    $('#success').html("<div class='alert alert-danger'>");
    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    .append( "</button>");
    $('#success > .alert-danger').append("<strong>Désolé, "+firstName+" il semblerait que le serveur mail ne répondent pas...</strong> Merci d'utiliser directement cet e-mail : <a href='mailto:me@google.com?Subject=Message_Me me@google.com'>me@google.com</a> ? Désolé pour cet erreur !");
    $('#success > .alert-danger').append('</div>');
 		// clear all fields
 		$('#contactForm').trigger("reset");
  },
})
        },
        filter: function() {
         return $(this).is(":visible");
       },
     });

     $("a[data-toggle=\"tab\"]").click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
   });


   $('#name').focus(function() {
     $('#success').html('');
   });
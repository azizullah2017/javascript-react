$(".pop").on("click", function() {
    var vl=this.id;
  
    $('#imagepreview').attr('src', vl+'.jpg'); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
 });
 
 $('.slider').slick( {autoplay: true });
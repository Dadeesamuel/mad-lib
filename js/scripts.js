$(document).ready(function() {
    $("#formOne").submit(function(event) {
      // $(".person1").append("blah blah");
      const person1 = $("#person1").val();
     // $(".person2").append("blah blah");
     const person2 = $("#person2").val();
    //  $(".animal").append("blah blah");
    const animal = $("#animal").val();
     // $(".exclamation").append("blah blah");
     const exclamation = $("#exclamation").val();
    //  $(".verb").append("blah blah");
    const verb = $("#verb").val();
     // $(".noun").append("samuel");
     const noun = $("#noun").val();

     $(".person1").text(person1)
     $(".person2").text(person2)
     $(".animal").text(animal)
     $(".exclamation").text(exclamation)
     $(".verb").text(verb)
     $(".noun").text(noun)
  
      $("#story").show();
      event.preventDefault();
    });
  });
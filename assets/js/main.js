M.AutoInit();

$(document).ready(function(){
   
  });
        

  $(".dropdown-trigger").dropdown({
    coverTrigger: true
 });



 var instances = M.FloatingActionButton.init( $('.fixed-action-btn'), {
     direction: 'bottom',
 }  );


 $(window).on('load', function(){
    $('.preloader').fadeOut();
 });


 var ctx = $('#myChart');


 var myChart = new Chart(ctx, {
   type: 'pie',
   data: {
       labels: ['Tamamlanan', 'Kalan'],
       datasets: [{
           label: '# of Votes',
           data: [31, 69],
           backgroundColor: [
               'rgba(255, 159, 64, 1)'
           ],
           borderColor: [
               'rgba(255, 159, 64, 1)'
           ],
           borderWidth: 0
       }]
   },
   options: {
       title: {
          display: true,
          text: "31%"
       }
       
   }
});
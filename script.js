function reset(){
		console.log('In Reset');
		location.reload();
}
$(document).ready(function(){
	
	
	
    $("button").click(function(){
		var date1=document.getElementById("dateval").value;
    	var formattedDate = new Date(date1);
    	
        if(!(formattedDate instanceof Date && !isNaN(formattedDate.valueOf())))
    	{
    	
    	 document.getElementById("validid").innerHTML = "Enter a valid Date";
    	return(false);
    	}
       
    	
     	formattedDate.setDate(formattedDate.getDate()+1);
     	console.log(formattedDate);
     	
     	
     	
     	var d = formattedDate.getDate();
     	var m =  formattedDate.getMonth();
     	m += 1;  // JavaScript months are 0-1
     	var y = formattedDate.getFullYear();
     	

     	date = y + "" + (m>9 ? '' : '0') + m + "" + (d>9 ? '' : '0') + d;
     	//console.log(date);
     		//date = y + "" + (m>9 ? '' : '0') + m + "" + (d+i>9 ? '' : '0') + (d+i);
     	console.log(".com/forecast/"+date);
     
     



   $.ajax({
      type:"GET",
      dataType:"json",
      async:true,
      url:"http://18.216.173.207/forecast/"+date,
      success:function(data){
	 	  var config1 = {
			type: 'line',
			data: {
				labels: [data[0].DATE,data[1].DATE,data[2].DATE,data[3].DATE,data[4].DATE],
				datasets: [{
					label: 'Min',
					backgroundColor: "green",
					borderColor: "green",
					data: [data[0].TMIN,data[1].TMIN,data[2].TMIN, data[3].TMIN, data[4].TMIN],
				
					fill: false,
				}, {
					label: 'Max',
					fill: false,
					backgroundColor: "blue",
					borderColor: "blue",
					data: [data[0].TMAX,data[1].TMAX, data[2].TMAX, data[3].TMAX, data[4].TMAX],
					
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Forecast Graph'
				},
				scales: {
					yAxes: [{
						ticks: {
							suggestedMin: 5,
							suggestedMax: 50
						}
					}]
				}
			}
		};
	  var cty = document.getElementById('canvas1').getContext('2d');
	  window.myLine = new Chart(cty, config1);

      }
      
      });



    });
       
});    

var donutShoppe = window.donutShoppe;
var inputarray = [];
var donutForm = document.getElementById('donutForm');

var handleFormSubmit = function(event){
	event.preventDefault();

	if (!event.target.location.value)  {
            return alert('location cannot be blank');
        }
    if (event.target.max.value <event.target.min.value)   {
    	return alert('maximum value needs to be greater than mininmum value');
    } 
    if (event.target.max.value <= 0 || event.target.min.value <= 0){
    	return alert('Error, value needs to be greater than 0')
    }
    if (event.target.adpp.value <= 0) { 
    	return alert ('Hopefully the customer would at least buy a donut')
    }

        var newLocation = new donutShoppe(event.target.location.value, event.target.min.value, event.target.max.value, event.target.adpp.value);
		event.target.location.value = null;
		event.target.min.value = null;
		event.target.max.value = null;
		event.target.adpp.value = null;
		//inputarray.push(newLocation);
		newLocation.render();
		console.log(newLocation)
		

}
window.inputarray = inputarray;


donutForm.addEventListener('submit', handleFormSubmit);
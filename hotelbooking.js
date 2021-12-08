var select = document.querySelector('select');
var html = document.querySelector('body');

select.addEventListener('change', backgrounds);

function backgrounds(){
	var choice = select.value;
	
	if(choice=='1'){
		html.style.backgroundImage = "url('Hotelbook.jpg')";
	}
	else if(choice==='2')
	{
		html.style.backgroundImage = "url('apartment.jpg')";
	}
	else if(choice==='3')
	{
		html.style.backgroundImage = "url('resorts.jpg')";
	}
	else if(choice==='4')
	{
		html.style.backgroundImage = "url('villas.jpg')";
	}
	else if(choice==='5')
	{
		html.style.backgroundImage = "url('cabins.jpg')";
	}
	else if(choice==='6')
	{
		html.style.backgroundImage = "url('cottages.jpg')";
	}
	else if(choice==='7')
	{
		html.style.backgroundImage = "url('Glamping.jpg')";
	}
	else if(choice==='8')
	{
		html.style.backgroundImage = "url('holiday.jpg')";
	}
	else if(choice==='9')
	{
		html.style.backgroundImage = "url('serviced apartment.jpg')";
	}
	else if(choice==='10')
	{
		html.style.backgroundImage = "url('guest house.jpg')";
	}
	else if(choice==='11')
	{
		html.style.backgroundImage = "url('hostels.jpg')";
	}
	else if(choice==='12')
	{
		html.style.backgroundImage = "url('motels.jpg')";
	}
	else if(choice==='13')
	{
		html.style.backgroundImage = "url('B&B.jpg')";
	}
	else if(choice==='14')
	{
		html.style.backgroundImage = "url('ryokan.jpg')";
	}
	else if(choice==='15')
	{
		html.style.backgroundImage = "url('reids.jpg')";
	}
	else if(choice==='16')
	{
		html.style.backgroundImage = "url('holiday park.jpg')";
	}
	else if(choice==='17')
	{
		html.style.backgroundImage = "url('homestays.jpg')";
	}
	else if(choice==='18')
	{
		html.style.backgroundImage = "url('camp.jpg')";
	}
	else if(choice==='19')
	{
		html.style.backgroundImage = "url('country.jpg')";
	}
	else if(choice==='20')
	{
		html.style.backgroundImage = "url('farm.jpg')";
	}
	else if(choice==='21')
	{
		html.style.backgroundImage = "url('boats.jpg')";
	}
	else if(choice==='22')
	{
		html.style.backgroundImage = "url('luxury.jpg')";
	}
	else if(choice==='23')
	{
		html.style.backgroundImage = "url('self.jpg')";
	}
	else if(choice==='24')
	{
		html.style.backgroundImage = "url('tiny.jpg')";
	}
}
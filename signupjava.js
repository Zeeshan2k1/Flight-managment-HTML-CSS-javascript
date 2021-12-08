document.getElementById("eye").style.visibility = "hidden";
document.getElementById("reeye").style.visibility = "hidden";




document.getElementById("eye").addEventListener("click",function()
{
	if(document.getElementById("passField").type=="password")
	{
		document.getElementById("passField").type="text";
	}
	
	else
	{
		document.getElementById("passField").type="password";
	}
	
	document.getElementById("eye").style.visibility = "hidden";
	document.getElementById("ceye").style.visibility = "visible";
}
); 


document.getElementById("ceye").addEventListener("click",function()
{
	if(document.getElementById("passField").type=="password")
	{
		document.getElementById("passField").type="text";
	}
	
	else
	{
		document.getElementById("passField").type="password";
	}
	
	document.getElementById("ceye").style.visibility = "hidden";
	document.getElementById("eye").style.visibility = "visible";
	
}
); 





document.getElementById("reeye").addEventListener("click",function()
{
	if(document.getElementById("repassField").type=="password")
	{
		document.getElementById("repassField").type="text";
	}
	
	else
	{
		document.getElementById("repassField").type="password";
	}
	
	document.getElementById("reeye").style.visibility = "hidden";
	document.getElementById("receye").style.visibility = "visible";
}
);


document.getElementById("receye").addEventListener("click",function()
{
	if(document.getElementById("repassField").type=="password")
	{
		document.getElementById("repassField").type="text";
	}
	
	else
	{
		document.getElementById("repassField").type="password";
	}
	
	document.getElementById("receye").style.visibility = "hidden";
	document.getElementById("reeye").style.visibility = "visible";
}
);
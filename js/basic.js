var displayScreen = document.getElementById('display');

function addtoscreen(x)
{
	displayScreen.value += x;

	if(x =='c')
	{
		displayScreen.value = '';
	}
}

function answer()
{
	x = displayScreen.value;
	x = eval(x);
	displayScreen.value =x;
}

function backspace()
{
	var number = displayScreen.value;
	var len = number.length-1;
	var newnumber = number.substring(0,len);
	displayScreen.value = newnumber;
}

function power(y)
{
	x = displayScreen.value;
	x = Math.pow(x,y);
	displayScreen.value =x;	
}

function square(y)
{
	x = displayScreen.value;
	x = Math.pow(x,y);
	displayScreen.value =x;	
}

function sqrt()
{
	x = displayScreen.value;
	x = Math.sqrt(x);
	displayScreen.value =x;	
}
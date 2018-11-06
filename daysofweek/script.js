let day="";

switch (new Date().getDay()) {

	case 0:
			//document.getElementById("day").innerHTML= " Welcome today is sunday";	 			

		day= "sunday";
	break;

	case 1:
		day="monday";
		break;
	case 2:
		day= "tuesday";
		break;
	case 3: 	
		day= "wednesday";
		break;	
	case 4:	
		day= "thursday";
	case 5: 	
		day= "friday";
		break;
	case 6: 	
		day= "saturday";
					
}
document.getElementById("day").innerHTML= " Welcome today is" +day;	 			
		
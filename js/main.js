var date=document.getElementById("date");
var button=document.getElementById("calculate")
var para=document.getElementById("para")

	button.addEventListener('click',function(){
		
		var birthDayDate=new Date(date.value);
		var currentDayDate=new Date();
		
		var birthDate=birthDayDate.getDate();
		var currentDate=currentDayDate.getDate();
		
		var birthMonth=birthDayDate.getMonth()+1;
		var currentMonth=currentDayDate.getMonth()+1;
		
		var birthYear=birthDayDate.getFullYear();
		var currentYear=currentDayDate.getFullYear();

		var ageYear;
		var ageMonth;
		var agedate;

		var feb;
		if(currentYear%4==0){
			feb=29;
		}
		else{
			feb=28;
		}

		var dateOfMonths=[31,feb,31,30,31,30,31,31,30,31,30,31];
		var previousMonth=currentMonth;

		if(previousMonth==0){
			previousMonth=11;
		}
		else{
			previousMonth=currentMonth-1
		}

		if(currentMonth>birthMonth){

			if(currentDate>=birthDate){
				agedate=currentDate-birthDate;
				ageMonth=currentMonth-birthMonth;
				ageYear=currentYear-birthYear;
			}
			else{
				ageMonth=currentMonth-birthMonth-1;
				agedate=(dateOfMonths[previousMonth]-birthDate)+currentDate;
				ageYear=currentYear-birthYear-1;
			}
		}
		else if(currentMonth==birthMonth){

			ageYear=currentYear-birthYear;

			if(currentDate>=birthDate){
				agedate=currentDate-birthDate;
				ageMonth=currentMonth-birthMonth;
				ageYear=currentYear-birthYear;
			}
			else{
				ageMonth=11;
				agedate=(dateOfMonths[previousMonth]-birthDate)+currentDate;
				ageYear=currentYear-birthYear-1;
			}
		}
		else{

			ageYear=currentYear-birthYear-1;

			if(currentDate>=birthDate){
				agedate=currentDate-birthDate;
				ageMonth=12-(birthMonth-currentMonth)
			}
			else{
				agedate=(dateOfMonths[previousMonth]-birthDate)+currentDate
				ageMonth=(12-(birthMonth-currentMonth))-1
			}
		}
		para.innerText=`${ageYear} years ${ageMonth} month ${agedate} days old`
	})

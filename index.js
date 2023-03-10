function generate_result(){

var amount=0,tip=0,people=0;
var tip_amount=0,tip_per_person=0,total_amount=0;

     amount=document.getElementById("bill1").value;    // fetching of bill amount value.
    
     tip=document.getElementById("tip").value;     // fetching of the tip% value.
    
     people=document.getElementById('people').value;   // fetching of the number of people value.


    
    
     tip_amount=amount*tip/100;       // calculation of tip_amount

     tip_per_person=tip_amount/people;    // tip_per_person

    
     total_amount=parseFloat(amount) + parseFloat(tip_amount);    //calculation of total amount
   
    
    var total_per_person=total_amount/people;       // calculation of total_per_person
   



    if(amount<0 ||tip <0 ||people<0)   // condition to check for the negative values
    {
        alert("insert positive  values:")
    }
    

    else if(!amount|| !tip || !people)     // condition to check for the null values
    {
        alert("insert values:")
    
    }
    else
    {
    document.getElementById("s1").innerHTML=tip_per_person;    // printing of the output
    
   

    document.getElementById("s2").innerHTML=total_per_person;
   
   

     }
}
    





  
    
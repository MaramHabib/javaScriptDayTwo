regex_name=/^[A-Za-z]$/
regex_phone=/^[0-9]{8}$/
regex_mobile=/^[0][1-2][0-2][0-9]{8}$/
regex_mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


do{
    vname=prompt("Please,Enter Your Name ");
    console.log(vname);
}
while(vname.match(regex_name));


do{
    vphone=prompt("Please,Enter Your phone ");
    console.log(vphone);
}
while(! vphone.match(regex_phone));

do{
    vmobile=prompt("Please,Enter Your Mobile ");
    console.log(vmobile);
}
while(! vmobile.match(regex_mobile));

do{
    vemail=prompt("Please,Enter Your Email ");
    console.log(vemail);
}
while(! vemail.match(regex_mail));

ucolor=prompt("Enter your favorite color");

document.write("<h4><span style=color:"+ucolor+"> Welcome dear guest </span> "+ vname + "</h4> <br>") 
document.write("<h4><span style=color:"+ucolor+"> Welcome dear guest </span> "+ vphone + "</h4> <br>") 
document.write("<h4><span style=color:"+ucolor+"> Welcome dear guest </span> "+ vmobile + "</h4> <br>") 
document.write("<h4><span style=color:"+ucolor+"> Welcome dear guest </span> "+ vemail + "</h4> <br>") 

const date = new Date();

document.write("<h4><span style=color:"+ucolor+"> Today is </span> "+ date.getDay() + "</h4> <br>") 
document.write("<h4><span style=color:"+ucolor+"> You are in month </span> "+ date.getMonth() + "</h4> <br>") 

// Q2

// var statment = (prompt("enter the statment"));

// arr= statment.split(' ');
// console.log(arr, arr.length);

// for( var i = 0 ; i<arr.length ; i++)
// {console.log(arr[i], arr[i].length);
//     var word="";
//     if(word.length<arr[i].length){word= arr[i];}
//      console.log(word) ;
// }
// document.write("the statment is:"+statment+"<br/>"+"the longest word is:"+word);

//----------------------------Q3---------------------------------

// var arr = [1,2,3,4,5];
// var arr1=[];

//  console.log(arr , arr.length );

//  for( var i = 0 ; i<arr.length ; i++){
//     var x = (+prompt("enter the number"));
//     console.log(x , typeof x);
//     console.log(arr1.push(x)); 
//     console.log(arr1);
//      }

//      document.write(" <br> u have entered " +arr1);
//       console.log(arr1.sort(function(a,b){return a-b})); //? ascending
//       document.write("<h4><span style=color:'red'> Ascending Order </span> "+ arr1 + "</h4> <br>") 


//     console.log(arr1.sort(function(a,b){return b-a})); //? descending
//     document.write("<h4><span style=color:'red'> Descending Order </span> "+ arr1 + "</h4> <br>") 

//--------------------Q4-------------------------

// var R = +prompt("enter radius");
// console.log(R, typeof R);

// var area = 3.14 * R*R
// console.log(area, typeof area);

// var alert1 = alert("area=" +area);



// var V = +prompt("enter the number to squareroot:");
// console.log(V, typeof V);

// var SR = Math.sqrt (V);
// console.log(SR, typeof SR);

//  var alert2= alert("squareroot=" +SR);
 

// var angle = +prompt("enter the angle");
// console.log(angle, typeof angle);

// var sina = (Math.sin (angle*Math.PI/180));
// console.log(sina, typeof sina);

// var sin1 = sina.toFixed(3);
// console.log(sin1 , typeof sin1);
// document.write ("sin" +angle+ "=" +sin1);



  




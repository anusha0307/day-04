// 1.How to compare two JSON have the same properties without order?
// a.var obj1 = { name: "Person 1", age:5 };
// b.var obj2 = { age:5, name: "Person 1" };

    
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(obj1 == obj2 )
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))


//2.Use the rest countries API url ->https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json  and display all the country flags in console


var xhr=new XMLHttpRequest();
xhr.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json" )
xhr.send()
xhr.onload=function()
    {

        if(xhr.status>=200 && xhr.status<300){
        var  data=JSON.parse(xhr.response)
        for(var i=0;i,data.length;i++){
        console.log(data[i].flag)
    }

     }}  




//3.Use the same rest countries and print all countries name, region, sub region and population

var xhr=new XMLHttpRequest();
xhr.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json" )
xhr.send()
xhr.onload=function()
    {

        if(xhr.status>=200 && xhr.status<300){
        var  data=JSON.parse(xhr.response)
        for(var i=0;i,data.length;i++){
        console.log(data[i].name)
        console.log(data[i].region)
        console.log(data[i].subregion)
        console.log(data[i].population)


    }
 }}    


       
          
      
          
   


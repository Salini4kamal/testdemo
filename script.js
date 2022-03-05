var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
   var data=JSON.parse(request.response);
    console.log(data);
  // console.log(data[1].currencies)
   // for(var i=0;i<data.length;i++){
      // console.log("name:${data[i].name}capital:${data[i]:capital}");
  //  console.log(`flag:${data[i].flag}`);
   // console.log(`name:${data[i].name} lat:${data[i].latlng[0]} long:${data[i].latlng[1]}`);
 //console.log(`country name:${data[i].name} region:${data[i].region} subregion:${data[i].subregion} population:${data[i].population}`)
  // console.log(`author name;${data[i].author name }`)
   
  var a=data.filter((element)=>element.region==="Asia");
/*console.log(a);
var emp=[];
for(var i=0;i<a.length;i++){
  
  var res=a[i].population
  emp.push(res);
  
}console.log(emp);
//var pop=emp.reduce((sum,cv)=>sum+cv);
//console.log(pop);*/
//var pop=a.map((ele)=>ele.population)
//console.log(pop)


//console.log(`Population in Asia region ${pop.reduce((sum,cv)=>sum+cv)}`)



/*var b=a.name;
console.log(b);
var population=data.population;
console.log(population);*/
var final=a.reduce((acc,cv)=>acc+cv.population,0)
console.log(final)
}
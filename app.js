/* var nameWebSite ="google" ;

var userName = prompt("Whats your name ?");
alert("welcome  " + userName )


var loverWebSite = prompt(" what kind of web site do you love?");


if(loverWebSite === nameWebSite ){
  document.write("<p> go to visit google </p>");
}else if(loverWebSite === "youtibe"){
  document.write("<p> go to visit youtube </p>");}

  else if(loverWebSite === "facebook"){
  alert('please do not chose this web site ');}
  
  else{ document.write('<img src="https://previews.123rf.com/images/hillway/hillway1801/hillway180100012/93530270-3d-vector-funny-gold-shiny-inscription-you-are-the-best-vector-illustration-.jpg"/> ');
}

*/
//var name =["adham","majed"];

alert("Please choose a name from among these names{adham , majed}");
var userName = prompt("Please enter your name ");
alert("Please choose a age from among these ages{23 , 25}");
var userAge = prompt("Please enter your Age");
while(userName !="adham" && userName != "majed"){
  alert("welcome "+userName+" in our web site");
   userName = prompt("Please enter your name ");
}
while(userAge !=23 && userAge != 25){
  alert("May God give you long life");
  userAge = prompt("Please enter your Age");
}

alert("If you love cats,choose How many photos do you want for it?")
var favaret = prompt("enter number of photos!!");

for(let i=0;i<favaret;i++){
  document.write('<img style="width:50%;height:200px" src="https://images.squarespace-cdn.com/content/v1/5c3d0a98506fbe24fe972977/1618257306997-DFKUSRZ0MYFB2TKLB3LH/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/unsplash-image-w12NAMymqnk.jpg?format=2500w"/>');
}

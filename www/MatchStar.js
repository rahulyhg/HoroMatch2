// JavaScript Document
var bstar=-1; var gstar =-1; var tstar=-1; var qstar=-1;
var bpada=-1; var gpada=-1; var tpada=0;
var stcnt=0; var pdcnt =0; brasi =0; grasi=0; rasidiff=0; 
var caste = 0; var libval = 0;var radpval = 0;
var lang =1; var rc=""; var remindlist=""; var RevisedScore=0;
var NirnayaStr="";
var bs=""; var btext=""; var heading="";

function getData(){
if (document.getElementById("btn1").value=="Next"){
bs=bstar;

bpada = parseInt(document.getElementById("sel1").value);
document.getElementById("t1").innerHTML="Select Girl's Star";
document.getElementById("t2").innerHTML="Select Girl's Pada";
heading =  'Boy: ' + btext+' '+bpada;
//document.getElementById("BS").innerHTML=heading;
document.getElementById("btn1").value="Done";
document.getElementById("btn1").innerHTML="Done";
$("input[data-type='search']").val('');
}
else getData2();
}
function getData2(){
gstar=bstar;
bstar=bs;
gpada = parseInt(document.getElementById("sel1").value);
document.getElementById("btn1").value="Next";
document.getElementById("btn1").innerHTML="Next";
document.getElementById("t1").innerHTML="Select Boy's Star";
document.getElementById("t2").innerHTML="Select Boy's Pada";
document.getElementById("BS").innerHTML= heading + ' Girl: ' + btext+' '+gpada;
$("input[data-type='search']").val('');

$.mobile.navigate( "#pageone", { transition : "slide", info: "Inputpage" });


$("#block0").collapsible( "option", "collapsed", true);
$("#block1").collapsible( "option", "collapsed", true);
$("#block2").collapsible( "option", "collapsed", false );
$("#block3").collapsible( "option", "collapsed", true);
$("#block4").collapsible( "option", "collapsed", true);
$("#block5").collapsible( "option", "collapsed", true );

DasaVida();
//$.mobile.navigate( "#res1", { transition : "slide", info: "Inputpage" });
//window.location.hash = '#res1';
//location.href = "#res1"

}

function getData3(){
rc =  (document.getElementsByName("sex")[0].checked)?"Boy":"Girl";
tpada = parseInt(document.getElementById("sel2").value);
var optext = (document.getElementById("opt1").options[document.getElementById("opt1").selectedIndex].text);
document.getElementById("TS").innerHTML=rc + ' ' + btext + ' '+ tpada+' - :' + optext ;
$("input[data-type='search']").val('');
$.mobile.navigate( "#pageone", { transition : "slide", info: "Inputpage" });

$("#block0").collapsible( "option", "collapsed", true);
$("#block1").collapsible( "option", "collapsed", true);
$("#block2").collapsible( "option", "collapsed", true );
$("#block3").collapsible( "option", "collapsed", true);
$("#block4").collapsible( "option", "collapsed", false);
$("#block5").collapsible( "option", "collapsed", true );
DasaVida2();
//$.mobile.navigate( "#res1", { transition : "slide", info: "Inputpage" });
//window.location.hash = '#res1';
//location.href = "#res1"


}

var nakshatra =["Ashvini","Bharani","Kritika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni","Uttara Phalguni","Hasta","Chitra","Swati","Vishakha","Anuradha","Jyeshtha","Mula","Purva Ashadha","Uttara Ashadha","Shravan","Dhanistha","Shatabhisha","Purva Bhadrapad","Uttara Bhadrapad","Revati"];

var naksTamil =["Aswati","Bharani","Karthikai","Rohini","Mrigaseersha","Thiruvadirai","Punarpoosam","Poosam","Ayilyam","Magham","Pooram","Uthram","Hastham","Chitrai","Swati","Visakham","Anusham","Kettai","Moolam","Pooradam","Uthradam","Thiruvonam","Avittam","Sadayam","Poorattathi","Uthrattathi","Revati"];

var Remark=""; var Dinam=""; var Ganam=""; var sl;
var ReisedScore="";
var RajjuStrict=false;
var slist = document.getElementById("lv1");
var sitems = slist.getElementsByTagName('li');


for (var i=0;i<27;i++) {sitems[i].innerHTML=nakshatra[i]+' - '+naksTamil[i];}
slist = document.getElementById("lv2");
sitems = slist.getElementsByTagName('li');

for (var i=0;i<27;i++) {sitems[i].innerHTML=nakshatra[i]+' - '+naksTamil[i];}

//slist = document.getElementById("lv3");
//sitems = slist.getElementsByTagName('li');

//for (var i=0;i<27;i++) {sitems[i].innerHTML=nakshatra[i]+' - '+naksTamil[i];}


function DasaVida(){
RajjuStrict=false;
RevisedScore=0;

Ele("msg2").innerHTML="";
caste = parseInt(document.getElementById("set1").value);
libval = document.getElementById('set2a').checked? 2 : 1;
lang = document.getElementById('set3a').checked? 2 : 1;
libval = document.getElementById('hid1').value;

var poruttham = 0;
//if(bstar==-1){alert("Enter Boy's star and return");return false;}
//if(gstar==-1){alert("Enter Girl's star and return");return false;}
//bstar +=1; gstar +=1;
stcnt = StarDiff(bstar+1,gstar+1);
pdcnt = padaDiff(29-stcnt,bpada,gpada);
brasi = rasiCal(bstar+1,bpada);
grasi = rasiCal(gstar+1,gpada);
rasidiff = rasiDiff(grasi,brasi);


var d = Dina(stcnt,bstar+1,gstar+1,bpada,gpada,pdcnt,brasi,grasi);

var mytab = document.getElementById("tabres");
mytab.rows[0].cells[0].innerHTML = "Dinam: ";
mytab.rows[0].cells[1].innerHTML = d +'. '+stcnt +' '+Remark;
var dinaval = d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;
poruttham += dinaval;

d = Gana(bstar+1, gstar+1, stcnt);
mytab.rows[1].cells[0].innerHTML = "Ganam: ";
mytab.rows[1].cells[1].innerHTML = d +'. '+Remark;
var ganaval = d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;
poruttham += ganaval;

d = Mahendra(stcnt);
mytab.rows[2].cells[0].innerHTML = "Mahendram: ";
mytab.rows[2].cells[1].innerHTML = d +'. ';
poruttham += d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;

d = SthreeDheerga(stcnt);
mytab.rows[3].cells[0].innerHTML = "Sthree Dheergam: ";
mytab.rows[3].cells[1].innerHTML = d +'. ';
poruttham += d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;

d = Yoni(bstar+1, gstar+1);
mytab.rows[4].cells[0].innerHTML = "Yoni: ";
mytab.rows[4].cells[1].innerHTML = d +'. ' + Remark;
var yonihval = d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;
poruttham += yonihval;

d= rasi(grasi,brasi);
mytab.rows[5].cells[0].innerHTML = "Rasi: ";
mytab.rows[5].cells[1].innerHTML = d +'. ' + Remark;
var rasival = d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;
poruttham += rasival;

d = rasiAdhipathy(brasi, grasi);
mytab.rows[6].cells[0].innerHTML = "Rasi Adhipati: ";
mytab.rows[6].cells[1].innerHTML = d +'. ' + Remark;
radpval = d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;
poruttham += radpval;

d= vashyam(brasi, grasi);
mytab.rows[7].cells[0].innerHTML = "Vashyam: ";
mytab.rows[7].cells[1].innerHTML = d +'. ';
poruttham += d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;

d= rajju(bstar+1, gstar+1);
mytab.rows[8].cells[0].innerHTML = "Rajju: ";
mytab.rows[8].cells[1].innerHTML = d +'. '+ Remark;
var rajjuval = d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;
poruttham += rajjuval;

d= vedha(bstar+1, gstar+1);
mytab.rows[9].cells[0].innerHTML = "Vedha: ";
mytab.rows[9].cells[1].innerHTML = d +'. ';
poruttham += d.toUpperCase()==="OK"? 1 : d.toUpperCase()==="EXCEPTION"? .5 : 0;

d= nadi(caste, bstar+1, gstar+1);
mytab.rows[10].cells[0].innerHTML = "Nadi:* ";
mytab.rows[10].cells[1].innerHTML = d +'. ';

Reminder="";
d= reminder(bstar+1,gstar+1,gpada);
if (d!=""){
mytab.rows[11].cells[0].innerHTML = "Reminder: ";
mytab.rows[11].cells[1].innerHTML = Remark;
mytab.rows[11].style.color = "#210B61";
mytab.rows[11].style.backgroundColor = "#CEECF5";
mytab.rows[11].style.fontWeight ="bold";
}
mytab.rows[12].cells[0].innerHTML = "Score: ";
mytab.rows[12].cells[1].innerHTML = poruttham ;

var remind2 = (gstar==bstar)?"Beware same star for Boy and Girl not preferred by some. ":"";
remind2 += (rajjuval==0)?"Beware some insist on  Rajju match. ":"";
d= nirnayam(libval, poruttham, caste, dinaval, ganaval, rasival, yonihval, rajjuval,brasi,grasi);
mytab.rows[13].cells[0].innerHTML = "Nirnayam";
mytab.rows[13].cells[1].innerHTML =  d ;
mytab.rows[12].cells[1].innerHTML += (RevisedScore>0)?' '+"Revised Score : " + RevisedScore :"" ;
if (Right(d,8)=='s match.'||Right(d,7)=='Sakuna.'){
mytab.rows[13].style.backgroundColor = "#CEF6D8";
mytab.rows[13].style.color = "#0B610B";
}
else{
mytab.rows[13].style.backgroundColor = "#FFF7E7";
mytab.rows[13].style.color = "#8C4510";
}
mytab.rows[13].style.fontWeight ="bold";
Ele("msg2").innerHTML= remind2;
if (Right(d,7)=='Sakuna.')
$("#but2").show(); 
else
$("#but2").hide(); 


//alert(brasi+' '+grasi+' '+bstar+' '+gstar);
//alert(d);
//LibVal, Poruttham, Caste, DinaVal, GanaVal, RasiVal, YoniVal, RajjuVal
//$(document).on('pagebeforeshow', '#index', function(){ 
//    $(document).on('click', '#navigateButton', function(){        
//        $.mobile.navigate( "#second", { transition : "slide", info: "info about the #bar hash" });
//    });   
//});
//$.mobile.changePage($("#pagethree"), "none");

//bstar=-1; gstar =-1; bpada=-1; gpada=-1;
//stcnt=0; pdcnt =0; brasi =0; grasi=0; rasidiff=0; 
//$.mobile.navigate("pagheone.html#res1", { transition : "slide", info: "Result Page" });
//alert(boyScore(gstar+1, gpada, bstar+1, bpada, caste, libval));
}



function StarDiff(a, b) {
var SD;
if ((a - b) < 0 )
SD = a - b + 27 + 1;
else
SD = a - b + 1;
return SD;
}

function padaDiff(StarCount, IPada, IIPada) {
var PadaDiff;
PadaDiff = (StarCount - 1) * 4 + IIPada - IPada + 1;
if (PadaDiff <= 0) {
PadaDiff = PadaDiff + 108;
}
return PadaDiff;
}

function rasiCal(StarNo, PadaNo) {
var PadaCnt; var RasiCal;
PadaCnt = (StarNo - 1) * 4 + PadaNo;
if (PadaCnt % 9 == 0) {
RasiCal = Math.floor(PadaCnt / 9);}
else{
RasiCal = Math.floor(PadaCnt / 9) + 1;
}
return RasiCal;
}

function rasiDiff(IRasiNo, IIRasiNo){
var RasiDiff = IIRasiNo - IRasiNo + 1;
if (RasiDiff <= 0) {
RasiDiff = RasiDiff + 12;
}
return RasiDiff;
}

function Dina(StarCount, BStar, GStar,BPada,GPada,PadaCnt,BRasi,GRasi){
Dinam="Not OK"; Remark="";

if (IsItOK(StarCount, [6, 15, 24, 4, 13, 22, 9, 18, 27])) {
Dinam= "OK";
Remark = "Boy's  Star Counted from Girl's is acceptable - Uththamam. " + StarCount;
}
if (IsItOK(StarCount, [2, 11, 20, 8, 17, 26])){
Dinam = "OK";
Remark = "Boy's  Star Counted from Girl's is acceptable - Maddhimam. " + StarCount;
}
//'2,4,6,8,9,11,13,15,18,20,24,26,
//' KP exempts 1,10, 19 and others not.
if ((GStar == 12 || GStar == 21 || GStar == 26 || GStar == 26) &&
(StarCount == 3 || StarCount == 5)) {
Dinam = "Exception";
Remark = "For this girl's star, 3 / 5 count acceptable.";
}
if (StarCount == 12 &&  BPada == 1) {
Dinam = "Not OK";
Remark = "For 12th star 1 pada  not-acceptable";}
if (StarCount == 12 &&  BPada > 1) {
Dinam = "OK";
Remark = "For 12th star 1 pada only not-acceptable";}
if (StarCount == 14 &&  BPada != 4) {
Dinam = "OK";
Remark = "For 14th star 4 pada only not-acceptable";}
if (StarCount == 16 &&  BPada != 3) {
Dinam = "OK";
Remark = "For 16th star 3 pada only not-acceptable";}
if ((StarCount == 21 || StarCount == 23) &&  BPada != 4) {
Dinam = "OK";
Remark = "Third Paryaya 3 / 5 acceptable except Boy's 4th Pada";}
if ((StarCount == 21 || StarCount == 23) &&  BPada == 4) {
Dinam = "Not OK";
Remark = "Third Paryaya 3 / 5 Not acceptable for 4th Pada";}

if (StarCount == 25 &&  BPada == 4) {
Dinam = "Not OK";}
if (StarCount == 25 &&  BPada != 4) {
Dinam = "OK";
Remark = "(3rd 7th). Boy's Starlord should be examined vis-a-vis girl's houses.";}

//'======


if (StarCount == 27){  
if (BRasi == GRasi) { 
if (GStar == 3 || GStar == 9 || GStar == 24){
Dinam = "Not OK";
Remark = "27th star not OK even with same rasi for this.";}
else {
Dinam = "OK";
Remark = "For 27th star same Rasi is acceptable";}}

else if  (GStar == 1) {
Dinam = "OK";
Remark = "For Aswati, 27th star Revati is acceptable";}
else{
Dinam = "Not OK"
Remark = "27th star in different rasis not acceptable"}}

if (StarCount == 1) {
if ((BPada!=GPada) && BRasi == GRasi) {
Dinam = "Exception";
Remark = "Same star with Boy's pada different acceptable";
}
if (BPada==GPada){
Dinam = "Not OK";
Remark = "Same star with same pada not acceptable";

}
}

if (StarCount == 1) {
if (IsItOK(BStar, [2, 9, 15, 18, 19, 23, 24, 25])){
Dinam = "Not OK";
Remark = "For this star same nakshatras not acceptable";}
else {
if (BRasi<GRasi){
Dinam = "OK";
Remark = "For same star, Boy's Rasi should be ahead."
}
else if(BRasi>GRasi) {
Dinam = "Not OK";
Remark = "For same star, Girl's Rasi  should not be ahead."
}
}
}
//BRasi > GRasi) {
//Dinam = "OK";
//Remark = "For this star, girl's sign ahead of boy's is good";}}
//else{
//if (BRasi < GRasi) {
//Dinam = "OK";
//Remark = "For this staif (BStar == 3 || BStar == 12 || BStar == 21){
//if (r, boy's sign ahead of girl's is good";
//}
//}
if (BRasi==GRasi){
if (GStar>BStar){
Dinam = "OK";
Remark = "For same Rasi, Boy star should be ahead.";
}
if (GStar<BStar){
if(IsItOK(GStar,[1,3,5,10,13,15,20,21])){
Dinam = "OK";
Remark = "For same Rasi, this Girl star can be ahead.";
}
else{
Dinam = "Not OK";
Remark = "For same Rasi, this Girl Star cannot be ahead.";
}
}
if((BStar==2 & GStar==3)||( BStar==23 & GStar==24)|| (BStar==8 & GStar==9)){
Dinam = "Not OK";
Remark = "For same Rasi, this Boy Star & this Girl Star do not match."
}
}




if (StarCount == 7) {
if (IsItOK(GStar, [2, 6, 7, 8, 11, 19, 20, 21])) {
Dinam = "OK";
Remark = "There is no 7th Star Dosha for this";
}
}

if (BRasi - GRasi == -5 || BRasi - GRasi == 7) {
Dinam = "Not OK";
Remark = "Boy star in 8th Rasi from Girl's. Not OK.";
}
if (GStar == Pada88Star(BStar,BPada) && rc=="Boy"){
Dinam = "Not OK";
Remark = "Star having 88th pada from Boy causes Vata Vainasika Dosha.";}
if (BStar == Pada88StarG(GStar,GPada) && rc=="Girl"){
Dinam = "Not OK";
Remark = "Star having 88th pada from Boy causes Vata Vainasika Dosha.";}
//pushya 3 krittika 4 88 pada test
//if (PadaCnt==88){
//Dinam = "Not OK";
//Remark = "88th pada from Boy causes Vata Vainasika Dosha.";}

if ((StarCount == 6 || StarCount == 7 ) && (IsItOK(BStar, [4, 7, 8, 10, 12, 13, 14, 17, 21, 25, 26, 27])) & (IsItOK(GStar, [25, 1, 2, 4, 6, 7, 8, 11, 15, 19, 20, 21]))) {
Dinam = "Exception";
Remark = "For this star, there is no Vadhu Vainashika Dosha";}
else if((StarCount == 6 || StarCount == 7) & GStar != Pada88Star(BStar,BPada) ) {
Dinam = "OK";
Remark = "6th / 7th Star Not containing 88th Pada OK";}



return Dinam;
}

function GanaCalc(StarNo) {
var GanaCal="";
if (IsItOK(StarNo, [1, 5, 7, 8, 13, 15, 17, 22, 27])) {
GanaCal = "Deva";}
else if (IsItOK(StarNo, [2, 4, 6, 11, 12, 20, 21, 25, 26])){
GanaCal = "Manushya";}
else{
GanaCal = "Rakshasa";
}
return GanaCal; 
}


function Gana(BStar, GStar, StarCount){
Remark="";
Ganam = "Not OK";
if (GanaCalc(BStar) == "Rakshasa"){ 
Ganam = "Exception";
Remark = "Boy with Rakshasa Ganam is OK";
}
if (GanaCalc(GStar) == "Rakshasa") {
if (StarCount > 14) {
Ganam = "Exception";
Remark = "Girl with Rakshasa gana with Star count above 14 is OK";
}
}
if (GanaCalc(BStar) == GanaCalc(GStar)) {
Ganam = "OK";
Remark = "Equal Ganas are OK";
}
if ((GanaCalc(BStar) == "Deva" && GanaCalc(GStar) == "Manushya") || 
   (GanaCalc(GStar) == "Deva" && GanaCalc(BStar) == "Manushya") ) {
Ganam = "OK";
Remark = "Deva-Manushya Ganam  are compatible";
}

 return Ganam;
}

function Mahendra(GBStarCnt) {
var Mahendram = "Not OK";
if (IsItOK(GBStarCnt, [4, 7, 10, 13, 16, 19, 22, 25])) {
Mahendram = "OK";
}
return Mahendram;
}


function SthreeDheerga(GBStarCnt) {
var SthreeDheergam = "Not OK";
if (GBStarCnt > 7) {
SthreeDheergam = "OK";
}

if (GBStarCnt == 2 || GBStarCnt ==5 || GBStarCnt == 7 ){
SthreeDheergam = "Exception"
}
return SthreeDheergam;
}

function Yoni(BStar, GStar) {
var YoniVal;
if (EnemyYoniCal(YoniCal(BStar)) == YoniCal(GStar)) {
YoniVal = "Not OK";}
else{
YoniVal = "OK";
}
Remark = YoniCal(BStar) + ' Vs ' + YoniCal(GStar);
return YoniVal
}

function YoniCal(StarNo) {
var YoniCalc = [ "Horse", "Elephant", "Goat", "Snake",  "Snake", "Dog",                                     "Cat",  "Goat", "Cat", "Rat",  "Rat", "Cow", "Buffalo", "Tiger", "Buffalo",                  "Tiger",  "Deer",  "Deer", "Dog",  "Monkey",   "Mongoose", "Monkey", "Lion",   "Horse",                 "Lion", "Cow",   "Elephant"];
return YoniCalc[StarNo-1];
}

function EnemyYoniCal(Animal){
var EnemyYoni;
switch (Animal){
case "Horse":
EnemyYoni = "Buffalo"; break;
case "Elephant":
EnemyYoni = "Lion"
case "Goat":; break;
EnemyYoni = "Monkey"; break;
case "Snake":
EnemyYoni = "Rat"; break;
case "Dog":
EnemyYoni = "Deer"; break;
case "Cat":
EnemyYoni = "Rat"; break;
case "Rat":
EnemyYoni = "Cat"; break;
case "Cow":
EnemyYoni = "Tiger"; break;
case "Buffalo":
EnemyYoni = "Horse"; break;
case "Tiger":
EnemyYoni = "Cow"; break;
case "Deer":
EnemyYoni = "Dog"; break;
case "Monkey":
EnemyYoni = "Goat"; break;
case "Mongoose":
EnemyYoni = "Snake"; break;
case "Lion":
EnemyYoni = "Elephant"; break;
}
return EnemyYoni;
}

function rasi(IRasiNo, IIRasiNo) {
var RDiff;

RDiff = rasiDiff(IRasiNo, IIRasiNo);
Rasi = "Not OK";
if (RDiff == 7 || RDiff == 1) {
Rasi = "OK";
Remark = "Same or 7th House Rasi very good";
}
if (RDiff > 7) {
Rasi = "OK";
Remark = "Boy's rasi away by more than 6 signs is very good";
}
if (RDiff == 3 || RDiff == 4) {
Rasi = "Exception";
Remark = "Boy's rasi 3/4 signs away is tolerable";
}
if (RDiff == 2 || RDiff == 5 || RDiff == 6 || RDiff == 8) {
Rasi = "Not OK";
Remark = "Boy's rasi 2,5,6,or 8 signs away is not acceptable";
}
if (IRasiNo == 1 || IRasiNo == 3 || IRasiNo == 5 || IRasiNo == 7 || IRasiNo == 9 || IRasiNo == 11) {
if (RDiff == 2 || RDiff == 12) {
Rasi = "Not OK";
Remark = "Dwidwadasamsa Dosha";
}
if (RDiff == 8) {
Rasi = "Exception";
Remark = "Shashtaka Dosha is exempted for the girl's rasi";
}
else
if (RDiff == 12) {
Rasi = "Exception";
Remark = "For Girl's rasi Dwidwasamsa Dosha is exempted)";
}
}
return Rasi;
}

function rasiAdhipathy2(BRasiNo, GRasiNo){
var RasiAdhipathy = "Not OK";

switch (GRasiNo){
case 1:
if (IsItOK(BRasiNo, [3, 6, 2, 7])) 
RasiAdhipathy = "OK"; break;

case 2:
if (IsItOK(BRasiNo, [1, 2, 3, 6, 7, 8, 9, 10, 11, 12])) 
RasiAdhipathy = "OK"; break;

case 3:
if (IsItOK(BRasiNo, [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12])) 
RasiAdhipathy = "OK"; break;

case 4:
if (IsItOK(BRasiNo, [3, 6, 9, 12])) 
RasiAdhipathy = "OK"; break; 

case 5:
if (IsItOK(BRasiNo, [9, 12])) 
RasiAdhipathy = "OK"; break;

case 6:
if (IsItOK(BRasiNo, [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12])) 
RasiAdhipathy = "OK"; break;

case 7:
if (IsItOK(BRasiNo, [1, 2, 3, 6, 7, 8, 9, 10, 11, 12])) 
RasiAdhipathy = "OK"; break; 

case 8:
if (IsItOK(BRasiNo, [3, 6, 2, 7])) 
RasiAdhipathy = "OK"; break;

case 9:
if (IsItOK(BRasiNo, [2, 3, 4, 5, 6, 7, 9, 10, 11, 12])) {
RasiAdhipathy = "OK"; break;
}
case 10:
if (IsItOK(BRasiNo, [3, 6, 2, 7, 9, 12])) 
RasiAdhipathy = "OK"; break;

case 11:
if (IsItOK(BRasiNo, [3, 6, 2, 7, 9, 12])) 
RasiAdhipathy = "OK"; break;

case 12:
if (IsItOK(BRasiNo, [2, 3, 4, 5, 6, 7, 9, 10, 11, 12])) 
RasiAdhipathy = "OK"; break;

}
return RasiAdhipathy;
}

function vashyam(BRasiNo, GRasiNo){
var Vashyam = "Not OK";
switch (GRasiNo){
case 1:
if (IsItOK(BRasiNo, [5, 8])) 
Vashyam = "OK"; break;

case 2:
if (IsItOK(BRasiNo, [4, 7])) 
Vashyam = "OK"; break;

case 3:
if (IsItOK(BRasiNo, [6])) 
Vashyam = "OK"; break;

case 4:
if (IsItOK(BRasiNo, [8, 9])) 
Vashyam = "OK"; break;

case 5:
if (IsItOK(BRasiNo, [7])) 
Vashyam = "OK"; break;

case 6:
if (IsItOK(BRasiNo, [3])) 
Vashyam = "OK"; break;

case 7:
if (IsItOK(BRasiNo, [6, 10])) 
Vashyam = "OK"; break;

case 8:
if (IsItOK(BRasiNo, [4])) 
Vashyam = "OK"; break;

case 9:
if (IsItOK(BRasiNo, [12]))
Vashyam = "OK"; break;

case 10:
if (IsItOK(BRasiNo, [1, 11])) 
Vashyam = "OK"; break;

case 11:
if (IsItOK(BRasiNo, [1])) 
Vashyam = "OK"; break;

case 12:
if (IsItOK(BRasiNo, [10])) 
Vashyam = "OK"; break;

}
return Vashyam;
}

function rajjuCal(StarNo) {
var RajjuCal;
if (IsItOK(StarNo, [1, 10, 19])) {
RajjuCal = "Arohapada";
}
if (IsItOK(StarNo, [2, 11, 20])) {
RajjuCal = "Arohaghati";
}
if (IsItOK(StarNo, [3, 12, 21])) {
RajjuCal = "Arohaudara";
}
if (IsItOK(StarNo, [4, 13, 22])) {
RajjuCal = "Arohakantha"; 
}
if (IsItOK(StarNo, [5, 14, 23])) {
RajjuCal = "Siro"; 
}
if (IsItOK(StarNo, [6, 15, 24])) {
RajjuCal = "Avarohakantha"; 
}
if (IsItOK(StarNo, [7, 16, 25])) {
RajjuCal = "Avarohaudara";
}
if (IsItOK(StarNo, [8, 17, 26])) {
RajjuCal = "Avarohaghati";
}
if (IsItOK(StarNo, [9, 18, 27])) {
RajjuCal = "Avarohapada";
}
return RajjuCal;
}
function rajju(BStarNo, GStarNo) {
Remark="";  var BRajju; var GRajju; var SRajju;
BRajju = rajjuCal(BStarNo);
GRajju = rajjuCal(GStarNo);
RajjuStrict=false;
Rajju = "OK";
Remark = "Aroha and Avaroha of different Rajjus acceptable";

if (BRajju == "Siro" && GRajju == "Siro" ) SRajju = true;
else SRajju = false;
if (BRajju == "Siro" && GRajju == "Siro" ) RajjuStrict = true;

if (BRajju == GRajju) {
Rajju = "Not OK";
Remark = "Same Rajju not suitable";
return Rajju;
}
if (Right(BRajju,6)=="kantha" && Right(GRajju,6)=="kantha"){
Rajju="Not OK";
Remark="Kantha Rajju both aroha and avaroha not suitable.";
RajjuStrict=true;
return Rajju;
}
if (!SRajju) {

if (Left(BRajju, 5) == "Aroha" && Left(GRajju, 5) == "Aroha" &&
   Right(BRajju, BRajju.length - 5) != Right(GRajju, GRajju.length - 5)) {
Rajju = "Exception";
Remark = "Both Aroha of different Rajju are OK";
}
if (Left(BRajju, 7) == "Avaroha" && Left(GRajju, 7) == "Avaroha" &&
   Right(BRajju, BRajju.length - 7) != Right(GRajju, GRajju.length - 7)) {
Rajju = "Exception";
Remark = "Both Avaroha of different Rajjus. Some do not prefer.";
}
if (libval==2){
if (BRajju != GRajju){
Rajju = "OK";
Remark = "Aroha and Avaroha of different Rajjus acceptable";
return Rajju;}}
if (libval==1){

if (Right(BRajju, BRajju.length - 5) == Right(GRajju, GRajju.length - 7) || 
   Right(GRajju, GRajju.length - 5) == Right(BRajju, BRajju.length - 7)) {
Rajju = "Not OK";
Remark = "Even Aroha-Avaroha of same rajju not acceptable";
return Rajju;
}

}

}



return Rajju;
}


function VedhaCal(StarNo) {
var VedhaCalc = [ 18, 17, 16, 15, 14, 22, 21, 20, 19, 27, 26, 25, 
             24,  5,  4, 3,   2,  1,  9,  8,  7,  6,  5, 13,
             12, 11, 10];
             
return VedhaCalc[StarNo-1];
}

function vedha(BStarNo, GStarNo) {
var Vedha;
if (VedhaCal(BStarNo) == GStarNo || VedhaCal(GStarNo) == BStarNo) Vedha = "Not OK";
else Vedha = "OK";

if (BStarNo == 23 && GStarNo == 14) Vedha = "Not OK";

if (GStarNo == 23 && BStarNo == 14) Vedha = "Not OK";

return Vedha;
}

function nadiCal(StarNo){
var NadiCal;
if (IsItOK(StarNo, [1, 6, 7, 12, 13, 18, 19, 24, 25])) 
NadiCal = "Dakshina Parsva";

if (IsItOK(StarNo, [2, 5, 8, 11, 14, 17, 20, 23, 26])) 
NadiCal = "Madhyama";

if (IsItOK(StarNo, [3, 4, 9, 10, 15, 16, 21, 22, 27]))
NadiCal = "Vama Parsva";
return NadiCal;
}

function nadi(CasteVal, BStarNo, GStarNo){
var Nadi = ""
if (CasteVal == 5) {
if (nadiCal(BStarNo) == "Madhyama" && nadiCal(GStarNo) == "Madhyama")
Nadi = "Not OK";
else Nadi = "OK";}
else {
if (nadiCal(BStarNo) == nadiCal(GStarNo))
Nadi = "Not OK";
else Nadi = "OK"; }

return Nadi;
}


function reminder(BStarNo, GStarNo, GPada){
var Reminder = "";
if (BStarNo == 5 || GStarNo == 5) {
Reminder = "Mrigaseersham matches with all stars.";
}
if (BStarNo == 10 || GStarNo == 10) {
Reminder = "Makam matches with all stars.";
}
if (BStarNo == 15 || GStarNo == 15) {
Reminder = "Swati matches with all stars.";
}
if (BStarNo == 17 || GStarNo == 17) {
Reminder = "Anuradha (Anusham) matches with all stars.";
}
if (GStarNo == 19 && GPada == 1) {
Reminder = "Some do not prefer Moola (1) if Boy's father is alive.";
}
if (GStarNo == 9 && GPada == 1) {
Reminder = "Some do not prefer Ashlesha (Ayilyam) (1) if Boy's mother is alive.";
}
if (GStarNo == 18 && GPada == 1) {
Reminder = "Some deem Jyeshta (Kettai) (1) for the eldest Boy only.";
}
if (GStarNo == 16 && GPada == 4) {
Reminder = "Some deem Visakham (4) suitable for the youngest boy only.";
}
Remark = Reminder;
return true;
}

function moderate(brasi,grasi,radpval){
var Moderate = 0;
var BRasiNo; var GRasiNo;
var BRasiLord; var GRasiLord;
//var RAdPVal;
BRasiNo = brasi;
GRasiNo = grasi;
RAdPVal = radpval;
BRasiLord = signLordCal(BRasiNo);
GRasiLord = signLordCal(GRasiNo);
Moderate = 0;

if (BRasiLord == GRasiLord) Moderate = 1;

if (RAdPVal == 1) Moderate = 2;

if (rasiDiff(BRasiNo, GRasiNo) == 7) Moderate = 3;
return Moderate;
}

function nirnayam(LibVal, Poruttham, Caste, DinaVal, GanaVal, RasiVal, YoniVal, RajjuVal,brasi,grasi) { 
radpval=radpval;
var Nirnayam=""; 
var Moderated=0; var OrigPoruttham =0;
var OKStatus =true; var Strict = true;
var MinMark =0;
MinMark = 5;
OrigPoruttham = Poruttham;
Moderated = 0;
OKStatus = false;


if (LibVal == 2) Moderated = moderate(brasi,grasi);

if (Moderated > 0) {
if (RajjuVal == 0) {
RajjuVal = 1;
Poruttham = Poruttham + 1;

}
if (GanaVal == 0) {
GanaVal = 1;
Poruttham = Poruttham + 1;
}
if (RasiVal == 0) {
RasiVal = 1;
Poruttham = Poruttham + 1;
}
}

if (RajjuVal == 0 && LibVal == 1) {
Nirnayam = "Horoscopes do not match.";
return Nirnayam;
}

switch (Caste){
case 1:
if (DinaVal == 0 || RajjuVal == 0) {
Nirnayam = "Horoscopes do not match."; 
return Nirnayam;
} break;
case 2:
if (GanaVal == 0 || RajjuVal == 0) {
Nirnayam = "Horoscopes do not match.";
return Nirnayam;
} break;
case 3:
if (RasiVal == 0 || RajjuVal == 0) {
Nirnayam = "Horoscopes do not match.";
return Nirnayam;
} break;
case 4:
if (YoniVal == 0 || RajjuVal == 0) {
Nirnayam = "Horoscopes do not match."; 
return Nirnayam;
} break;
case 5:
MinMark = 6; break;
}


if (Poruttham < (MinMark-.5)) 
Nirnayam = "Horoscopes do not match.";
else {
switch (Moderated){
case 0:
if (Nirnayam == ""  ) {
Nirnayam = "You may proceed. Horoscopes match."; 
OKStatus = true;}
break;
case 1:
Nirnayam = "Rasi Lords  are same. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match.";
OKStatus = true; break;
case 2:
Nirnayam = "RasiAdhipathis are compatible. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match."
OKStatus = true; break;
case 3:
Nirnayam = "Sama-Sapthama Rasis are compatible. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match.";
OKStatus = true; break;
}

}
//alert(DinaVal+' '+Moderated+' '+OKStatus+Nirnayam);

if (OKStatus) {
if (OrigPoruttham <= MinMark) {
switch (Moderated) {
case 0:
Nirnayam = "Horoscopes match. However proceed after observing Sakuna."; break;
case 1:
Nirnayam = "Rasis or Rasi Lords are same. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match. However observe Sakuna."; break;
case 2:
Nirnayam = "RasiAdhipathis are compatible. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match.However observe Sakuna."; break;
case 3:
Nirnayam = "Sama-sapthami Rasis compatible. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match.However observe Sakuna."; break;
}
}

}

RevisedScore=Poruttham;
if (RajjuStrict==true){
Nirnayam= "For Siro / Kantha Rajjus no exception is available. Horoscopes do not match.";
if (Poruttham>OrigPoruttham) RevisedScore=Poruttham-1;
}
RajjuStrict=false;
return Nirnayam;
}

function signLordCal(RasiNo){
var SignLordCal=["Mar","Ven","Mer","Moo","Sun","Mer","Ven","Mar","Jup","Sat","Sat","Jup"];
return SignLordCal[RasiNo-1];
}

function Pada88Star(BStarNo, BPadaNo){
var CurrPada;
var TStar;
//var Tpada;
CurrPada = (BStarNo - 1) * 4 + BPadaNo;
TStar = Int((CurrPada + 87 - 0.0001) / 4) + 1;
//Tpada = (CurrPada + 87) % 4;
//if (Tpada == 0)  Tpada = 4;
if (TStar > 27)  TStar = TStar - 27;
return TStar;
}

function Pada88StarG(GStarNo, GPadaNo){
var CurrPada;
var TStar;
//var Tpada;
CurrPada = (GStarNo - 1) * 4 + GPadaNo;
if (CurrPada-87>=0)
TStar = Int((CurrPada - 87 + 0.0001) / 4) + 1;
else
TStar = Int((CurrPada - 87 + 108 + 0.0001) / 4) + 1;
//Tpada = (CurrPada + 87) % 4;
//if (Tpada == 0)  Tpada = 4;
if (TStar <= 0)  TStar = TStar + 27;
return TStar;
}
//=========================
function Int(x){
return Math.floor(x);
}
function IsItOK(needle,haystack)
{
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}

function addRow(rec,sec,table){
var mytab = document.getElementById(table);
var row; var cell; var i; var j;
for (i=0;i<rec;i++){
row = mytab.insertRow(i);
if (i==0){
row.style.color = "white";
row.style.backgroundColor = "#A55129";
row.style.fontWeight ="bold";
} else{
row.style.color = "#8C4510";
row.style.backgroundColor = "#FFF7E7";
row.style.fontWeight ="normal";
}
//style="color:#8C4510;background-color:#FFF7E7;
 //"color:White;background-color:#A55129;font-weight:bold;" ;
for (j=0;j<sec;j++){
cell = row.insertCell(j);
cell.innerHTML= "&nbsp;";

}
}
}
function L3(str){
if(str.length>0)        
    return str.substring(0,3);     
  else return "";       
}

function Right(str,len){
if(str.length>0)
 return str.substr(str.length-len,len);
 else return "";
  }
 
function Left(str,len){
  return str.substr(0,len);
  }
 
addRow(109,4,"tabhash");
addRow(28,2,"tabhash2");
addRow(28,5,"tabhash3");
$("#tabh1").hide();
$("#tabh2").hide();
$("#tabh3").hide();
$("#rem2").hide();

function DasaVida2(){
rc =  (document.getElementsByName("sex")[0].checked)?"Boy":"Girl";
var opt = parseInt(document.getElementById("opt1").value);
RajjuStrict=false;
remindlist="";
caste = parseInt(document.getElementById("set1").value);
libval = document.getElementById('set2a').checked? 2 : 1;
lang = document.getElementById('set3a').checked? 2 : 1;
var sv=1; pv=1;

if (opt==1){
$("#tabh1").hide();
$("#tabh3").hide();
$("#tabh2").show();
$("#rem2").show();
var mtab =  document.getElementById("tabhash2");

if (rc == "Boy") BoyList(1);
else BoyList(2);
mtab.rows[0].cells[0].innerHTML= "Star";
mtab.rows[0].cells[1].innerHTML= "Result";
var rn=1;
for (var i=1;i<=27;i++){
mtab.rows[rn].cells[0].innerHTML= "";
mtab.rows[rn].cells[1].innerHTML= "";
}
for (var i=1;i<=27;i++){
if ([i-1]!=""){
mtab.rows[rn].cells[0].innerHTML= ResultSet[i-1];
mtab.rows[rn].cells[1].innerHTML= PadaSet[i-1];
rn++;}
}


}

if (opt==2){
$("#tabh1").hide();
$("#tabh2").hide();
$("#tabh3").show();
$("#rem2").show();
var mtab =  document.getElementById("tabhash3");
var remind;Remark="";remindlist="";

mtab.rows[0].cells[0].innerHTML= "Stars";
mtab.rows[0].cells[1].innerHTML= "Pada 1";
mtab.rows[0].cells[2].innerHTML= "Pada 2";
mtab.rows[0].cells[3].innerHTML= "Pada 3";
mtab.rows[0].cells[4].innerHTML= "Pada 4";
for (var i=1;i<=27;i++){
if (lang==2)
mtab.rows[i].cells[0].innerHTML= naksTamil[i-1];
else
mtab.rows[i].cells[0].innerHTML= nakshatra[i-1];
var cy=0;
for (var j=1;j<=4;j++){

if (rc=='Boy'){
mtab.rows[i].cells[j].innerHTML= boyScore(i,j,tstar+1,tpada,caste,libval);
remind=reminder(tstar+1,i,j);

if(Remark!="") mtab.rows[i].title=Remark;
else mtab.rows[i].title="";

}
else{
mtab.rows[i].cells[j].innerHTML= boyScore(tstar+1,tpada,i,j,caste,libval);
remind=reminder(i,j,tstar+1);

if(Remark!="") mtab.rows[i].title=Remark;
else mtab.rows[i].title="";

}
if (mtab.rows[i].cells[j].innerHTML== "OK" || mtab.rows[i].cells[j].innerHTML== "Sakuna"){
mtab.rows[i].cells[j].style.color="#006400";
mtab.rows[i].cells[j].style.backgroundColor = "#CEF6D8";
}else{
mtab.rows[i].cells[j].style.color="#8C4510";
mtab.rows[i].cells[j].style.backgroundColor = "#FFF7E7";
}
}cy=0;}

}



if (opt>=3){

$("#tabh2").hide();
$("#tabh3").hide();
$("#tabh1").show();
$("#rem1").hide();
$("#rem2").show();
var mtab =  document.getElementById("tabhash");
mtab.rows[0].cells[0].innerHTML= "Star";
mtab.rows[0].cells[1].innerHTML= "Pada";
mtab.rows[0].cells[2].innerHTML= "Result";
mtab.rows[0].cells[3].innerHTML= "Remark";
for (var i=1;i<109;i++){
//for (var j=0;j<2;j++){
Remark="";

if (rc=="Boy"){
stcnt = StarDiff(tstar+1,sv);
pdcnt = (110-padaDiff(stcnt,pv,tpada));
brasi = rasiCal(tstar+1,tpada);
grasi = rasiCal(sv,pv);
rasidiff = rasiDiff(grasi,brasi);
var d;
switch(opt){
case 3:
d = Dina(stcnt,tstar+1,sv,tpada,pv,pdcnt,brasi,grasi);
break;
case 4:
d = Gana(tstar+1, sv, stcnt);
break;
case 5:
d = Mahendra(stcnt);
break;
case 6:
d = SthreeDheerga(stcnt);
break;
case 7:
d = Yoni(tstar+1, sv);
break;
case 8:
d = rasi(sv,tstar+1);
break;
case 9:
d = rasiAdhipathy(brasi,grasi);
break;
case 10:
d = vashyam(brasi,grasi);
break;
case 11:
d = rajju(tstar+1, sv);
break;
case 12:
d= vedha(tstar+1, sv);
break;
case 13:
d= nadi(caste, tstar+1, sv);
break;
case 14:
d=boyScore(sv, pv, tstar+1, tpada, caste, libval); 
Remark=NirnayaStr;
break;
}

}
else {
stcnt = StarDiff(sv,tstar+1);
pdcnt = 110-padaDiff(stcnt,tpada,pv);
grasi = rasiCal(tstar+1,tpada);
brasi = rasiCal(sv,pv);
rasidiff = rasiDiff(grasi,brasi);
var d; // = Dina(stcnt,sv,tstar+1,pv,tpada,pdcnt,brasi,grasi);
switch(opt){
case 3:
d = Dina(stcnt,sv,tstar+1,pv,tpada,pdcnt,brasi,grasi);
break;
case 4:
d = Gana(sv,tstar+1,  stcnt);
break;
case 5:
d = Mahendra(stcnt);
break;
case 6:
d = SthreeDheerga(stcnt);
break;
case 7:
d = Yoni(sv, tstar+1);
break;
case 8:
d = rasi(tstar+1,sv);
break;
case 9:
d = rasiAdhipathy(brasi,grasi);break;
case 10:
d = vashyam(brasi,grasi);
break;
case 11:
d = rajju(sv,tstar+1);
break;
case 12:
d= vedha(sv,tstar+1);
break;
case 13:
d= nadi(caste,sv,tstar+1);
break;
case 14:
d=boyScore(tstar+1, tpada, sv, pv,  caste, libval); 
Remark=NirnayaStr;
break;
}
}
if (d=="OK") mtab.rows[i].style.color =	"#556B2F";
else mtab.rows[i].style.color = "#8C4510";
mtab.rows[i].cells[0].innerHTML= nakshatra[sv-1];
mtab.rows[i].cells[1].innerHTML= pv;
mtab.rows[i].cells[2].innerHTML= d;
mtab.rows[i].cells[3].innerHTML= Remark +' '+pdcnt;
//}

pv += 1;
if (pv>4){pv=1;sv +=1;}

}
}
}
var ResultSet = new Array(27); var PadaSet = new Array(27);

function BoyList(BG12){
var StarList; 
var BS; var BP;  var Str; var Caste
var GS; var GP;
var  i; var j;
var temp="";
if (lang==1) 
StarList = nakshatra.slice();
else StarList = naksTamil.slice();

BS = tstar+1;
BP = tpada;

Caste = caste;
Str = libval;
for (i=0;i<27;i++){
for (j=0;j< 4;j++){
if (BG12==1){
if (boyScore(i+1, j + 1, BS, BP, Caste, Str,BG12) == "Not OK")
temp = temp;
else{
if (boyScore(i + 1, j + 1, BS, BP, Caste, Str,BG12) == "Sakuna")
temp = temp + (j + 1) + "(S),";
else
temp = temp + (j + 1) + ",";
}}
else{

if (boyScore(BS, BP, i+1, j + 1, Caste, Str,BG12) == "Not OK")
temp = temp;
else{
if (boyScore(BS, BP,i + 1, j + 1,  Caste, Str,BG12) == "Sakuna")
temp = temp + (j + 1) + "(S),";
else
temp = temp + (j + 1) + ",";
}


}

if (temp == ""){
PadaSet[i] = temp;
ResultSet[i] = "";}
else{
PadaSet[i] = Left(temp, Len(temp) - 1);
ResultSet[i] = StarList[i];}

}
temp = "";
}
}

function boyScore(GStarNo, GPadaNo, BStarNo, BPadaNo, CasteVal, StrVal,BG12) {
var BGDiff ; var GBdiff ; var PadaCnt ; var br ; var GR ;
var DinaVal ; var GanaVal ; var MaheVal ; var SDheeVal ; var YoniVal ;
var RasiVal ; var RAdhVal ; var VashVal ; var RajjVal ; var VedhVal ;
var SumVal ;
//BGDiff = StarDiff(GStarNo, BStarNo)
BGDiff = StarDiff(BStarNo, GStarNo);
GBdiff = StarDiff(GStarNo, BStarNo);
if(BG12==1)
PadaCnt = 110-padaDiff(BGDiff, BPadaNo, GPadaNo);
else
PadaCnt = 110-padaDiff(BGDiff, GPadaNo, BPadaNo);
br = rasiCal(BStarNo, BPadaNo);
GR = rasiCal(GStarNo, GPadaNo);
DinaVal = StrToVal(Dina(BGDiff, BStarNo, GStarNo, BPadaNo, GPadaNo, PadaCnt, br, GR));
GanaVal = StrToVal(Gana(BStarNo, GStarNo, BGDiff));
MaheVal = StrToVal(Mahendra(GBdiff));
SDheeVal = StrToVal(SthreeDheerga(GBdiff));
YoniVal = StrToVal(Yoni(BStarNo, GStarNo));
RasiVal = StrToVal(rasi(GR, br));
RAdhVal = StrToVal(rasiAdhipathy(br, GR));
VashVal = StrToVal(vashyam(br, GR));
RajjVal = StrToVal(rajju(BStarNo, GStarNo));
VedhVal = StrToVal(vedha(BStarNo, GStarNo));
SumVal = DinaVal + GanaVal + MaheVal + SDheeVal + YoniVal + RasiVal 
           + RAdhVal + VashVal + RajjVal + VedhVal;
BoyScore = nirnayam(StrVal, SumVal, CasteVal, DinaVal, GanaVal, RasiVal, YoniVal, RajjVal,br,GR,RAdhVal);
NirnayaStr = BoyScore;

if (Right(BoyScore, 8) == "s match.") {
BoyScore = "OK";
}
if (Right(BoyScore, 8) == "t match.") {
BoyScore = "Not OK";
}
if (Right(BoyScore, 7) == "Sakuna.") {
BoyScore = "Sakuna";
}

return BoyScore;
}

function girlScore(GStarNo,GPadaNo, BStarNo, BPadaNo, CasteVal, StrVal){
var GirlScore = boyScore(BStarNo, BPadaNo, GStarNo, GPadaNo, CasteVal, StrVal);
return GirlScore;
}

function StrToVal(Str){
var strToVal=Str.toUpperCase()==="OK"? 1 : Str.toUpperCase()==="EXCEPTION"? .5 : 0;
return strToVal;
}

function Len(str){
return str.length;
}

function rasiAdhipathy(BRasiNo, GRasiNo) {
var BGfne; var GBfne; var RasiAdhipathy="";
BGfne = "E";
GBfne = "E";

switch (GRasiNo){
case 1:
if (IsItOK(BRasiNo, [4, 5, 9, 12])) BGfne = "F"; break;
case 2:
if (IsItOK(BRasiNo, [3, 6, 10, 11])) BGfne = "F"; break;
case 3:
if (IsItOK(BRasiNo, [2, 5, 7])) BGfne = "F"; break;
case 4:
if (IsItOK(BRasiNo, [3, 5, 6])) BGfne = "F"; break;
case 5:
if (IsItOK(BRasiNo, [1, 4, 8, 9, 12])) BGfne = "F"; break;
case 6:
if (IsItOK(BRasiNo, [5, 2, 7])) BGfne = "F"; break;
case 7:
if (IsItOK(BRasiNo, [3, 6, 10, 11])) BGfne = "F"; break;
case 8:
if (IsItOK(BRasiNo, [4, 5, 9, 12])) BGfne = "F"; break;
case 9:
if (IsItOK(BRasiNo, [1, 4, 5, 8])) BGfne = "F"; break;
case 10:
if (IsItOK(BRasiNo, [2, 3, 6, 7])) BGfne = "F"; break;
case 11:
if (IsItOK(BRasiNo, [2, 3, 6, 7])) BGfne = "F"; break;
case 12:
if (IsItOK(BRasiNo, [1, 4, 5, 8])) BGfne = "F"; break;
}

switch (BRasiNo){
case 1:
if (IsItOK(GRasiNo, [4, 5, 9, 12]))  GBfne = "F"; break;
case 2:
if (IsItOK(GRasiNo, [3, 6, 10, 11])) GBfne = "F"; break;
case 3:
if (IsItOK(GRasiNo, [2, 5, 7])) GBfne = "F"; break;
case 4:
if (IsItOK(GRasiNo, [3, 5, 6])) GBfne = "F"; break;
case 5:
if (IsItOK(GRasiNo, [1, 4, 8, 9, 12])) GBfne = "F"; break;
case 6:
if (IsItOK(GRasiNo, [5, 2, 7])) GBfne = "F"; break;
case 7:
if (IsItOK(GRasiNo, [3, 6, 10, 11])) GBfne = "F"; break;
case 8:
if (IsItOK(GRasiNo, [4, 5, 9, 12])) GBfne = "F"; break;
case 9:
if (IsItOK(GRasiNo, [1, 4, 5, 8])) GBfne = "F"; break;
case 10:
if (IsItOK(GRasiNo, [2, 3, 6, 7])) GBfne = "F"; break;
case 11:
if (IsItOK(GRasiNo, [2, 3, 6, 7])) GBfne = "F"; break;
case 12:
if (IsItOK(GRasiNo, [1, 4, 5, 8])) GBfne = "F"; break;
}

switch (GRasiNo){
case 1:
if (IsItOK(BRasiNo, [2, 7, 10, 11])) BGfne = "N"; break;
case 2:
if (IsItOK(BRasiNo, [1, 7, 9, 12])) BGfne = "N"; break;
case 3:
if (IsItOK(BRasiNo, [1, 8, 9, 10, 11, 12])) BGfne = "N"; break;
case 4:
if (IsItOK(BRasiNo, [1, 2, 7, 8, 9, 10, 11, 12])) BGfne = "N"; break;
case 5:
if (IsItOK(BRasiNo, [3, 6])) BGfne = "N"; break;
case 6:
if (IsItOK(BRasiNo, [1, 8, 9, 10, 11, 12])) BGfne = "N"; break;
case 7:
if (IsItOK(BRasiNo, [1, 7, 9, 12])) BGfne = "N"; break;
case 8:
if (IsItOK(BRasiNo, [2, 7, 10, 11])) BGfne = "N"; break;
case 9:
if (IsItOK(BRasiNo, [10, 11])) BGfne = "N"; break;
case 10:
if (IsItOK(BRasiNo, [9, 12])) BGfne = "N"; break;
case 11:
if (IsItOK(BRasiNo, [9, 12])) BGfne = "N"; break;
case 12:
if (IsItOK(BRasiNo, [10, 11])) BGfne = "N"; break;
}

switch (BRasiNo){
case 1:
if (IsItOK(GRasiNo, [2, 7, 10, 11])) GBfne = "N"; break;
case 2:
if (IsItOK(GRasiNo, [1, 7, 9, 12])) GBfne = "N"; break;
case 3:
if (IsItOK(GRasiNo, [1, 8, 9, 10, 11, 12])) GBfne = "N"; break;
case 4:
if (IsItOK(GRasiNo, [1, 2, 7, 8, 9, 10, 11, 12])) GBfne = "N"; break;
case 5:
if (IsItOK(GRasiNo, [3, 6])) GBfne = "N"; break;
case 6:
if (IsItOK(GRasiNo, [1, 8, 9, 10, 11, 12])) GBfne = "N"; break;
case 7:
if (IsItOK(GRasiNo, [1, 7, 9, 12])) GBfne = "N"; break;
case 8:
if (IsItOK(GRasiNo, [2, 7, 10, 11])) GBfne = "N"; break;
case 9:
if (IsItOK(GRasiNo, [10, 11])) GBfne = "N"; break;
case 10:
if (IsItOK(GRasiNo, [9, 12])) GBfne = "N"; break;
case 11:
if (IsItOK(GRasiNo, [9, 12])) GBfne = "N"; break;
case 12:
if (IsItOK(GRasiNo, [10, 11])) GBfne = "N"; break;

}

if (BGfne == "F" && GBfne == "F") {
RasiAdhipathy = "OK";
Remark = "Friendship - Uthamam.";
}

if ((BGfne == "F" && GBfne == "N") || (BGfne == "N" && GBfne == "F")) {
RasiAdhipathy = "OK";
Remark = "Friendship - Uthamam."
}
if (BGfne == "N" && GBfne == "N") {
RasiAdhipathy = "OK";
Remark = "Friendship - Madhyamam."
}
if ((BGfne == "F" && GBfne == "E") || (BGfne == "E" && GBfne == "F")) {
RasiAdhipathy = "OK";
Remark = "Friendship - Madhyamam."
}
if (BGfne == "E" && GBfne == "E") {
RasiAdhipathy = "Not OK";
Remark = "Mutual Enemies.";
}
if ((BGfne == "E" && GBfne == "N") || (BGfne == "N" && GBfne == "E")) {
RasiAdhipathy = "Not OK";
Remark = "Enemy Relationship.";
}
return RasiAdhipathy;

}

function nirnayam2(LibVal, Poruttham, Caste, DinaVal, GanaVal, RasiVal, YoniVal, RajjuVal,brasi,grasi,rsadpval) { 

radpval=rsadpval;
var Nirnayam="";
var Moderated=0; var OrigPoruttham =0;
var OKStatus =true; 
var MinMark =0;
MinMark = 5;
OrigPoruttham = Poruttham;
Moderated = 0;
OKStatus = false;


if (LibVal == 2) Moderated = moderate(brasi,grasi,radpval);

if (Moderated > 0) {
if (RajjuVal == 0) {
RajjuVal = 1;
Poruttham = Poruttham + 1;
}
if (GanaVal == 0) {
GanaVal = 1;
Poruttham = Poruttham + 1;
}
if (RasiVal == 0) {
RasiVal = 1;
Poruttham = Poruttham + 1;
}
}

if (RajjuVal == 0 && LibVal == 1) {
Nirnayam = "Horoscopes do not match.";
return Nirnayam;
}

switch (Caste){
case 1:
if (DinaVal == 0 || RajjuVal == 0) {
Nirnayam = "Horoscopes do not match."; 
} break;
case 2:
if (GanaVal == 0 || RajjuVal == 0) {
Nirnayam = "Horoscopes do not match.";
} break;
case 3:
if (RasiVal == 0 || RajjuVal == 0) {
Nirnayam = "Horoscopes do not match.";
} break;
case 4:
if (YoniVal == 0 || RajjuVal == 0) {
Nirnayam = "Horoscopes do not match."; 
} break;
case 5:
MinMark = 6; break;
}


if (Poruttham < (MinMark-.5)) 
Nirnayam = "Horoscopes do not match.";
else {
switch (Moderated){
case 0:
if (Nirnayam == ""  ) {
Nirnayam = "You may proceed. Same Rasi / Lord.  Horoscopes match."; 
OKStatus = true;}
break;
case 1:
Nirnayam = "Rasi Lords  are same. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match.";
OKStatus = true; break;
case 2:
Nirnayam = "RasiAdhipathis are compatible. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match."
OKStatus = true; break;
case 3:
Nirnayam = "Sama-Sapthama Rasis are compatible. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match.";
OKStatus = true; break;
}

}
//alert(DinaVal+' '+Moderated+' '+OKStatus+Nirnayam);

if (OKStatus) {
if (OrigPoruttham <= MinMark) {
switch (Moderated) {
case 0:
Nirnayam = "Horoscopes match. However proceed after observing Sakuna."; break;
case 1:
Nirnayam = "Rasis are same. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match. However observe Sakuna."; break;
case 2:
Nirnayam = "RasiAdhipathis are compatible. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match.However observe Sakuna."; break;
case 3:
Nirnayam = "Sama-sapthami Rasis compatible. No Gana,Rajju,Rasi,Yoni doshas.Horoscopes match.However observe Sakuna."; break;
}
}

}

return Nirnayam;
}


function sakuna(){
$.mobile.navigate( "#page03", { transition : "slide", info: "Inputpage" });
var SakunVal = Math.floor((Math.random() * 55) + 1); 
var SakunaList= ["Virgin",	"Milk",	"Curd",	"Flower",	"Fruits",	"Elephant",	"Horse",	"Brahmins",	"Neechan",	"Fire",	"Two Purna Kumbhas",	"Ox",	"Lotus",	"Sandal Paste",	"Grains",	"Puffed Rice",	"Cooked Food",	"Dead body",	"Dancer",	"Pearl Garland",	"Hand Fan",	"Yellowed Rice",	"Sesame",	"Ironed Dhoti",	"Lady with a child",	"Cow with calf",	"Ghee",	"Milk",	"Good words spoken",	"Garuda goes left",	"Vulture goes left",	"Eagle goest left",	"Crow goes right",	"Peacock goes right",	"Parrot goes right",	"Dove goes right",	"Butter Milk",	"Oiled Head",	"Unfurled locks",	"Man with Jata",	"Man with sniped nose",	"Wanderer",	"Potter",	"Blood red flower",	"Wet Dhoti",	"Pig",	"Salt",	"Slipping",	"Garments slipping",	"Crying",	"Snake",	"Rabbit",	"Riots",	"Sneeze",	"Ominous words spoken"];
var SakunaMsg = SakunaList[SakunVal-1];
if (SakunVal <= 36) {
Ele("sakdiv").innerHTML= "Hey! :  " + SakunaMsg + "  !!<br><br>"; 
Ele("sakdiv").align =   "center";
Ele("sakdiv").style.backgroundColor = "#CEF6D8";
Ele("sakdiv").style.color = "#0B610B";
Ele("sakdiv").style.fontWeight = "bold";
Ele("f4").innerHTML="Omens are favourable. You may proceed.";}
else{ 
Ele("sakdiv").innerHTML=  "Ooph.. : " + SakunaMsg + "  ??<br><br>"; 
Ele("sakdiv").align =   "center";
Ele("sakdiv").style.backgroundColor = "#FFF7E7";
Ele("sakdiv").style.color = "#8C4510";
Ele("sakdiv").style.fontWeight = "bold";
Ele("f4").innerHTML="Omens are not favourable. You may try some other time."; 
}
return true;
}
function Ele(id){
return document.getElementById(id);
}
//alert(Pada88Star(13,1));
//alert(nakshatra[Pada88StarG(7, 3)-1]);
//alert(Right(rajjuCal(4),6)+' '+Right(rajjuCal(6),6));

class Excercise{
  constructor (title, number){
  this.title = title;
  this.number = number;
  }
  
  
}

var ladder = [
[0,"bend","situp","leglift","pushup","RunandJump"],
[1,2,3,4,2,105],
[2,3,4,5,3,140],
[3,4,6,6,3,170],
[4,6,7,8,4,200],
[5,7,9,9,5,225],
[6,8,10,10,6,255],
[7,10,11,12,7,280],
[8,12,13,14,8,305],
[9,14,15,16,9,325],
[10,16,16,18,11,350],
[11,18,18,20,12,370],
[12,20,20,22,13,390],
[13,23,21,25,15,405],
[14,25,23,27,16,425],
[15,28,25,30,18,440],
[16,14,10,12,9,340],
[17,15,11,14,10,355],
[18,16,12,16,11,375],
[19,18,13,17,12,390],
[20,19,14,19,13,405],
[21,21,15,21,14,420],
[22,22,16,23,15,435],
[23,24,17,25,16,445],
[24,25,18,27,17,460],
[25,27,20,29,18,470],
[26,29,21,31,19,480],
[27,31,23,33,20,490],
[28,33,24,36,21,500],
[29,34,26,38,22,510],
[30,36,28,40,23,515],
[31,38,29,43,24,525],
[32,40,31,45,25,530],
[33,43,33,48,26,535],
[34,45,35,51,27,540],
[35,47,37,54,28,540],
[36,49,39,56,29,545],
[37,51,41,59,30,545],
[38,54,43,62,31,545],
[39,56,46,65,32,550],
[40,59,48,68,33,555],
[41,61,50,72,34,555],
[42,64,53,75,35,555],
[43,66,55,78,36,560],
[44,69,58,81,37,560],
[45,72,61,85,38,560],    
[46,74,64,88,39,575],
[47,77,66,92,40,575],
[48,80,69,96,41,575]
];


var objSelect = document.getElementById("select");
var fragment = document.createDocumentFragment();

ladder.forEach(function(indexnum){
    if (indexnum[0]>0) {
    var opt = document.createElement('option');
    opt.innerHTML = indexnum[0];
    opt.value = indexnum[0];
    fragment.appendChild(opt);
  };
});

objSelect.appendChild(fragment);

function calculaterung(){
  var rung = objSelect.value;
  
  var Bend = new Excercise("Bend",ladder[rung]1))
  
  var Situp = new Excercise("Situps",ladder[rung]2)
  var Leglift = new Excercise("Leg Lifts",ladder[rung]3)
  var Pushup = new Excercise("Leg Lifts",ladder[rung]4)
  var RunandJump = new Excercise("Leg Lifts",ladder[rung]5)

}
  
  

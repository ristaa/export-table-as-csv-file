var dataArr = [];

var headingsArr = [];
var table = document.getElementsByTagName('table');
var tableRowsAll = table[0].getElementsByTagName('tr');

var tableHead = tableRowsAll[0];
var headings = tableHead.getElementsByTagName('th');

// get heading elements
for(var i=0; i<headings.length; i++){
  headingsArr.push(headings[i].innerHTML);
}
dataArr.push(headingsArr);

// get all rows except heading
var cellsInfo;
var tableRows = [];
console.log(tableRowsAll);
for(var r=1;r<tableRowsAll.length;r++){
  tableRows.push(tableRowsAll[r]);
}

var j=0;

while(j<tableRows.length){
  var rowArr = [];
  cellsInfo = tableRows[j].getElementsByTagName('td');
  
  for(var k=0; k<cellsInfo.length; k++){
    rowArr.push(cellsInfo[k].innerHTML);
  }
  dataArr.push(rowArr);
  j++;
}

// create csv content
var data = dataArr;
var csvContent = "data:text/csv;charset=utf-8,";
data.forEach(function(infoArray, index){

   dataString = infoArray.join(",");
   csvContent += index < data.length ? dataString+ "\n" : dataString;

}); 

// Save as .csv function
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
link.innerHTML = "Save as .CSV";
document.body.appendChild(link); // Required for FF
function superbowlWin(array){
    const win = array.find(point=> point.result ==="W")
return win ? win.year: undefined;
}
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
const result = superbowlWin(record)
console.log(result)

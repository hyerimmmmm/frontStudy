// weekNum과 일치하는 요일명을 판단한다.
let weekName = "";
let weekNum = 3;

switch (weekNum) {
    case 0:
        weekName = "Sunday";
        break;
    case 1:
        weekName = "Monday";
        break;
    case 2:
        weekName = "Tuesday";
        break;
    case 3:
        weekName = "Wednesday";
        break;
    case 4:
        weekName = "Thursday";
        break;
    case 5:
        weekName = "Friday";
        break;
    case 6:
        weekName = "Saturday";
        break;
    default:
        weekName = "unknown";
        break;
}
console.log(weekName); // Wednesday
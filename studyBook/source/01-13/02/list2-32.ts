enum Weekday {
    Sunday = 1,
    Monday = 2,
    Tuesday = 4,
    Wednesday = 8,
    Thursday = 16,
    Friday = 32,
    Saturday = 64
}
	
const wd: Weekday = Weekday.Thursday;
console.log(wd);    // 16을 출력한다.
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

let s = '12:01:00PM'
// Return '12:01:00'.
let s2 = '12:01:00AM'
// Return '00:01:00'.

function timeConversion (s) {
    let amPm = s.charAt(8);
    let militaryHour = "";
    if(amPm == "A"){
        if(s.substring(0,2) == "12") {
            militaryHour = "00"
        }else {
            militaryHour = s.substring(0,2)
        }
    }else { // 'P'
        if(s.substring(0,2) == '12'){
            militaryHour = s.substring(0,2)
        }else {
            militaryHour = parseInt(s.substring(0,2), 10) + 12
        }
    }
    console.log(militaryHour + s.substring(2,8)) 
    
}

timeConversion(s)
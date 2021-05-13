// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
export default function convertTimestamp (unix_timestamp_in_seconds) {
    var monthTextList = [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12'
    ];
    var weekdays = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy"
    ]
    // Convert timeStamp in to miliseconds
    let date = new Date(unix_timestamp_in_seconds * 1000);
    let now = new Date();
    // Caculate the duration from timeStamp until now
    let getDurationToNow = () => {
        let duration = new Date(now.getTime() - date.getTime());
        return {
            daysAgo: duration.getUTCDate() - 1,
            hoursAgo: duration.getUTCHours(),
            minutesAgo: duration.getUTCMinutes(),
            secondsAgo: duration.getUTCSeconds()
        }
    }
    // Get month, year, and the date
    let year = date.getFullYear();
    let monthText = monthTextList[date.getMonth()];
    let monthNumber = date.getMonth() + 1
    let day = date.getDate();
    // Get the weekday
    let weekday = weekdays[day];
    // Hours part from the timestamp
    let hours = "0" + (date.getHours() > 12 ? date.getHours() - 12 : date.getHours());
    let session = date.getHours() > 12 ? "PM" : "AM"; // get the session in a day
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    // Time formatted (HH:MM:SS)
    let formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " " + session + " UTC+7";
    let formattedDate = day + "/" + monthNumber + "/" + year;
    return {
        getDurationToNow: getDurationToNow,
        formattedTime: formattedTime,
        formattedDate: formattedDate,
        year: year,
        month: monthText,
        monthNumber: monthNumber,
        date: day,
        weekday: weekday,
        weekdayAsNumber: day,
        hoursAs_12: hours,
        hoursAs_24: date.getHours(),
        minutes: minutes,
        seconds: seconds
    };
}
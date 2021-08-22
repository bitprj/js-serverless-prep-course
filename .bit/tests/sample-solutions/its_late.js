function running_late(date_str) {
    const date = new Date(date_str);

    if (date.getHours() >= 22) {
        return "It is late!"
    }
    return "It is still early!"
}

let test_str = "December 17, 1995 22:24:00"
console.log(running_late(test_str))
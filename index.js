function countDown() {
    const birthday = new Date("May 6, 2023 00:00")
    //const birthday = new Date("September 16, 2022 10:03")
    const nowDay = new Date()
    const diff = birthday - nowDay

    const msInSecond = 1000
    const msInMinute = 60 * 1000
    const msInHour = 60 * 60 * 1000
    const msInDay = 24 * 60 * 60 * 1000

    const displayDay = Math.floor(diff/msInDay)
    document.querySelector(".days").textContent = displayDay

    const displayHours = Math.floor((diff%msInDay)/msInHour)
    document.querySelector(".hours").textContent = displayHours

    const displayMinutes = Math.floor((diff%msInHour)/msInMinute)
    document.querySelector(".minutes").textContent = displayMinutes

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond)
    document.querySelector(".seconds").textContent = displaySecond

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0
        document.querySelector(".hours").textContent = 0
        document.querySelector(".minutes").textContent = 0
        document.querySelector(".seconds").textContent = 0
        clearInterval(timeID)
        happyDay()
    }


    console.log(displayDay, displayHours, displayMinutes, displaySecond)
}

let timeID = setInterval(countDown, 1000)

function happyDay() {
    const newHeading = document.querySelector("h1")
    newHeading.textContent = "Happy Birthday Natallia!"
    newHeading.classList.add("headigColor")

    const period = document.querySelectorAll(".block")
    period.forEach(item => {
        item.querySelector("h3").classList.add("periodColor")
        item.querySelector("h4").classList.add("periodColor")
    })
}
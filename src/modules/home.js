function loadHome() {
const cont = document.getElementById("content");
const header = document.createElement('div');
header.className = 'header';
header.innerHTML = `
<p>Doughnut Worry, Be Happy</p>
`
const quote = document.createElement('div');
quote.className = 'quote';
quote.innerHTML= `
<p>Life's better with sprinkles - donut you agree?</p>
`

const hours = document.createElement('div');
hours.className = 'hours';
const hoursHeading = document.createElement('h3');
hoursHeading.textContent = 'Hours';
hours.appendChild(hoursHeading);
const weekdays = [
    {
        day: 'Monday',
        hours: '8am - 5pm'
    },

        {
        day: 'Tuesday',
        hours: '8am - 5pm'
    },

    {
        day: 'Wednesday',
        hours: '8am - 5pm'
    },

    {
        day: 'Thursday',
        hours: '8am - 5pm'
    },

    {
        day: 'Friday',
        hours: '8am - 5pm'
    },

    {
        day: 'Saturday',
        hours: '8am - 12pm'
    },

    {
        day: 'Sunday',
        hours: 'Closed'
    },

]

weekdays.forEach(item  => {
    const day = document.createElement('p');
    day.innerHTML = `
    <div class="day">
    <p>${item.day}</p> 
    <p>${item.hours}</p>
    </div>
    `
    hours.appendChild(day);
})

const location = document.createElement('div')
location.className = 'location';

location.innerHTML = `
<h2>Location</h2>
<p>The Land of Dough</p>
`

cont.appendChild(header);

cont.appendChild(quote);

cont.appendChild(hours);

cont.appendChild(location);

}
export default loadHome;



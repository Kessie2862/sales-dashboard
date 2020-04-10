$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
    })
})

let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Philosopher';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#1e1e1e';

let massPopChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['November', 'December', 'January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Chart showing Sales per Month since November 2019(Amt in Gh Cedis)',
            data: [
                74000,
                89032,
                80001,
                65000,
                32120,
                18521
            ],
            backgroundColor: [
                '#1bb4da',
                '#b5006b',
                '#027dfb',
                '#511fc7',
                '#2d952d',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: '#1e1e1e'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Sales Dashboard',
            fontSize: 25
        },
        legend: {
            display: 'true',
            labels: {
                fontColor: '#000'
            }
        }
    }
});
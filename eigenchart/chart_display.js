
var canvas = document.getElementById('eigenchart_canvas');

var initial_data = {
    labels: chartDecor.labels,
    datasets: [{
        label: "",
        data: [-4.95, 11.64 , -6.77, -0.63, 0.20],
        fill: false,
        backgroundColor: 'rgba(77, 75, 140, 0.2)',
        borderColor: 'rgb(77, 75, 140)',
        pointBackgroundColor: 'rgb(77, 75, 140)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(77, 75, 140)'
        }
    ]
};

var chart = new Chart(canvas, {
    type: 'radar',
    data: initial_data,
    options: {
        line: {
            borderWidth: 2
        },
        scale: {
            r: {
                beginAtZero: true,
                max: 25.0,
                min: -25.0,
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Sadness",
                color: `rgb(${chartDecor.rgb_vals.sadness})`,
                font: {
                    size: 24 
                }
            },
            legend: {
                display: false,
            }
        },
    }
});

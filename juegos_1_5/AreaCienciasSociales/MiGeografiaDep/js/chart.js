

var circlemapConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        labels: [
            {
                render: 'label',
                fontColor: '#000',
                position: 'outside'
            },
            {
                render: 'percentage'
            }
        ]
    },
    legend: {
        display: true,
        position: 'bottom',
    }
};

/*var circlemapConfig =  {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: false,
        //text: 'Recommended Daily Diet',
        position: 'top',
        fontSize: 16,
        fontColor: '#111',
        padding: 20
    },
    legend: {
        display: false,
        position: 'bottom',
        labels: {
            boxWidth: 20,
            fontColor: '#111',
            padding: 15
        }
    },
    tooltips: {
        enabled: false
    },
    plugins: {
        datalabels: {
            color: '#111',
            textAlign: 'center',
            font: {
                lineHeight: 1.6
            },
            formatter: function(value, circlemap) {
                return value + '%';
            }
        },
        labels: [
            {
                render: 'label',
                position: 'outside'
            },

        ]

    }
}*/




var circleMapData = {
    labels: ['Gob', 'Inter', ' Org nal Pri', 'Org nal Pub', 'Mun'],
    datasets: [{
        data: [],
        backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
        borderWidth: 0.5 ,
        borderColor: '#ddd'
    }]
};

var circlemap = document.getElementById('circlemap').getContext('2d');
var circlemapChart = new Chart(circlemap, {
    type: 'pie',
    data: circleMapData,
    options : circlemapConfig,
});







function createChart(id, type, options) {
    var data = {
        labels: ['January', 'February', 'March'],
        datasets: [
            {
                label: 'My First dataset',
                data: [50445, 33655, 15900],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }
        ]
    };

    new Chart(document.getElementById(id), {
        type: type,
        data: data,
        options: options
    });

}






var donutOptions1 = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: true,
        //text: 'Recommended Daily Diet',
        position: 'top',
        fontSize: 16,
        fontColor: '#111',
        padding: 20
    },
    cutoutPercentage: 40,
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            pointStyle: 'circle',
            usePointStyle: true,
            fontColor: '#960303',
        }
    },
    tooltips: {
        enabled: false,
        custom: function(tooltipModel) {
            // Tooltip Element
            var tooltipEl;
            switch (typeDefault){
                case 1:{
                     tooltipEl = document.getElementById('circlemap1-tooltip');
                    break
                }
                case 2:{
                    tooltipEl = document.getElementById('circlemap1-tooltip1');
                    break;
                }
            }


            tooltipEl.classList.add("active");

            function getBody(bodyItem) {
                return bodyItem.lines;
            }

            // Set Text
            if (tooltipModel.body) {
                var titleLines = tooltipModel.title || [];
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = '<thead>';
                let url = "";
                titleLines.forEach(function(title) {
                    innerHtml += '<tr><th>' + title + '</th></tr>';
                    if(title.toLowerCase().includes("economico")){
                        url = "https://federaciondecafeteros.org/sostenibilidad/eje-economico/";
                    }else if(title.toLowerCase().includes("social")){
                        url = "https://federaciondecafeteros.org/sostenibilidad/eje-social/";
                    }
                    else if(title.toLowerCase().includes("gobernaza")){
                        url = "https://federaciondecafeteros.org/sostenibilidad/eje-gobernaza/";
                    }
                    else if(title.toLowerCase().includes("ambiental")){
                        url = "https://federaciondecafeteros.org/sostenibilidad/eje-ambiental/";
                    }
                });
                innerHtml += '</thead><tbody>';
                console.log(bodyLines);
                let html = "<hr><span>Buscamos Contribuir a la rentabilidad del caficultor" +
                    "<br>" +
                    "<a style='font-size: 12px; text-decoration: none; color: #ffffff' href='"+url+"' target='_blank'>Enlace a la selección Sostenibilidad</a></span><hr>";
                bodyLines.forEach(function(body, i) {
                    var colors = tooltipModel.labelColors[i];
                    var style = 'background:' + colors.backgroundColor;
                    style += '; border-color:' + colors.borderColor;
                    style += '; border-width: 2px';
                    var span = '<span style="' + style + '"></span>';
                    innerHtml += '<tr><td>' + span + html + '</td></tr>';
                });
                innerHtml += '</tbody>';

                var tableRoot = tooltipEl.querySelector('table');
                tableRoot.innerHTML = innerHtml;
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect();
            tooltipEl.style.zIndex = "100000";


        },
        callbacks: {
            title: function(tooltipItem, data) {
                return  ("Eje"+" "+data['labels'][tooltipItem[0]['index']]).toUpperCase();
            },
            label: function(tooltipItem, data) {
                return data['datasets'][0]['data'][tooltipItem['index']];
            },
            afterLabel: function(tooltipItem, data) {

                var dataset = data['datasets'][0];
                var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][1]['total']) * 100)
                return '(' + percent + '%)';
            }
        },
        backgroundColor: '#FFF',
        titleFontSize: 16,
        titleFontColor: '#0066ff',
        bodyFontColor: '#000',
        bodyFontSize: 14,
        displayColors: false
    },
    plugins: {
        labels: [
            {
                render: 'label',
                position: 'outside'
            },
            {
                render: 'percentage'
            }
        ]
    }
};
var chDonutData1 = {
    labels: ['AMBIENTAL', 'GOBERNAZA', 'ECONOMICO','SOCIAL'],
    datasets: [
        {
            backgroundColor: colors.slice(0,3),
            borderWidth: 1,
            data: []
        }
    ],

};
var circlemap1Chart;
var circlemap1 = document.getElementById("circlemap1").getContext('2d');
if (circlemap1) {
    circlemap1Chart= new Chart(circlemap1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions1
    });
}










var circlemap3Chart;
var circlemap3;
var chDonut3;
var chDonut3Chart;
var chDonut4;
var chDonut4Chart;

function cargarNewCircle(){


    circlemap3 = document.getElementById('circlemap3').getContext('2d');
    circlemap3Chart = new Chart(circlemap3, {
        type: 'pie',
        data: circleMapData,
        options : circlemapConfig,
    });
    chDonut3 = document.getElementById("circlemap4").getContext('2d');
    if (chDonut3) {
        chDonut3Chart = new Chart(chDonut3, {
            type: 'pie',
            data: chDonutData1,
            options: donutOptions1
        });
    }
}


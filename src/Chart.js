

let ctx = document.getElementById('myChart');
let  myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
                
                
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                
            ],
            borderColor: [
               
                
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    
});
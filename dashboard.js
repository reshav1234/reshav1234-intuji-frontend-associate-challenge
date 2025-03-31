const weeklyData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Income',
      data: [13000, 14500, 11000, 15000, 20000, 16000, 13500],
      borderColor: '#7B68EE',
      backgroundColor: 'rgba(123, 104, 238, 0.1)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Expenses',
      data: [5000, 6000, 5500, 7000, 5000, 6000, 9000],
      borderColor: '#FFA500',
      backgroundColor: 'transparent',
      tension: 0.4,
      fill: false
    }
  ]
};

const monthlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Income',
      data: [50000, 55000, 52000, 58000, 62000, 65000, 70000],
      borderColor: '#7B68EE',
      backgroundColor: 'rgba(123, 104, 238, 0.1)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Expenses',
      data: [30000, 28000, 32000, 29000, 35000, 31000, 33000],
      borderColor: '#FFA500',
      backgroundColor: 'transparent',
      tension: 0.4,
      fill: false
    }
  ]
};

const yearlyData = {
  labels: ['2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Income',
      data: [320000, 350000, 310000, 380000, 420000],
      borderColor: '#7B68EE',
      backgroundColor: 'rgba(123, 104, 238, 0.1)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Expenses',
      data: [220000, 210000, 230000, 240000, 250000],
      borderColor: '#FFA500',
      backgroundColor: 'transparent',
      tension: 0.4,
      fill: false
    }
  ]
};

// Initialize the chart
const ctx = document.getElementById('analyticsChart').getContext('2d');
let analyticsChart;

function createChart(data) {
  // Destroy previous chart if it exists
  if (analyticsChart) {
    analyticsChart.destroy();
  }

  // Create new chart
  analyticsChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(context.parsed.y);
              }
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              if (value >= 1000) {
                return value / 1000 + 'k';
              }
              return value;
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      elements: {
        point: {
          radius: 3,
          hoverRadius: 5
        }
      }
    }
  });
}

// Initial chart display
createChart(weeklyData);

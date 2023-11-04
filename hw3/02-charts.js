const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

const url = 'https://thronesapi.com/api/v2/Characters';
const donutChart = document.querySelector('.donut-chart');

const errorMessage = document.createElement('h2');

const cleanFamilyName = (family) => {
  family = family.replace(/House/, '').trim();
  const cleanFamilyNames = {
    Lanister: 'Lannister',
    None: 'Others',
    Unkown: 'Others',
    Targaryan: 'Targaryen',
    Targaryn: 'Targaryen',
    '': 'Others',
  };
  return cleanFamilyNames[family] || family;
};

const renderChart = (houseLabels, houseValues) => {
  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: houseLabels,
      datasets: [
        {
          label: 'House of Dragons',
          data: houseValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 0,
        },
      ],
    },
    options: {
      legend: {
        position: 'bottom',
      },
    },
  });
};

const calculateHouseMembers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const houseCounts = {};

    data.forEach((character) => {
      const family = cleanFamilyName(character.family);
      if (family in houseCounts) {
        houseCounts[family]++;
      } else {
        houseCounts[family] = 1;
      }
    });

    Object.keys(houseCounts).forEach((house) => {
      if (houseCounts[house] === 1) {
        houseCounts['Others'] = (houseCounts['Others'] || 0) + 1 ;
        delete houseCounts[house];
      }
    });

    const houseLabels = Object.keys(houseCounts);
    const houseValues = Object.values(houseCounts);

    renderChart(houseLabels, houseValues);
  } catch (err) {
    donutChart.remove();
    const chartContainer = document.querySelector('.chartContainer');
    errorMessage.classList.add('text-center');
    errorMessage.innerHTML = 'Data not found. Please check the provided url.';
    chartContainer.appendChild(errorMessage);
  }
};

calculateHouseMembers();

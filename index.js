const info = {"DM":[0,0,0,0,123,0,0,45,0,0,0,43,0,123,0,0,43,0,0,0,0,43,0,0,0,43,0,0,0,0,32,0,0,0,54,0,0,0,232,32,0,212,0,0,43,0,23,0,0,0,12,0],
"TV":[52.2909,26.4449,16.7054,8.7704,3.5397,2.7876,6.7211,2.8077,0.7437,1.0504,1.6137,0.6969,0.5165,0.4017,0.239,0.2001,0.1516,0.0348,0.0443,0.0286,0.0217,0.0181,0.0122,0.0131,0.0031,0.0065,16686.9304,12610.8165,49872.3664,21321.155,33705.2063,54887.3542,32077.976,17994.7266,15847.4785,24065.34,7971.773,3930.3123,3294.6206,1925.8107,2113.6292,2353.2807,448.5209,1307.2341,343.6484,567.8189,405.3052,79.4946,212.0314,81.9343,100.1345,61.209],
"OOH":[0,0,0,0,0,213,0,43,0,0,0,0,0,0,0,0,0,0,40,0,0,0,60,0,0,0,0,100,0,0,0,0,0,0,65,0,0,78,0,0,90,0,0,0,12,0,0,43,0,0,0,0],
"PPC":[5613.5638,4018.1524,2782.8912,2223.0685,859.3159,1092.8524,6106.947,2236.1713,811.9827,1642.5207,5930.5772,2876.2958,3231.4032,3190.6772,2563.7517,4262.5525,4031.1007,682.8778,2327.1964,2100.0363,2425.7081,2369.4146,3155.9515,2829.6594,918.8314,3467.2555,3559.1161,1466.975,4802.0379,1910.0191,2593.348,4772.5789,2503.5062,1633.5984,1994.0311,5839.1324,2152.2181,902.1712,1233.78,1399.3437,2307.5043,3974.9305,942.2388,4584.5575,1802.5456,4606.8556,5108.2835,1111.4571,5088.5189,2394.1285,4773.9491,3483.375]};

loadNames();


const labels = 
[...Array(54).keys()]
const data = {
  labels: labels,
  datasets: [
    {
      label: 'DM',
      data: info.DM,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'OOH',
      data: info.OOH,
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'PPC',
      data: info.PPC,
      borderColor: 'rgb(255, 159, 64)',
      backgroundColor: 'rgb(255, 159, 64)',
    },
    {
      label: 'TV',
      data: info.TV,
      borderColor: 'rgb(153, 102, 255)',
      backgroundColor: 'rgb(153, 102, 255)',
    }
  ]
};





let config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          
        }
      }
    },
  };

  const ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx,config);

  function changeChart(charttype){
      let config = {
          type: charttype,
          data
      };
      if(myChart){
          myChart.destroy();
      }
      myChart = new Chart(ctx,config);
      }
  function updateChart(range){
      const rangeValue = labels.slice(0,range.value);
      console.log(rangeValue);
      myChart.config.data.labels = rangeValue;
      myChart.update()
  };
      
async function loadNames() {
    const response = await fetch('/jstest.json');
    const data = await response.json();

    
        const keys = Object.keys(data);
        const key = keys[0];
        
        const keyValue = data[keys[1]];
        // console.log(key,keyValue);

    }
    




console.log(info.DM)
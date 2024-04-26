//Get context for drawing
      let canvas = window.document.querySelector("canvas");
      let context = canvas.getContext("2d");

      //Function
      const createLineChart = (xData, yData) => {
        let data = {
          labels: xData,
          datasets: [
            {
              label: "Global Price of Aluminum",
              data: yData,
              pointStyle: false,
              borderWidth: 1,
            },
           ],
          };

          let xScaleConfig = {
              
          };

          let yScaleConfig = {
              
          };

        let config = {
          type: "line",
            data: data,
            options: {
                scales: {
                    x: xScaleConfig,
                    y: yScaleConfig,
                }
            }
        };
        let chart = new Chart(context, config);
      };

      //Get data from server
      axios.get("https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo").then((response) => {
        let data = response.data.data;
        let xData = [];
        let yData = [];

          for (let i = data.length - 1; i > 0; i--) {
              if (data[i].value !== '.') {
                  xData.push(data[i].date);
                  yData.push(data[i].value);
            }
        }
        createLineChart(xData, yData);
      });
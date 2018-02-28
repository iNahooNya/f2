(() => {
const data =[
      { country: 'Europe', year: '1750', value: 163, percent: 0.24511278195488723 },
      { country: 'Asia', year: '1750', value: 502, percent: 0.7548872180451128 },
      { country: 'Europe', year: '1800', value: 203, percent: 0.24224343675417662 },
      { country: 'Asia', year: '1800', value: 635, percent: 0.7577565632458234 },
      { country: 'Europe', year: '1850', value: 276, percent: 0.2543778801843318 },
      { country: 'Asia', year: '1850', value: 809, percent: 0.7456221198156682 },
      { country: 'Europe', year: '1900', value: 408, percent: 0.3011070110701107 },
      { country: 'Asia', year: '1900', value: 947, percent: 0.6988929889298893 },
      { country: 'Europe', year: '1950', value: 547, percent: 0.2806567470497691 },
      { country: 'Asia', year: '1950', value: 1402, percent: 0.7193432529502309 },
      { country: 'Europe', year: '1999', value: 729, percent: 0.16708686683474674 },
      { country: 'Asia', year: '1999', value: 3634, percent: 0.8329131331652533 },
      { country: 'Europe', year: '2050', value: 628, percent: 0.10651289009497965 },
      { country: 'Asia', year: '2050', value: 5268, percent: 0.8934871099050203 },
      { country: 'Europe', year: '2100', value: 828, percent: 0.10227272727272728 },
      { country: 'Asia', year: '2100', value: 7268, percent: 0.8977272727272727 }
    ];
    const chart = new F2.Chart({
      id: 'column4',
      pixelRatio: window.devicePixelRatio,
      width: window.innerWidth,
      height: window.innerWidth * 0.64
    });
    chart.source(data, {
      percent: {
        min: 0,
        formatter(val) {
          return (val * 100).toFixed(0) + '%';
        }
      }
    });
    chart.tooltip({
      custom(obj) {
        const legend = chart.get('legendController').legends.top[0];
        const tooltipItems = obj.items;
        const legendItems = legend.items;
        const map = {};
        legendItems.map(item => {
          map[item.name] = _.clone(item);
        });
        tooltipItems.map(item => {
          const { name, value } = item;
          if (map[name]) {
            map[name].value = (value * 100).toFixed(2) + '%';;
          }
        });
        legend.setItems(Object.values(map));
      },
      onHide(tooltip) {
        const legend = chart.get('legendController').legends.top[0];
        legend.setItems(chart.getLegendItems().country);
      }
    });
    chart.interval()
      .position('year*percent')
      .color('country')
      .adjust('stack');
    chart.render();
})();

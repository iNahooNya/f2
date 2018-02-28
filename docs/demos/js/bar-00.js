(() => {
  const { Global } = F2;
  const data = [
    { country: '巴西', population: 18203 },
    { country: '印尼', population: 23489 },
    { country: '美国', population: 29034 },
    { country: '印度', population: 104970 },
    { country: '中国', population: 131744 }
  ];
  const chart = new F2.Chart({
    id: 'bar0',
    width: window.innerWidth,
    height: window.innerWidth * 0.64,
    pixelRatio: window.devicePixelRatio
  });

  chart.source(data, {
    population: {
      tickCount: 5
    }
  });
  chart.coord({
    transposed: true
  });
  chart.axis('country', {
    line: Global._defaultAxis.line,
    grid: null
  });
  chart.axis('population', {
    line: null,
    grid: Global._defaultAxis.grid,
    label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      }
      if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.interval().position('country*population');
  chart.render();
})();

(() => {
  const map = {
    '芳华': '40%',
    '妖猫传': '20%',
    '机器之血': '18%',
    '心理罪': '15%',
    '寻梦环游记': '5%',
    '其他': '2%',
  };
  const data = [
    { name: '芳华', proportion: 0.4, a: '1' },
    { name: '妖猫传', proportion: 0.2, a: '1' },
    { name: '机器之血', proportion: 0.18, a: '1' },
    { name: '心理罪', proportion: 0.15, a: '1' },
    { name: '寻梦环游记', proportion: 0.05, a: '1' },
    { name: '其他', proportion: 0.02, a: '1' }
  ];
  const chart = new F2.Chart({
    id: 'pie1',
    width: window.innerWidth,
    height: window.innerWidth * 0.64,
    pixelRatio: window.devicePixelRatio
  });
  chart.source(data);
  chart.legend({
    position: 'right',
    itemFormatter(val) {
      return val + '  ' + map[val];
    }
  });
  chart.coord('polar', {
    transposed: true,
    innerRadius: 0.6,
    radius: 0.8
  });
  chart.axis(false);
  chart.interval()
    .position('a*proportion')
    .color('name', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0' ])
    .adjust('stack')
    .style({
      lineWidth: 1,
      stroke: '#fff'
    });;

  chart.guide().html({
    position: [ '50%', '50%' ],
    html: '<div id="show" style="width: 250px;height: 41.5px;text-align: center;margin-top: 41.5px;"></div>',
  });
  chart.tooltip({
    custom(ev) {
      const { items } = ev;
      const content = '<span style="font-size: 24px; color: rgba(0, 0, 0, 0.85);">' + items[0].name + '</span><br />'
        + '<span style="font-size: 12px; color: rgba(0, 0, 0, 0.45);">' + items[0].value * 100 + '%' + '</span>';
      $('#show').html(content);
    },
    onHide() {
      $('#show').html('');
    }
  });
  chart.render();
})();

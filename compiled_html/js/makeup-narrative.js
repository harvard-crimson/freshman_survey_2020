 $(document).ready(function () {

    // Makeup narrative
  
     createChart('column', {
        2020:'data/2020/0/0/race.csv'}
    , '#race');

     createChart('column', 
         {2020: 'data/2020/0/0/legacy-bar.csv'}
    , '#legacy');

    csv_to_scatter({
        2017: 'data/2017/1/0/gpa_sat.csv',
        2018: 'data/2018/1/0/gpa_sat.csv',
        2019: 'data/2019/1/0/gpa_sat.csv',
        2020: 'data/2020/1/0/gpa_sat.csv'
    }, 'sat-gpa', 'GPA', 'SAT Score', colorset[colorindex++ % colorset.length], [2.8,4.0], [1200,2400]);

    $(window).trigger('resize');
    // var width = $('.graph').first().parents('.scroll-row').first().width();
    // $('.graph').width(width);
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});

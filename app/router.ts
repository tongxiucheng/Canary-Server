import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/getInitData', controller.union.getData);
  router.post('/api/addDataSource', controller.dataSource.addDataSource);
  router.get('/api/getDataSource', controller.dataSource.getDataSourceList);
  router.delete('/api/deleteDataSource', controller.dataSource.deleteDataSource);
  router.put('/api/updateDataSource', controller.dataSource.putDataSource);
  router.get('/api/getDashBoard', controller.dashBoard.getDashBoardList);
  router.post('/api/addDashBoard', controller.dashBoard.addDashBoard);
  router.put('/api/updateDashBoard', controller.dashBoard.putDashBoard);
  router.delete('/api/deleteDashBoard', controller.dashBoard.deleteDashBoard);
  router.post('/api/login', controller.home.login);
  router.get('/api/getChartList', controller.chart.getChartList);
  router.post('/api/addChart', controller.chart.addChart);
  router.put('/api/updateChart', controller.chart.putChart);
  router.delete('/api/deleteChart', controller.chart.deleteChart);
  router.post('/api/sql', controller.sql.sqlQuery);
};

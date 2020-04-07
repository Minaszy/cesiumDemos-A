class Config {
  mapConfig: any;
  constructor() {
    this.mapConfig = {
      google: `http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}`,
      patrol_myb_20190626: `http://140.207.79.138:5080/geoserver/gwc/service/tms/1.0.0/kalends%3Apatrol_myb_20190626@EPSG%3A900913@png/{z}/{x}/{reverseY}.png`,
      TPModelUrl: `http://140.207.79.138:6080/youku/tileset.json`,
      ModelUrl: `http://localhost:8085/SceneX/tileset.json`,
      buildingsUrl: 'assets/3dtiles/buildings_sh/tileset.json',
      dayantaUrl: 'assets/3dtiles/dayanta3dtiles/tileset.json',
      dayataclassifyUrl: 'assets/3dtiles/dayataclassify/tileset.json',
      dayataclassifyUrl2: 'assets/3dtiles/dayataclassify2/tileset.json',
      billboards: { "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } }, "features": [{ "type": "Feature", "id": 1, "geometry": { "type": "Point", "coordinates": [121.4515851540001, 31.289722229000063] }, "properties": { "OBJECTID": 1, "name": null, "color": null, "type": "违章搭建" } }, { "type": "Feature", "id": 2, "geometry": { "type": "Point", "coordinates": [121.45210802100007, 31.289890623000076] }, "properties": { "OBJECTID": 2, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 3, "geometry": { "type": "Point", "coordinates": [121.45250705700005, 31.28996890700006] }, "properties": { "OBJECTID": 3, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 4, "geometry": { "type": "Point", "coordinates": [121.45105154100008, 31.289666002000047] }, "properties": { "OBJECTID": 4, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 5, "geometry": { "type": "Point", "coordinates": [121.4508546400001, 31.28971894500006] }, "properties": { "OBJECTID": 5, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 6, "geometry": { "type": "Point", "coordinates": [121.4512764000001, 31.289761775000045] }, "properties": { "OBJECTID": 6, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 7, "geometry": { "type": "Point", "coordinates": [121.45011879100002, 31.28969752900008] }, "properties": { "OBJECTID": 7, "name": null, "color": null, "type": "水域保洁" } }, { "type": "Feature", "id": 8, "geometry": { "type": "Point", "coordinates": [121.45029427700001, 31.28970109900007] }, "properties": { "OBJECTID": 8, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 9, "geometry": { "type": "Point", "coordinates": [121.44961732000002, 31.289521449000063] }, "properties": { "OBJECTID": 9, "name": null, "color": null, "type": "违章搭建" } }, { "type": "Feature", "id": 10, "geometry": { "type": "Point", "coordinates": [121.44811945000004, 31.28923353400006] }, "properties": { "OBJECTID": 10, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 13, "geometry": { "type": "Point", "coordinates": [121.45309510100003, 31.290053854000064] }, "properties": { "OBJECTID": 13, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 14, "geometry": { "type": "Point", "coordinates": [121.45304346600005, 31.28995344100008] }, "properties": { "OBJECTID": 14, "name": null, "color": null, "type": "陆域保洁" } }, { "type": "Feature", "id": 15, "geometry": { "type": "Point", "coordinates": [121.45126410500006, 31.28965767400007] }, "properties": { "OBJECTID": 15, "name": null, "color": null, "type": "陆域保洁" } }, { "type": "Feature", "id": 16, "geometry": { "type": "Point", "coordinates": [121.45092384300006, 31.289568444000054] }, "properties": { "OBJECTID": 16, "name": null, "color": null, "type": "违章施工" } }, { "type": "Feature", "id": 17, "geometry": { "type": "Point", "coordinates": [121.44975493200002, 31.28960294600006] }, "properties": { "OBJECTID": 17, "name": null, "color": null, "type": "水质问题" } }, { "type": "Feature", "id": 19, "geometry": { "type": "Point", "coordinates": [121.44740937900008, 31.289136572000075] }, "properties": { "OBJECTID": 19, "name": null, "color": null, "type": "违章搭建" } }] }
    };


  }

}

export const config = new Config();


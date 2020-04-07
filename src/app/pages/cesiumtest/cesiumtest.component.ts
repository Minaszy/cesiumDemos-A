import { Component, OnInit } from '@angular/core';
import { config } from '../../mapConfig/config';
declare const Cesium;

@Component({
  selector: 'app-cesiumtest',
  templateUrl: './cesiumtest.component.html',
  styleUrls: ['./cesiumtest.component.scss']
})
export class CesiumtestComponent implements OnInit {
  viewer: any;
  baseMap: any;
  infodata: any; // 点击图标显示的文本内容
  constructor() { }

  ngOnInit() {
    console.log(Cesium);
    this.initCesium();
  }
  initCesium() {
    // 添加底图——谷歌影像
    const googleLayerProvider = new Cesium.UrlTemplateImageryProvider({
      url: config.mapConfig.google,
      tilingScheme: new Cesium.WebMercatorTilingScheme()
    });
    this.viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false,
      baseLayerPicker: false,
      geocoder: false,
      fullscreenButton: false,
      timeline: false,
      selectionIndicator: false,
      navigationHelpButton: false,
      infoBox: false,
      homeButton: false,
      scene3DOnly: false,
      sceneModePicker: false,
      cesiumLogo: false,
      vrButton: false,
      // 设置imageryProvider属性修改默认底图，未设置则cesium默认使用http://ecn.t1.tiles.virtualearth.net/tiles/a211.jpeg?n=z&g=8303作为底图；
      // imageryProvider: googleLayerProvider
      // cesium默认全球地形：https://assets.cesium.com/1/11/3363/1479.terrain?extensions=metadata&v=1.2.0, 没有该参数时，无地形效果
      // terrainProvider: Cesium.createWorldTerrain(),
    });
    // 隐藏下方cesium自带的数据源和框架介绍
    this.viewer._cesiumWidget._creditContainer.style.display = 'none';
    // 开启光照效果和阴影效果
    this.viewer.scene.globe.enableLighting = true;
    this.viewer.shadows = true;
    // 添加底图
    this.baseMap = this.viewer.imageryLayers.addImageryProvider(googleLayerProvider);
    // 定位
    this.viewer.scene.camera.flyTo({
      destination: Cesium.Rectangle.fromDegrees(121.44672084220201, 31.28868194981397, 121.45407791350203, 31.29060935499095),
    });
    this.addIcons();
    this.addEvt();
  }
  addIcons() {
    if (config.mapConfig.billboards) {
      const data = config.mapConfig.billboards;

      data.features.forEach((fea, i) => {
        if (fea.properties.type !== '水质问题') {
          const position = {
            x: fea.geometry.coordinates[0],
            y: fea.geometry.coordinates[1],
            h: 0
          };
          this.addBillboard(position, 'assets/img/' + fea.properties.type + '.png', fea.properties);
          console.log('assets/img/' + fea.properties.type + '.png');
        }
      });
    }
  }
  addBillboard(position, imgUrl, properties) {
    // { x: 121.4515851540001, y: 31.289722229000063, h: 0 }
    // { x: -2846495.4215948055, y: 4653880.935606266, z: 3293385.5594556085 }
    const entity = this.viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(position.x, position.y),
      billboard: {
        image: imgUrl,
        width: 32, // default: undefined
        height: 32 // default: undefined
      },
      // tslint:disable-next-line:object-literal-shorthand
      properties: properties
    });
  }
  addEvt() {
    const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    handler.setInputAction((event) => {
      const cartesian = this.viewer.camera.pickEllipsoid(event.position, this.viewer.scene.globe.ellipsoid);
      const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
      const lon = Cesium.Math.toDegrees(cartographic.longitude);
      const lat = Cesium.Math.toDegrees(cartographic.latitude);
      const obj = this.viewer.scene.pick(event.position);
      if (Cesium.defined(obj)) {
        if (obj.id && obj.id.properties) { // 点击建筑物等获取属性
          console.log(obj.id.properties.type);
          this.showInfoWindow(lon, lat, obj.id.properties.type);
        }

      } else {
        this.hideInfoWindow();
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
  hideInfoWindow() {
    const element = document.getElementById('infoWindow1');
    element.style.display = 'none';
  }
  showInfoWindow(lon, lat, infoData) {
    const divPosition = Cesium.Cartesian3.fromDegrees(lon, lat);
    const cartesian2 = new Cesium.Cartesian2(); // cesium二维笛卡尔 笛卡尔二维坐标系就是我们熟知的而二维坐标系；三维也如此
    const canvasPosition = this.viewer.scene.cartesianToCanvasCoordinates(divPosition, cartesian2); // cartesianToCanvasCoordinates 笛卡尔坐标（3维度）到画布坐标
    const element = document.getElementById('infoWindow1');
    element.style.display = 'block';
    element.style.top = (canvasPosition.y + 64 - 100 - 150) + 'px';
    element.style.left = (canvasPosition.x + 200) + 'px';
    const elementinfo = document.getElementById('infoWindow');
    elementinfo.style.display = 'block';
    const elementLine = document.getElementById('infoLine');
    elementLine.style.display = 'block';
    this.infodata = infoData;
    this.viewer.scene.preRender.addEventListener(() => {
      const canvasPosition1 = this.viewer.scene.cartesianToCanvasCoordinates(divPosition, cartesian2);
      // cartesianToCanvasCoordinates 笛卡尔坐标（3维度）到画布坐标
      if (Cesium.defined(canvasPosition)) {
        element.style.top = (canvasPosition1.y + 70 - 100 - 150) + 'px';
        element.style.left = (canvasPosition1.x + 280) + 'px';
        // element.style.top = (canvasPosition1.y + 64 - 100 - 150) + 'px';
        // element.style.left = (canvasPosition1.x + 200) + 'px';
      }
    });
  }
}

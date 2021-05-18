ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([11.464642, 3.903659, 11.601817, 3.977830]);
var wms_layers = [];

var format_Vegetation_0 = new ol.format.GeoJSON();
var features_Vegetation_0 = format_Vegetation_0.readFeatures(json_Vegetation_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Vegetation_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetation_0.addFeatures(features_Vegetation_0);
var lyr_Vegetation_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vegetation_0, 
                style: style_Vegetation_0,
                interactive: true,
                title: '<img src="styles/legend/Vegetation_0.png" /> Vegetation'
            });
var format_Zonetest_1 = new ol.format.GeoJSON();
var features_Zonetest_1 = format_Zonetest_1.readFeatures(json_Zonetest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Zonetest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonetest_1.addFeatures(features_Zonetest_1);
var lyr_Zonetest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonetest_1, 
                style: style_Zonetest_1,
                interactive: true,
                title: '<img src="styles/legend/Zonetest_1.png" /> Zone test'
            });
var format_lieux_dits_2 = new ol.format.GeoJSON();
var features_lieux_dits_2 = format_lieux_dits_2.readFeatures(json_lieux_dits_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_lieux_dits_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lieux_dits_2.addFeatures(features_lieux_dits_2);
var lyr_lieux_dits_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lieux_dits_2, 
                style: style_lieux_dits_2,
                interactive: true,
                title: '<img src="styles/legend/lieux_dits_2.png" /> lieux_dits'
            });
var format_Routesprincipales_3 = new ol.format.GeoJSON();
var features_Routesprincipales_3 = format_Routesprincipales_3.readFeatures(json_Routesprincipales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Routesprincipales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesprincipales_3.addFeatures(features_Routesprincipales_3);
var lyr_Routesprincipales_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routesprincipales_3, 
                style: style_Routesprincipales_3,
                interactive: true,
                title: '<img src="styles/legend/Routesprincipales_3.png" /> Routes principales'
            });
var format_rueydeI_4 = new ol.format.GeoJSON();
var features_rueydeI_4 = format_rueydeI_4.readFeatures(json_rueydeI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rueydeI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rueydeI_4.addFeatures(features_rueydeI_4);
var lyr_rueydeI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rueydeI_4, 
                style: style_rueydeI_4,
                interactive: true,
                title: '<img src="styles/legend/rueydeI_4.png" /> rueydeI'
            });

lyr_Vegetation_0.setVisible(true);lyr_Zonetest_1.setVisible(true);lyr_lieux_dits_2.setVisible(true);lyr_Routesprincipales_3.setVisible(true);lyr_rueydeI_4.setVisible(true);
var layersList = [lyr_Vegetation_0,lyr_Zonetest_1,lyr_lieux_dits_2,lyr_Routesprincipales_3,lyr_rueydeI_4];
lyr_Vegetation_0.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'natural': 'vegetation', 'grassland': 'grassland', 'landuse': 'landuse', 'wood': 'wood', 'wikipedia': 'wikipedia', });
lyr_Zonetest_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'building': 'building', 'name': 'Batiments', 'amenity': 'amenity', 'office': 'office', 'shop': 'shop', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'wikipedia': 'wikipedia', });
lyr_lieux_dits_2.set('fieldAliases', {'Id': 'Id', 'Nom': 'Lieux-dits', 'wikipedia': 'wikipedia', });
lyr_Routesprincipales_3.set('fieldAliases', {'osm_id': 'osm_id', 'highway': 'highway', 'ref': 'ref', 'name': 'Route principal', 'surface': 'surface', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'maxweight': 'maxweight', 'access': 'access', 'lit': 'lit', 'wikipedia': 'wikipedia', });
lyr_rueydeI_4.set('fieldAliases', {'osm_id': 'osm_id', 'highway': 'highway', 'ref': 'ref', 'name': 'Rues de YdeI', 'surface': 'surface', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'maxweight': 'maxweight', 'access': 'access', 'lit': 'lit', 'wikipedia': 'wikipedia', });
lyr_Vegetation_0.set('fieldImages', {'osm_id': 'Hidden', 'osm_way_id': 'Hidden', 'natural': 'TextEdit', 'grassland': 'Hidden', 'landuse': 'Hidden', 'wood': 'Hidden', 'wikipedia': 'TextEdit', });
lyr_Zonetest_1.set('fieldImages', {'OBJECTID': 'Hidden', 'osm_id': 'Hidden', 'osm_way_id': 'Hidden', 'building': 'Hidden', 'name': 'TextEdit', 'amenity': 'Hidden', 'office': 'Hidden', 'shop': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'wikipedia': 'TextEdit', });
lyr_lieux_dits_2.set('fieldImages', {'Id': 'Hidden', 'Nom': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Routesprincipales_3.set('fieldImages', {'osm_id': 'Hidden', 'highway': 'Hidden', 'ref': 'Hidden', 'name': 'TextEdit', 'surface': 'Hidden', 'oneway': 'Hidden', 'maxspeed': 'Hidden', 'maxweight': 'Hidden', 'access': 'Hidden', 'lit': 'Hidden', 'wikipedia': 'TextEdit', });
lyr_rueydeI_4.set('fieldImages', {'osm_id': 'Hidden', 'highway': 'Hidden', 'ref': 'Hidden', 'name': 'TextEdit', 'surface': 'Hidden', 'oneway': 'Hidden', 'maxspeed': 'Hidden', 'maxweight': 'Hidden', 'access': 'Hidden', 'lit': 'Hidden', 'wikipedia': 'TextEdit', });
lyr_Vegetation_0.set('fieldLabels', {'natural': 'no label', 'wikipedia': 'no label', });
lyr_Zonetest_1.set('fieldLabels', {'name': 'no label', 'wikipedia': 'no label', });
lyr_lieux_dits_2.set('fieldLabels', {'Nom': 'no label', 'wikipedia': 'no label', });
lyr_Routesprincipales_3.set('fieldLabels', {'name': 'no label', 'wikipedia': 'no label', });
lyr_rueydeI_4.set('fieldLabels', {'name': 'no label', 'wikipedia': 'no label', });
lyr_rueydeI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
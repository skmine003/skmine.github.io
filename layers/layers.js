var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_study_area_1 = new ol.format.GeoJSON();
var features_study_area_1 = format_study_area_1.readFeatures(json_study_area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_study_area_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_study_area_1.addFeatures(features_study_area_1);var lyr_study_area_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_study_area_1, 
                style: style_study_area_1,
                title: '<img src="styles/legend/study_area_1.png" /> study_area'
            });var format_mineral_fields_2 = new ol.format.GeoJSON();
var features_mineral_fields_2 = format_mineral_fields_2.readFeatures(json_mineral_fields_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mineral_fields_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_mineral_fields_2.addFeatures(features_mineral_fields_2);var lyr_mineral_fields_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mineral_fields_2, 
                style: style_mineral_fields_2,
                title: '<img src="styles/legend/mineral_fields_2.png" /> mineral_fields'
            });var format_geological_lines_3 = new ol.format.GeoJSON();
var features_geological_lines_3 = format_geological_lines_3.readFeatures(json_geological_lines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geological_lines_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_geological_lines_3.addFeatures(features_geological_lines_3);var lyr_geological_lines_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_geological_lines_3, 
                style: style_geological_lines_3,
                title: '<img src="styles/legend/geological_lines_3.png" /> geological_lines'
            });var format_tectonic_lines_4 = new ol.format.GeoJSON();
var features_tectonic_lines_4 = format_tectonic_lines_4.readFeatures(json_tectonic_lines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tectonic_lines_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_tectonic_lines_4.addFeatures(features_tectonic_lines_4);var lyr_tectonic_lines_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tectonic_lines_4, 
                style: style_tectonic_lines_4,
                title: '<img src="styles/legend/tectonic_lines_4.png" /> tectonic_lines'
            });var format_mining_sites_5 = new ol.format.GeoJSON();
var features_mining_sites_5 = format_mining_sites_5.readFeatures(json_mining_sites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mining_sites_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_mining_sites_5.addFeatures(features_mining_sites_5);var lyr_mining_sites_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mining_sites_5, 
                style: style_mining_sites_5,
                title: '<img src="styles/legend/mining_sites_5.png" /> mining_sites'
            });var format_sample_sites_6 = new ol.format.GeoJSON();
var features_sample_sites_6 = format_sample_sites_6.readFeatures(json_sample_sites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sample_sites_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_sample_sites_6.addFeatures(features_sample_sites_6);var lyr_sample_sites_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sample_sites_6, 
                style: style_sample_sites_6,
                title: '<img src="styles/legend/sample_sites_6.png" /> sample_sites'
            });var format_explorationsites_7 = new ol.format.GeoJSON();
var features_explorationsites_7 = format_explorationsites_7.readFeatures(json_explorationsites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_explorationsites_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_explorationsites_7.addFeatures(features_explorationsites_7);var lyr_explorationsites_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_explorationsites_7, 
                style: style_explorationsites_7,
                title: '<img src="styles/legend/explorationsites_7.png" /> exploration sites'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_study_area_1.setVisible(true);lyr_mineral_fields_2.setVisible(true);lyr_geological_lines_3.setVisible(true);lyr_tectonic_lines_4.setVisible(true);lyr_mining_sites_5.setVisible(true);lyr_sample_sites_6.setVisible(true);lyr_explorationsites_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_study_area_1,lyr_mineral_fields_2,lyr_geological_lines_3,lyr_tectonic_lines_4,lyr_mining_sites_5,lyr_sample_sites_6,lyr_explorationsites_7];
lyr_study_area_1.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'province': 'province', 'cat_b': 'cat_b', 'wardno': 'wardno', 'ward_id': 'ward_id', 'area': 'area', 'wardwinner': 'wardwinner', 'reg_voters': 'reg_voters', 'ea_number': 'ea_number', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_mineral_fields_2.set('fieldAliases', {'gid': 'gid', 'class': 'class', 'name': 'name', 'type': 'type', 'shape_leng': 'shape_leng', 'event': 'event', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_geological_lines_3.set('fieldAliases', {'gid': 'gid', 'lntype': 'lntype', 'lntypet': 'lntypet', 'uq_geol': 'uq_geol', 'mapno': 'mapno', 'desc_': 'desc_', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', });
lyr_tectonic_lines_4.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'lntype': 'lntype', 'lntypet': 'lntypet', 'mapno': 'mapno', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', });
lyr_mining_sites_5.set('fieldAliases', {'gid': 'gid', 'commod': 'commod', 'pttype': 'pttype', 'pttypet': 'pttypet', 'mapno': 'mapno', 'descr': 'descr', });
lyr_sample_sites_6.set('fieldAliases', {'gid': 'gid', 'pttype': 'pttype', 'pttypet': 'pttypet', 'uq_geol': 'uq_geol', 'mapno': 'mapno', 'azimuth': 'azimuth', 'dip': 'dip', 'descr': 'descr', });
lyr_explorationsites_7.set('fieldAliases', {'gid': 'gid', 'pttype': 'pttype', 'azimuth': 'azimuth', 'dip': 'dip', 'pttypet': 'pttypet', 'mapno': 'mapno', 'descr': 'descr', });
lyr_study_area_1.set('fieldImages', {'gid': '', 'objectid': '', 'province': '', 'cat_b': '', 'wardno': '', 'ward_id': '', 'area': '', 'wardwinner': '', 'reg_voters': '', 'ea_number': '', 'shape_leng': '', 'shape_area': '', });
lyr_mineral_fields_2.set('fieldImages', {'gid': '', 'class': '', 'name': '', 'type': '', 'shape_leng': '', 'event': '', 'shape_le_1': '', 'shape_le_2': '', 'shape_area': '', });
lyr_geological_lines_3.set('fieldImages', {'gid': '', 'lntype': '', 'lntypet': '', 'uq_geol': '', 'mapno': '', 'desc_': '', 'shape_leng': '', 'shape_le_1': '', });
lyr_tectonic_lines_4.set('fieldImages', {'gid': '', 'objectid': '', 'lntype': '', 'lntypet': '', 'mapno': '', 'shape_leng': '', 'shape_le_1': '', });
lyr_mining_sites_5.set('fieldImages', {'gid': '', 'commod': '', 'pttype': '', 'pttypet': '', 'mapno': '', 'descr': '', });
lyr_sample_sites_6.set('fieldImages', {'gid': '', 'pttype': '', 'pttypet': '', 'uq_geol': '', 'mapno': '', 'azimuth': '', 'dip': '', 'descr': '', });
lyr_explorationsites_7.set('fieldImages', {'gid': '', 'pttype': '', 'azimuth': '', 'dip': '', 'pttypet': '', 'mapno': '', 'descr': '', });
lyr_study_area_1.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'province': 'no label', 'cat_b': 'no label', 'wardno': 'no label', 'ward_id': 'no label', 'area': 'no label', 'wardwinner': 'no label', 'reg_voters': 'no label', 'ea_number': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_mineral_fields_2.set('fieldLabels', {'gid': 'no label', 'class': 'no label', 'name': 'no label', 'type': 'no label', 'shape_leng': 'no label', 'event': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', 'shape_area': 'no label', });
lyr_geological_lines_3.set('fieldLabels', {'gid': 'no label', 'lntype': 'no label', 'lntypet': 'no label', 'uq_geol': 'no label', 'mapno': 'no label', 'desc_': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', });
lyr_tectonic_lines_4.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'lntype': 'no label', 'lntypet': 'no label', 'mapno': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', });
lyr_mining_sites_5.set('fieldLabels', {'gid': 'no label', 'commod': 'no label', 'pttype': 'no label', 'pttypet': 'no label', 'mapno': 'no label', 'descr': 'header label', });
lyr_sample_sites_6.set('fieldLabels', {'gid': 'no label', 'pttype': 'no label', 'pttypet': 'no label', 'uq_geol': 'no label', 'mapno': 'no label', 'azimuth': 'header label', 'dip': 'header label', 'descr': 'no label', });
lyr_explorationsites_7.set('fieldLabels', {'gid': 'no label', 'pttype': 'no label', 'azimuth': 'no label', 'dip': 'no label', 'pttypet': 'no label', 'mapno': 'no label', 'descr': 'no label', });
lyr_explorationsites_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
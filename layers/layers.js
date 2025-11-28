ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-53.335909, -23.139996, -37.567003, -14.015940]);
var wms_layers = [];

var format_LimiteMunicipal_0 = new ol.format.GeoJSON();
var features_LimiteMunicipal_0 = format_LimiteMunicipal_0.readFeatures(json_LimiteMunicipal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_LimiteMunicipal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_0.addFeatures(features_LimiteMunicipal_0);
var lyr_LimiteMunicipal_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_0, 
                style: style_LimiteMunicipal_0,
                popuplayertitle: 'Limite Municipal',
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipal_0.png" /> Limite Municipal'
            });
var lyr_IrradiaoSolar_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Irradiação Solar<br />\
    <img src="styles/legend/IrradiaoSolar_1_0.png" /> 1199,4810<br />\
    <img src="styles/legend/IrradiaoSolar_1_1.png" /> 1340,9240<br />\
    <img src="styles/legend/IrradiaoSolar_1_2.png" /> 1482,3670<br />\
    <img src="styles/legend/IrradiaoSolar_1_3.png" /> 1623,8100<br />\
    <img src="styles/legend/IrradiaoSolar_1_4.png" /> 1765,2531<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IrradiaoSolar_1.png",
            attributions: ' ',
            projection: 'EPSG:4674',
            alwaysInRange: true,
            imageExtent: [-51.055627, -22.930703, -39.847076, -14.224023]
        })
    });
var format_RodFederai_2 = new ol.format.GeoJSON();
var features_RodFederai_2 = format_RodFederai_2.readFeatures(json_RodFederai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_RodFederai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodFederai_2.addFeatures(features_RodFederai_2);
var lyr_RodFederai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodFederai_2, 
                style: style_RodFederai_2,
                popuplayertitle: 'Rod. Federai',
                interactive: true,
                title: '<img src="styles/legend/RodFederai_2.png" /> Rod. Federai'
            });
var format_RodEstadual_3 = new ol.format.GeoJSON();
var features_RodEstadual_3 = format_RodEstadual_3.readFeatures(json_RodEstadual_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_RodEstadual_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodEstadual_3.addFeatures(features_RodEstadual_3);
var lyr_RodEstadual_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodEstadual_3, 
                style: style_RodEstadual_3,
                popuplayertitle: 'Rod. Estadual',
                interactive: true,
                title: '<img src="styles/legend/RodEstadual_3.png" /> Rod. Estadual'
            });
var format_TrechoE3_4 = new ol.format.GeoJSON();
var features_TrechoE3_4 = format_TrechoE3_4.readFeatures(json_TrechoE3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TrechoE3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechoE3_4.addFeatures(features_TrechoE3_4);
var lyr_TrechoE3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrechoE3_4, 
                style: style_TrechoE3_4,
                popuplayertitle: 'Trecho - E3',
                interactive: true,
                title: '<img src="styles/legend/TrechoE3_4.png" /> Trecho - E3'
            });
var format_TrechoE2_5 = new ol.format.GeoJSON();
var features_TrechoE2_5 = format_TrechoE2_5.readFeatures(json_TrechoE2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TrechoE2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechoE2_5.addFeatures(features_TrechoE2_5);
var lyr_TrechoE2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrechoE2_5, 
                style: style_TrechoE2_5,
                popuplayertitle: 'Trecho - E2',
                interactive: true,
                title: '<img src="styles/legend/TrechoE2_5.png" /> Trecho - E2'
            });
var format_TrechoE1_6 = new ol.format.GeoJSON();
var features_TrechoE1_6 = format_TrechoE1_6.readFeatures(json_TrechoE1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TrechoE1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechoE1_6.addFeatures(features_TrechoE1_6);
var lyr_TrechoE1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrechoE1_6, 
                style: style_TrechoE1_6,
                popuplayertitle: 'Trecho - E1',
                interactive: true,
                title: '<img src="styles/legend/TrechoE1_6.png" /> Trecho - E1'
            });
var format_EletropostoE3_7 = new ol.format.GeoJSON();
var features_EletropostoE3_7 = format_EletropostoE3_7.readFeatures(json_EletropostoE3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostoE3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostoE3_7.addFeatures(features_EletropostoE3_7);
var lyr_EletropostoE3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostoE3_7, 
                style: style_EletropostoE3_7,
                popuplayertitle: 'Eletroposto - E3 ',
                interactive: true,
                title: '<img src="styles/legend/EletropostoE3_7.png" /> Eletroposto - E3 '
            });
var format_EletropostoE2_8 = new ol.format.GeoJSON();
var features_EletropostoE2_8 = format_EletropostoE2_8.readFeatures(json_EletropostoE2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostoE2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostoE2_8.addFeatures(features_EletropostoE2_8);
var lyr_EletropostoE2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostoE2_8, 
                style: style_EletropostoE2_8,
                popuplayertitle: 'Eletroposto - E2',
                interactive: true,
                title: '<img src="styles/legend/EletropostoE2_8.png" /> Eletroposto - E2'
            });
var format_EletropostoE1_9 = new ol.format.GeoJSON();
var features_EletropostoE1_9 = format_EletropostoE1_9.readFeatures(json_EletropostoE1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostoE1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostoE1_9.addFeatures(features_EletropostoE1_9);
var lyr_EletropostoE1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostoE1_9, 
                style: style_EletropostoE1_9,
                popuplayertitle: 'Eletroposto - E1',
                interactive: true,
                title: '<img src="styles/legend/EletropostoE1_9.png" /> Eletroposto - E1'
            });
var format_EletropostoExistente_10 = new ol.format.GeoJSON();
var features_EletropostoExistente_10 = format_EletropostoExistente_10.readFeatures(json_EletropostoExistente_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostoExistente_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostoExistente_10.addFeatures(features_EletropostoExistente_10);
var lyr_EletropostoExistente_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostoExistente_10, 
                style: style_EletropostoExistente_10,
                popuplayertitle: 'Eletroposto Existente',
                interactive: true,
                title: '<img src="styles/legend/EletropostoExistente_10.png" /> Eletroposto Existente'
            });
var format_VeculoEltricoRegistrado_11 = new ol.format.GeoJSON();
var features_VeculoEltricoRegistrado_11 = format_VeculoEltricoRegistrado_11.readFeatures(json_VeculoEltricoRegistrado_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_VeculoEltricoRegistrado_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VeculoEltricoRegistrado_11.addFeatures(features_VeculoEltricoRegistrado_11);
var lyr_VeculoEltricoRegistrado_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VeculoEltricoRegistrado_11, 
                style: style_VeculoEltricoRegistrado_11,
                popuplayertitle: ' Veículo Elétrico Registrado',
                interactive: true,
                title: '<img src="styles/legend/VeculoEltricoRegistrado_11.png" />  Veículo Elétrico Registrado'
            });
var format_RendaMdiaMensal_12 = new ol.format.GeoJSON();
var features_RendaMdiaMensal_12 = format_RendaMdiaMensal_12.readFeatures(json_RendaMdiaMensal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_RendaMdiaMensal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RendaMdiaMensal_12.addFeatures(features_RendaMdiaMensal_12);
var lyr_RendaMdiaMensal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RendaMdiaMensal_12, 
                style: style_RendaMdiaMensal_12,
                popuplayertitle: 'Renda Média Mensal',
                interactive: true,
                title: '<img src="styles/legend/RendaMdiaMensal_12.png" /> Renda Média Mensal'
            });

lyr_LimiteMunicipal_0.setVisible(true);lyr_IrradiaoSolar_1.setVisible(true);lyr_RodFederai_2.setVisible(true);lyr_RodEstadual_3.setVisible(true);lyr_TrechoE3_4.setVisible(true);lyr_TrechoE2_5.setVisible(true);lyr_TrechoE1_6.setVisible(true);lyr_EletropostoE3_7.setVisible(true);lyr_EletropostoE2_8.setVisible(true);lyr_EletropostoE1_9.setVisible(true);lyr_EletropostoExistente_10.setVisible(true);lyr_VeculoEltricoRegistrado_11.setVisible(true);lyr_RendaMdiaMensal_12.setVisible(true);
var layersList = [lyr_LimiteMunicipal_0,lyr_IrradiaoSolar_1,lyr_RodFederai_2,lyr_RodEstadual_3,lyr_TrechoE3_4,lyr_TrechoE2_5,lyr_TrechoE1_6,lyr_EletropostoE3_7,lyr_EletropostoE2_8,lyr_EletropostoE1_9,lyr_EletropostoExistente_10,lyr_VeculoEltricoRegistrado_11,lyr_RendaMdiaMensal_12];
lyr_LimiteMunicipal_0.set('fieldAliases', {'fid': 'fid', 'NM_MUN': 'NM_MUN', });
lyr_RodFederai_2.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'id_referen': 'id_referen', 'codigo_rod': 'codigo_rod', });
lyr_RodEstadual_3.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'id_referen': 'id_referen', 'codigo_rod': 'codigo_rod', });
lyr_TrechoE3_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', 'Trecho': 'Trecho', });
lyr_TrechoE2_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', 'Trech': 'Trech', });
lyr_TrechoE1_6.set('fieldAliases', {'fid': 'fid', 'Trecho': 'Trecho', });
lyr_EletropostoE3_7.set('fieldAliases', {'fid': 'fid', 'Município': 'Município', 'Potência': 'Potência', 'Irradiacao': 'Irradiacao', 'x': 'x', 'y': 'y', });
lyr_EletropostoE2_8.set('fieldAliases', {'fid': 'fid', 'Municipio': 'Municipio', 'Potência': 'Potência', 'Irradiacao': 'Irradiacao', 'x': 'x', 'y': 'y', });
lyr_EletropostoE1_9.set('fieldAliases', {'fid': 'fid', 'Município': 'Município', 'Potência': 'Potência', 'Irradiacao': 'Irradiacao', 'x': 'x', 'y': 'y', });
lyr_EletropostoExistente_10.set('fieldAliases', {'id': 'id', });
lyr_VeculoEltricoRegistrado_11.set('fieldAliases', {'id': 'id', 'Quant.': 'Quant.', 'Ranking': 'Ranking', 'Município': 'Município', });
lyr_RendaMdiaMensal_12.set('fieldAliases', {'id': 'id', 'Municípo': 'Municípo', 'Renda': 'Renda', });
lyr_LimiteMunicipal_0.set('fieldImages', {'fid': 'TextEdit', 'NM_MUN': 'TextEdit', });
lyr_RodFederai_2.set('fieldImages', {'fid': 'TextEdit', 'id_cide': 'Range', 'id_referen': 'TextEdit', 'codigo_rod': 'TextEdit', });
lyr_RodEstadual_3.set('fieldImages', {'fid': 'TextEdit', 'id_cide': 'Range', 'id_referen': 'TextEdit', 'codigo_rod': 'TextEdit', });
lyr_TrechoE3_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Trecho': 'TextEdit', });
lyr_TrechoE2_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Trech': '', });
lyr_TrechoE1_6.set('fieldImages', {'fid': 'TextEdit', 'Trecho': '', });
lyr_EletropostoE3_7.set('fieldImages', {'fid': 'TextEdit', 'Município': 'TextEdit', 'Potência': 'TextEdit', 'Irradiacao': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_EletropostoE2_8.set('fieldImages', {'fid': 'TextEdit', 'Municipio': 'TextEdit', 'Potência': 'TextEdit', 'Irradiacao': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_EletropostoE1_9.set('fieldImages', {'fid': 'TextEdit', 'Município': 'TextEdit', 'Potência': 'TextEdit', 'Irradiacao': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_EletropostoExistente_10.set('fieldImages', {'id': 'TextEdit', });
lyr_VeculoEltricoRegistrado_11.set('fieldImages', {'id': 'TextEdit', 'Quant.': 'TextEdit', 'Ranking': 'TextEdit', 'Município': 'TextEdit', });
lyr_RendaMdiaMensal_12.set('fieldImages', {'id': 'TextEdit', 'Municípo': 'TextEdit', 'Renda': 'TextEdit', });
lyr_LimiteMunicipal_0.set('fieldLabels', {'fid': 'hidden field', 'NM_MUN': 'no label', });
lyr_RodFederai_2.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'hidden field', 'id_referen': 'hidden field', 'codigo_rod': 'no label', });
lyr_RodEstadual_3.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'hidden field', 'id_referen': 'hidden field', 'codigo_rod': 'no label', });
lyr_TrechoE3_4.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Trecho': 'no label', });
lyr_TrechoE2_5.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Trech': 'no label', });
lyr_TrechoE1_6.set('fieldLabels', {'fid': 'hidden field', 'Trecho': 'no label', });
lyr_EletropostoE3_7.set('fieldLabels', {'fid': 'no label', 'Município': 'no label', 'Potência': 'no label', 'Irradiacao': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_EletropostoE2_8.set('fieldLabels', {'fid': 'hidden field', 'Municipio': 'hidden field', 'Potência': 'no label', 'Irradiacao': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_EletropostoE1_9.set('fieldLabels', {'fid': 'hidden field', 'Município': 'hidden field', 'Potência': 'no label', 'Irradiacao': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_EletropostoExistente_10.set('fieldLabels', {'id': 'no label', });
lyr_VeculoEltricoRegistrado_11.set('fieldLabels', {'id': 'hidden field', 'Quant.': 'no label', 'Ranking': 'no label', 'Município': 'no label', });
lyr_RendaMdiaMensal_12.set('fieldLabels', {'id': 'hidden field', 'Municípo': 'no label', 'Renda': 'no label', });
lyr_RendaMdiaMensal_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-51.325821, -23.284895, -39.577091, -13.871040]);
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
var format_EletropostoExistente_7 = new ol.format.GeoJSON();
var features_EletropostoExistente_7 = format_EletropostoExistente_7.readFeatures(json_EletropostoExistente_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostoExistente_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostoExistente_7.addFeatures(features_EletropostoExistente_7);
var lyr_EletropostoExistente_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostoExistente_7, 
                style: style_EletropostoExistente_7,
                popuplayertitle: 'Eletroposto Existente',
                interactive: true,
                title: '<img src="styles/legend/EletropostoExistente_7.png" /> Eletroposto Existente'
            });
var format_EletropostoE3_8 = new ol.format.GeoJSON();
var features_EletropostoE3_8 = format_EletropostoE3_8.readFeatures(json_EletropostoE3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostoE3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostoE3_8.addFeatures(features_EletropostoE3_8);
var lyr_EletropostoE3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostoE3_8, 
                style: style_EletropostoE3_8,
                popuplayertitle: 'Eletroposto - E3 ',
                interactive: true,
                title: '<img src="styles/legend/EletropostoE3_8.png" /> Eletroposto - E3 '
            });
var format_EletropostoE2_9 = new ol.format.GeoJSON();
var features_EletropostoE2_9 = format_EletropostoE2_9.readFeatures(json_EletropostoE2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostoE2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostoE2_9.addFeatures(features_EletropostoE2_9);
var lyr_EletropostoE2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostoE2_9, 
                style: style_EletropostoE2_9,
                popuplayertitle: 'Eletroposto - E2',
                interactive: true,
                title: '<img src="styles/legend/EletropostoE2_9.png" /> Eletroposto - E2'
            });
var format_EletroPostoE1_10 = new ol.format.GeoJSON();
var features_EletroPostoE1_10 = format_EletroPostoE1_10.readFeatures(json_EletroPostoE1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletroPostoE1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletroPostoE1_10.addFeatures(features_EletroPostoE1_10);
var lyr_EletroPostoE1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletroPostoE1_10, 
                style: style_EletroPostoE1_10,
                popuplayertitle: 'EletroPosto - E1',
                interactive: true,
                title: '<img src="styles/legend/EletroPostoE1_10.png" /> EletroPosto - E1'
            });
var format_VecEltricoRegistrado_11 = new ol.format.GeoJSON();
var features_VecEltricoRegistrado_11 = format_VecEltricoRegistrado_11.readFeatures(json_VecEltricoRegistrado_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_VecEltricoRegistrado_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VecEltricoRegistrado_11.addFeatures(features_VecEltricoRegistrado_11);
var lyr_VecEltricoRegistrado_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VecEltricoRegistrado_11, 
                style: style_VecEltricoRegistrado_11,
                popuplayertitle: ' Veíc. Elétrico Registrado',
                interactive: true,
                title: '<img src="styles/legend/VecEltricoRegistrado_11.png" />  Veíc. Elétrico Registrado'
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

lyr_LimiteMunicipal_0.setVisible(true);lyr_IrradiaoSolar_1.setVisible(true);lyr_RodFederai_2.setVisible(true);lyr_RodEstadual_3.setVisible(true);lyr_TrechoE3_4.setVisible(true);lyr_TrechoE2_5.setVisible(true);lyr_TrechoE1_6.setVisible(true);lyr_EletropostoExistente_7.setVisible(true);lyr_EletropostoE3_8.setVisible(true);lyr_EletropostoE2_9.setVisible(true);lyr_EletroPostoE1_10.setVisible(true);lyr_VecEltricoRegistrado_11.setVisible(true);lyr_RendaMdiaMensal_12.setVisible(true);
var layersList = [lyr_LimiteMunicipal_0,lyr_IrradiaoSolar_1,lyr_RodFederai_2,lyr_RodEstadual_3,lyr_TrechoE3_4,lyr_TrechoE2_5,lyr_TrechoE1_6,lyr_EletropostoExistente_7,lyr_EletropostoE3_8,lyr_EletropostoE2_9,lyr_EletroPostoE1_10,lyr_VecEltricoRegistrado_11,lyr_RendaMdiaMensal_12];
lyr_LimiteMunicipal_0.set('fieldAliases', {'fid': 'fid', 'NM_MUN': 'NM_MUN', });
lyr_RodFederai_2.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'id_referen': 'id_referen', 'codigo_rod': 'codigo_rod', });
lyr_RodEstadual_3.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'id_referen': 'id_referen', 'codigo_rod': 'codigo_rod', });
lyr_TrechoE3_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', 'Trecho': 'Trecho', });
lyr_TrechoE2_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', 'Trech': 'Trech', });
lyr_TrechoE1_6.set('fieldAliases', {'fid': 'fid', 'Trecho': 'Trecho', });
lyr_EletropostoExistente_7.set('fieldAliases', {'id': 'id', });
lyr_EletropostoE3_8.set('fieldAliases', {'fid': 'fid', 'Município': 'Município', 'Potência': 'Potência', 'x': 'x', 'y': 'y', 'Irradiação': 'Irradiação', 'Capacidade Instalada': 'Capacidade Instalada', });
lyr_EletropostoE2_9.set('fieldAliases', {'fid': 'fid', 'Municipio': 'Municipio', 'Potência': 'Potência', 'x': 'x', 'y': 'y', 'Capacidade Instalada': 'Capacidade Instalada', 'Irradiação': 'Irradiação', });
lyr_EletroPostoE1_10.set('fieldAliases', {'fid': 'fid', 'Município': 'Município', 'Cap. Instalada': 'Cap. Instalada', 'Potência': 'Potência', 'Irradiação': 'Irradiação', 'x': 'x', 'y': 'y', });
lyr_VecEltricoRegistrado_11.set('fieldAliases', {'id': 'id', 'Quant.': 'Quant.', 'Ranking': 'Ranking', 'Município': 'Município', });
lyr_RendaMdiaMensal_12.set('fieldAliases', {'id': 'id', 'Municípo': 'Municípo', 'Renda': 'Renda', });
lyr_LimiteMunicipal_0.set('fieldImages', {'fid': 'TextEdit', 'NM_MUN': 'TextEdit', });
lyr_RodFederai_2.set('fieldImages', {'fid': 'TextEdit', 'id_cide': 'Range', 'id_referen': 'TextEdit', 'codigo_rod': 'TextEdit', });
lyr_RodEstadual_3.set('fieldImages', {'fid': 'TextEdit', 'id_cide': 'Range', 'id_referen': 'TextEdit', 'codigo_rod': 'TextEdit', });
lyr_TrechoE3_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Trecho': 'TextEdit', });
lyr_TrechoE2_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Trech': '', });
lyr_TrechoE1_6.set('fieldImages', {'fid': 'TextEdit', 'Trecho': '', });
lyr_EletropostoExistente_7.set('fieldImages', {'id': 'TextEdit', });
lyr_EletropostoE3_8.set('fieldImages', {'fid': 'TextEdit', 'Município': 'TextEdit', 'Potência': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Irradiação': '', 'Capacidade Instalada': '', });
lyr_EletropostoE2_9.set('fieldImages', {'fid': 'TextEdit', 'Municipio': 'TextEdit', 'Potência': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Capacidade Instalada': '', 'Irradiação': '', });
lyr_EletroPostoE1_10.set('fieldImages', {'fid': 'TextEdit', 'Município': 'TextEdit', 'Cap. Instalada': 'TextEdit', 'Potência': 'TextEdit', 'Irradiação': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_VecEltricoRegistrado_11.set('fieldImages', {'id': 'TextEdit', 'Quant.': 'TextEdit', 'Ranking': 'TextEdit', 'Município': 'TextEdit', });
lyr_RendaMdiaMensal_12.set('fieldImages', {'id': 'TextEdit', 'Municípo': 'TextEdit', 'Renda': 'TextEdit', });
lyr_LimiteMunicipal_0.set('fieldLabels', {'fid': 'hidden field', 'NM_MUN': 'no label', });
lyr_RodFederai_2.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'hidden field', 'id_referen': 'hidden field', 'codigo_rod': 'no label', });
lyr_RodEstadual_3.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'hidden field', 'id_referen': 'hidden field', 'codigo_rod': 'no label', });
lyr_TrechoE3_4.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Trecho': 'no label', });
lyr_TrechoE2_5.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Trech': 'no label', });
lyr_TrechoE1_6.set('fieldLabels', {'fid': 'hidden field', 'Trecho': 'no label', });
lyr_EletropostoExistente_7.set('fieldLabels', {'id': 'no label', });
lyr_EletropostoE3_8.set('fieldLabels', {'fid': 'hidden field', 'Município': 'hidden field', 'Potência': 'no label', 'x': 'hidden field', 'y': 'hidden field', 'Irradiação': 'no label', 'Capacidade Instalada': 'no label', });
lyr_EletropostoE2_9.set('fieldLabels', {'fid': 'hidden field', 'Municipio': 'hidden field', 'Potência': 'no label', 'x': 'hidden field', 'y': 'hidden field', 'Capacidade Instalada': 'no label', 'Irradiação': 'no label', });
lyr_EletroPostoE1_10.set('fieldLabels', {'fid': 'hidden field', 'Município': 'hidden field', 'Cap. Instalada': 'inline label - always visible', 'Potência': 'inline label - always visible', 'Irradiação': 'inline label - always visible', 'x': 'hidden field', 'y': 'hidden field', });
lyr_VecEltricoRegistrado_11.set('fieldLabels', {'id': 'hidden field', 'Quant.': 'no label', 'Ranking': 'no label', 'Município': 'no label', });
lyr_RendaMdiaMensal_12.set('fieldLabels', {'id': 'hidden field', 'Municípo': 'no label', 'Renda': 'no label', });
lyr_RendaMdiaMensal_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
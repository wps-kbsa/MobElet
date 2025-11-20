ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-51.046089, -22.922756, -39.856823, -14.233179]);
var wms_layers = [];

var lyr_IrradiaoSolar_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Irradiação Solar<br />\
    <img src="styles/legend/IrradiaoSolar_0_0.png" /> 1199,4810<br />\
    <img src="styles/legend/IrradiaoSolar_0_1.png" /> 1340,9240<br />\
    <img src="styles/legend/IrradiaoSolar_0_2.png" /> 1482,3670<br />\
    <img src="styles/legend/IrradiaoSolar_0_3.png" /> 1623,8100<br />\
    <img src="styles/legend/IrradiaoSolar_0_4.png" /> 1765,2531<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IrradiaoSolar_0.png",
            attributions: ' ',
            projection: 'EPSG:4674',
            alwaysInRange: true,
            imageExtent: [-51.055627, -22.930703, -39.847076, -14.224023]
        })
    });
var format_LimitesMunicipais_1 = new ol.format.GeoJSON();
var features_LimitesMunicipais_1 = format_LimitesMunicipais_1.readFeatures(json_LimitesMunicipais_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_LimitesMunicipais_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicipais_1.addFeatures(features_LimitesMunicipais_1);
var lyr_LimitesMunicipais_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicipais_1, 
                style: style_LimitesMunicipais_1,
                popuplayertitle: 'Limites Municipais',
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicipais_1.png" /> Limites Municipais'
            });
var format_RodoviasEstaduais_2 = new ol.format.GeoJSON();
var features_RodoviasEstaduais_2 = format_RodoviasEstaduais_2.readFeatures(json_RodoviasEstaduais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_RodoviasEstaduais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasEstaduais_2.addFeatures(features_RodoviasEstaduais_2);
var lyr_RodoviasEstaduais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasEstaduais_2, 
                style: style_RodoviasEstaduais_2,
                popuplayertitle: 'Rodovias Estaduais',
                interactive: true,
                title: '<img src="styles/legend/RodoviasEstaduais_2.png" /> Rodovias Estaduais'
            });
var format_RodoviasFederais_3 = new ol.format.GeoJSON();
var features_RodoviasFederais_3 = format_RodoviasFederais_3.readFeatures(json_RodoviasFederais_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_RodoviasFederais_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasFederais_3.addFeatures(features_RodoviasFederais_3);
var lyr_RodoviasFederais_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasFederais_3, 
                style: style_RodoviasFederais_3,
                popuplayertitle: 'Rodovias Federais',
                interactive: true,
                title: '<img src="styles/legend/RodoviasFederais_3.png" /> Rodovias Federais'
            });
var format_TrechosEtapa3_4 = new ol.format.GeoJSON();
var features_TrechosEtapa3_4 = format_TrechosEtapa3_4.readFeatures(json_TrechosEtapa3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TrechosEtapa3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechosEtapa3_4.addFeatures(features_TrechosEtapa3_4);
var lyr_TrechosEtapa3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrechosEtapa3_4, 
                style: style_TrechosEtapa3_4,
                popuplayertitle: 'Trechos - Etapa 3',
                interactive: false,
                title: '<img src="styles/legend/TrechosEtapa3_4.png" /> Trechos - Etapa 3'
            });
var format_TrechosEtapa2_5 = new ol.format.GeoJSON();
var features_TrechosEtapa2_5 = format_TrechosEtapa2_5.readFeatures(json_TrechosEtapa2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TrechosEtapa2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechosEtapa2_5.addFeatures(features_TrechosEtapa2_5);
var lyr_TrechosEtapa2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrechosEtapa2_5, 
                style: style_TrechosEtapa2_5,
                popuplayertitle: 'Trechos - Etapa 2',
                interactive: false,
                title: '<img src="styles/legend/TrechosEtapa2_5.png" /> Trechos - Etapa 2'
            });
var format_TrechosEtapa1_6 = new ol.format.GeoJSON();
var features_TrechosEtapa1_6 = format_TrechosEtapa1_6.readFeatures(json_TrechosEtapa1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TrechosEtapa1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechosEtapa1_6.addFeatures(features_TrechosEtapa1_6);
var lyr_TrechosEtapa1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrechosEtapa1_6, 
                style: style_TrechosEtapa1_6,
                popuplayertitle: 'Trechos - Etapa 1',
                interactive: false,
                title: '<img src="styles/legend/TrechosEtapa1_6.png" /> Trechos - Etapa 1'
            });
var format_EletropostosEtapa3_7 = new ol.format.GeoJSON();
var features_EletropostosEtapa3_7 = format_EletropostosEtapa3_7.readFeatures(json_EletropostosEtapa3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostosEtapa3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostosEtapa3_7.addFeatures(features_EletropostosEtapa3_7);
var lyr_EletropostosEtapa3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostosEtapa3_7, 
                style: style_EletropostosEtapa3_7,
                popuplayertitle: 'Eletropostos - Etapa 3',
                interactive: false,
                title: '<img src="styles/legend/EletropostosEtapa3_7.png" /> Eletropostos - Etapa 3'
            });
var format_EletropostosEtapa2_8 = new ol.format.GeoJSON();
var features_EletropostosEtapa2_8 = format_EletropostosEtapa2_8.readFeatures(json_EletropostosEtapa2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostosEtapa2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostosEtapa2_8.addFeatures(features_EletropostosEtapa2_8);
var lyr_EletropostosEtapa2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostosEtapa2_8, 
                style: style_EletropostosEtapa2_8,
                popuplayertitle: 'Eletropostos - Etapa 2',
                interactive: false,
                title: '<img src="styles/legend/EletropostosEtapa2_8.png" /> Eletropostos - Etapa 2'
            });
var format_EletropostosEtapa1_9 = new ol.format.GeoJSON();
var features_EletropostosEtapa1_9 = format_EletropostosEtapa1_9.readFeatures(json_EletropostosEtapa1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostosEtapa1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostosEtapa1_9.addFeatures(features_EletropostosEtapa1_9);
var lyr_EletropostosEtapa1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostosEtapa1_9, 
                style: style_EletropostosEtapa1_9,
                popuplayertitle: 'Eletropostos - Etapa 1',
                interactive: false,
                title: '<img src="styles/legend/EletropostosEtapa1_9.png" /> Eletropostos - Etapa 1'
            });
var format_EletropostosParticulares_10 = new ol.format.GeoJSON();
var features_EletropostosParticulares_10 = format_EletropostosParticulares_10.readFeatures(json_EletropostosParticulares_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_EletropostosParticulares_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EletropostosParticulares_10.addFeatures(features_EletropostosParticulares_10);
var lyr_EletropostosParticulares_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EletropostosParticulares_10, 
                style: style_EletropostosParticulares_10,
                popuplayertitle: 'Eletropostos Particulares',
                interactive: false,
                title: '<img src="styles/legend/EletropostosParticulares_10.png" /> Eletropostos Particulares'
            });
var format_VERegistrados_11 = new ol.format.GeoJSON();
var features_VERegistrados_11 = format_VERegistrados_11.readFeatures(json_VERegistrados_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_VERegistrados_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERegistrados_11.addFeatures(features_VERegistrados_11);
var lyr_VERegistrados_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERegistrados_11, 
                style: style_VERegistrados_11,
                popuplayertitle: ' VE Registrados',
                interactive: true,
                title: '<img src="styles/legend/VERegistrados_11.png" />  VE Registrados'
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

lyr_IrradiaoSolar_0.setVisible(true);lyr_LimitesMunicipais_1.setVisible(true);lyr_RodoviasEstaduais_2.setVisible(true);lyr_RodoviasFederais_3.setVisible(true);lyr_TrechosEtapa3_4.setVisible(true);lyr_TrechosEtapa2_5.setVisible(true);lyr_TrechosEtapa1_6.setVisible(true);lyr_EletropostosEtapa3_7.setVisible(true);lyr_EletropostosEtapa2_8.setVisible(true);lyr_EletropostosEtapa1_9.setVisible(true);lyr_EletropostosParticulares_10.setVisible(true);lyr_VERegistrados_11.setVisible(true);lyr_RendaMdiaMensal_12.setVisible(true);
var layersList = [lyr_IrradiaoSolar_0,lyr_LimitesMunicipais_1,lyr_RodoviasEstaduais_2,lyr_RodoviasFederais_3,lyr_TrechosEtapa3_4,lyr_TrechosEtapa2_5,lyr_TrechosEtapa1_6,lyr_EletropostosEtapa3_7,lyr_EletropostosEtapa2_8,lyr_EletropostosEtapa1_9,lyr_EletropostosParticulares_10,lyr_VERegistrados_11,lyr_RendaMdiaMensal_12];
lyr_LimitesMunicipais_1.set('fieldAliases', {'fid': 'fid', 'NM_MUN': 'NM_MUN', });
lyr_RodoviasEstaduais_2.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'id_referen': 'id_referen', 'codigo_rod': 'codigo_rod', });
lyr_RodoviasFederais_3.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'id_referen': 'id_referen', 'codigo_rod': 'codigo_rod', });
lyr_TrechosEtapa3_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_TrechosEtapa2_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_TrechosEtapa1_6.set('fieldAliases', {'fid': 'fid', });
lyr_EletropostosEtapa3_7.set('fieldAliases', {'id': 'id', });
lyr_EletropostosEtapa2_8.set('fieldAliases', {'id': 'id', });
lyr_EletropostosEtapa1_9.set('fieldAliases', {'id': 'id', });
lyr_EletropostosParticulares_10.set('fieldAliases', {'id': 'id', });
lyr_VERegistrados_11.set('fieldAliases', {'id': 'id', 'Quant.': 'Quant.', 'Ranking': 'Ranking', 'Município': 'Município', });
lyr_RendaMdiaMensal_12.set('fieldAliases', {'id': 'id', 'Municípo': 'Municípo', 'Renda': 'Renda', });
lyr_LimitesMunicipais_1.set('fieldImages', {'fid': 'TextEdit', 'NM_MUN': 'TextEdit', });
lyr_RodoviasEstaduais_2.set('fieldImages', {'fid': 'TextEdit', 'id_cide': 'Range', 'id_referen': 'TextEdit', 'codigo_rod': 'TextEdit', });
lyr_RodoviasFederais_3.set('fieldImages', {'fid': 'TextEdit', 'id_cide': 'Range', 'id_referen': 'TextEdit', 'codigo_rod': 'TextEdit', });
lyr_TrechosEtapa3_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TrechosEtapa2_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TrechosEtapa1_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_EletropostosEtapa3_7.set('fieldImages', {'id': 'TextEdit', });
lyr_EletropostosEtapa2_8.set('fieldImages', {'id': 'TextEdit', });
lyr_EletropostosEtapa1_9.set('fieldImages', {'id': 'TextEdit', });
lyr_EletropostosParticulares_10.set('fieldImages', {'id': 'TextEdit', });
lyr_VERegistrados_11.set('fieldImages', {'id': 'TextEdit', 'Quant.': 'TextEdit', 'Ranking': 'TextEdit', 'Município': 'TextEdit', });
lyr_RendaMdiaMensal_12.set('fieldImages', {'id': 'TextEdit', 'Municípo': 'TextEdit', 'Renda': 'TextEdit', });
lyr_LimitesMunicipais_1.set('fieldLabels', {'fid': 'hidden field', 'NM_MUN': 'no label', });
lyr_RodoviasEstaduais_2.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'hidden field', 'id_referen': 'hidden field', 'codigo_rod': 'no label', });
lyr_RodoviasFederais_3.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'hidden field', 'id_referen': 'hidden field', 'codigo_rod': 'no label', });
lyr_TrechosEtapa3_4.set('fieldLabels', {'fid': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_TrechosEtapa2_5.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TrechosEtapa1_6.set('fieldLabels', {'fid': 'no label', });
lyr_EletropostosEtapa3_7.set('fieldLabels', {'id': 'hidden field', });
lyr_EletropostosEtapa2_8.set('fieldLabels', {'id': 'hidden field', });
lyr_EletropostosEtapa1_9.set('fieldLabels', {'id': 'hidden field', });
lyr_EletropostosParticulares_10.set('fieldLabels', {'id': 'no label', });
lyr_VERegistrados_11.set('fieldLabels', {'id': 'hidden field', 'Quant.': 'no label', 'Ranking': 'no label', 'Município': 'hidden field', });
lyr_RendaMdiaMensal_12.set('fieldLabels', {'id': 'hidden field', 'Municípo': 'hidden field', 'Renda': 'no label', });
lyr_RendaMdiaMensal_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
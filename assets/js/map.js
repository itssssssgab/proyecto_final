var map = L.map('map', {
    center: [-13.17226, -72.18854],
    zoom: 18,
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'});
basemapOSM.addTo(map);

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleStreets.addTo(map)

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map)

var cusco = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:cusco", //gisweb:departamento cusco
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
cusco.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:provincias", //gisweb:provincias de cusco
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:distritos", //gisweb:distritos de cusco
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
distritos.addTo(map);

var bomberos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:Estacion de bomberos", //gisweb:bomberos
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
bomberos.addTo(map);

var Mercados = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:Mercados", //gisweb:mercados
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
Mercados.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:colegios", //gisweb:colegios
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
colegios.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:farmacias", //gisweb:farmacias
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
farmacias.addTo(map);

var hospitales = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:hospitales", //gisweb:hospitales
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hospitales.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:hoteles", //gisweb:hoteles
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hoteles.addTo(map);

var iglesias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:iglesias", //gisweb:iglesias
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
iglesias.addTo(map);

var museos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:museos", //gisweb:museos 
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
museos.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_final/wms?", {
	   layers: "proyecto_final:restaurantes", //gisweb:restaurantes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
restaurantes.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Google Street": googleStreets,
    "Google satelite": googleSat
};

var overlayMaps = {
    "Despartamento Cusco": cusco,
    "Limite Provincial": provincias,
    "Limite Distrital": distritos,
    "Estaciones de Bomberos": bomberos,
    "Mercados": Mercados,
    "Colegios": colegios,
    "Farmacias": farmacias,
    "hospitales": hospitales,
    "Holetes": hoteles,
    "Iglesias": iglesias,
    "Museos": museos,
    "Restaurantes": restaurantes
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
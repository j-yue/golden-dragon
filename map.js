const createMap = () => {
    let [lon, lat] = [-118.236214, 34.065498];


    let popup = new ol.Overlay({
        pos: ol.proj.fromLonLat([lon, lat]),
        element: document.querySelector('#popup')
    });

    let marker = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([lon, lat])
        )
    });

    let vectorSource = new ol.source.Vector({
        features: [marker]
    });

    let markerLayer = new ol.layer.Vector({
        source: vectorSource
    });
      
    new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: 'http://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                })
            }),
            markerLayer
        ],
        controls: [
            new ol.control.Attribution,
            new ol.control.Zoom,
            new ol.control.FullScreen
        ],
        overlays: [popup],
        interactions: ol.interaction.defaults().extend([
            new ol.interaction.DragAndDrop
        ]),
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: 16
        })
    });

    popup.setPosition(ol.proj.fromLonLat([lon, lat]));


};


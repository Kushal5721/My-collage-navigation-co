export function addRoadLayer(map, roadNetwork) {

    map.addSource('campus-roads', {
        type: 'geojson',
        data: {
            type: "FeatureCollection",
            features: roadNetwork.map(r => ({
                type: "Feature",
                properties: { id: r.id, oneway: r.oneway },
                geometry: {
                    type: "LineString",
                    coordinates: r.coords
                }
            }))
        }
    });


    map.addLayer({
        id: 'campus-roads-outline',
        type: 'line',
        source: 'campus-roads',
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#000',
            'line-width': 30
        }
    });

    map.addLayer({
        id: 'campus-roads-layer',
        type: 'line',
        source: 'campus-roads',
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#a49f9f',
            'line-width': 7
        }
    });
    map.on('click', 'campus-roads-layer', (e) => {
        console.log('Road clicked:', e.features[0].properties.id);
    });
}
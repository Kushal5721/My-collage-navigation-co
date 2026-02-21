import { createBuildingLayer } from './buildingLayer.js';

export function addBuildings(map) {
  const buildings = [
    {
      id: 'building-1',
      lngLat: [77.0924658402659, 13.322579845174133],
      glbPath: './tree1.glb',
      scaleFactor: 30,
      offsetY: 0
    },
    {
      id: 'building-2',
      lngLat: [77.09228368864467, 13.322883389445579],
      glbPath: './BisectedFilledGeoDome.glb',
      scaleFactor: 20,
      offsetY: 0.7
    },
    {
      id: 'building-3',
      lngLat: [77.09210322619134, 13.322218089539632],
      glbPath: './mba_block.glb',
      scaleFactor: 70,
      offsetY: 0.1,
      rotationY: -0.2
    },
    {
      id: 'building-4',
      lngLat: [77.09004639968697, 13.320906064935585],
      glbPath: './lumbinih.glb',
      scaleFactor: 100,
      offsetX: 0,
      rotationY: -0.15,
        offsetY: 0.1
    }
  ];

  buildings.forEach(cfg => {
    map.addLayer(createBuildingLayer({
      map,
      ...cfg
    }));
  });
}
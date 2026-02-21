export const trees = [
  { id: 'tree-1',  lngLat: [77.09288622870713, 13.32250580999441], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-2',  lngLat: [77.09298820045643, 13.322407303064608], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-3',  lngLat: [77.09317936370155, 13.322437828127278], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-4',  lngLat: [77.09283622427608, 13.322264277704775], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-5',  lngLat: [77.09297722654588, 13.322183832355137], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-6',  lngLat: [77.09323339355603, 13.32219252205553], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-7',  lngLat: [77.09282194167133, 13.321967131868092], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-8',  lngLat: [77.09302578790596, 13.322081932087457], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-9',  lngLat: [77.09314526965676, 13.32196946020062], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-10', lngLat: [77.09280487139972, 13.321781332092613], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-11', lngLat: [77.09303535222239, 13.321785764712729], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-12', lngLat: [77.09319891170952, 13.321749326897944], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-13', lngLat: [77.09280750512573, 13.321593065891676], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-14', lngLat: [77.09303253027076, 13.321590394961703], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-15', lngLat: [77.09320320067786, 13.32159985030647], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-16', lngLat: [77.09273561429495, 13.32136588843126], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-17', lngLat: [77.09290677391078, 13.321406319902422], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-18', lngLat: [77.0930791445333, 13.321251765313633], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-19', lngLat: [77.09317062851574, 13.32147186907332], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-20', lngLat: [77.0926240690282, 13.321192104277358], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-21', lngLat: [77.09275486921524, 13.321207342966076], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-22', lngLat: [77.09286799932124, 13.321135883929827], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-23', lngLat: [77.0930555061882, 13.321103713010928], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-24', lngLat: [77.0931969333929, 13.321109566484836], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-25', lngLat: [77.09260035501893, 13.321040466183973], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-26', lngLat: [77.09279496687992, 13.32097354931679], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-27', lngLat: [77.09299144892714, 13.321018287444346], scaleFactor: 30, offsetY: 0 },
  { id: 'tree-28', lngLat: [77.09313940506746, 13.320960724405268], scaleFactor: 30, offsetY: 0 }
];
/**
 * Renders all trees on the map
 * @param {maplibregl.Map} map
 * @param {Function} createBuildingLayer
 */
export function renderTrees(map, createBuildingLayer) {
  trees.forEach(tree => {
    map.addLayer(
      createBuildingLayer({
        id: tree.id,
        map,
        lngLat: tree.lngLat,
        glbPath: './models/tree1.glb',
        scaleFactor: tree.scaleFactor,
        offsetY: tree.offsetY
      })
    );
  });
}
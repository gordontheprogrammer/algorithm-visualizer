// DijkstraPage.js
import React from 'react';
import { dijkstra, getNodesInShortestPathOrder } from '../algorithms/dijkstra';
import PathfindingVisualizer from './PathfindingVisualizer';

const DijkstraPage = () => {
  return (
    <div>
      <h2>Dijkstra's Algorithm</h2>
      <PathfindingVisualizer algorithm={dijkstra} />
    </div>
  );
};

export default DijkstraPage;

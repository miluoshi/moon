import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { GraphInfo } from './types';

cytoscape.use(dagre);

export function render(element: HTMLElement, data: GraphInfo) {
	const nodes = data.nodes.map((n) => ({
		data: { id: n.id.toString(), label: n.label },
	}));

	const edges = data.edges.map((e) => ({
		data: { id: e.id.toString(), source: e.source.toString(), target: e.target.toString() },
	}));

	return cytoscape({
		container: element,
		elements: { edges, nodes },
		layout: { name: 'dagre' },
		style: [
			{
				selector: 'edges',
				style: {
					'curve-style': 'straight',
					'target-arrow-shape': 'vee',
				},
			},
			{
				selector: 'node',
				style: {
					label: 'data(label)',
					shape: 'round-rectangle',
					'text-halign': 'center',
					'text-valign': 'center',
				},
			},
		],
	});
}
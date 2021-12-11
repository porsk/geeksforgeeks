// https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1

class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj) {
        const visited = Array.from({ length: V }, () => false);
        const queue = [];
        const result = [];

        visited[0] = true;
        queue.push(0);

        while (queue.length) {
            const node = queue.shift();

            result.push(node);

            for (const neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }

        return result;
    }
}
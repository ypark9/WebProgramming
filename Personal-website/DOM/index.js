const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

function midpoint(list) {
    let node = list.getFirst();
    let node2x = list.getFirst().next.next;
    while(node2x){
        node2x = node2x.next;
        node = node.next;
    }
    return node;
}

let list = new LinkedList(['a', 'b', 'c', 'd', 'e']);
console.log( midpoint(list));


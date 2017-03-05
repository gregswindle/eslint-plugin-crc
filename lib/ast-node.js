'use strict';

class AstNode {
  constructor(node, locs) {
    this.node = node || null;
    this.locs = locs || [];
  }
}

module.exports = AstNode;

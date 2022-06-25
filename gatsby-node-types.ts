import { Node } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';

export type BlogArticlesQueryReturnType = {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

interface MarkdownRemarkNode extends Node {
  frontmatter?: {
    slug?: string;
  };
}

export function isFileSystemNode(node: Node): node is FileSystemNode {
  return node.internal.type === 'File';
}

export function isMarkdownNode(node: Node): node is MarkdownRemarkNode {
  return node.internal.type === 'MarkdownRemark';
}

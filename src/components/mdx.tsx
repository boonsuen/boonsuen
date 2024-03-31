import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

interface Props {
  source: string;
}

export function CustomMDX(props: Props) {
  return <MDXRemote {...props} components={{}} />;
}

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

interface Props {
  source: string;
}

export function CustomMDX(props: Props) {
  return (
    <MDXRemote
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [
            [
              rehypePrettyCode as any,
              {
                theme: 'night-owl',
              },
            ],
            rehypeKatex as any,
          ],
        },
      }}
      {...props}
      components={{
        Table,
      }}
    />
  );
}

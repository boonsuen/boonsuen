import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';

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

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

interface Props {
  source: string;
}

export function CustomMDX(props: Props) {
  return (
    <MDXRemote
      {...props}
      components={{
        code: Code,
        Table,
      }}
    />
  );
}

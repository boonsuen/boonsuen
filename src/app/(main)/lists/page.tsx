import ListsMDX from '../../content/pages/lists.mdx';

export default function ListsPage() {
  return (
    <main className="min-h-screen layout-container">
      <h1 className="my-10 font-serif text-[clamp(3rem,15cqi,4.5rem)] [line-height:1.1cap] tracking-[-0.025em]">
        Lists
      </h1>
      <hr className="border-main/20" />
      <p className="uppercase mt-6 mb-12 text-[15px]">
        A space for unsorted items.
      </p>
      <div data-mdx="true" className="prose">
        <ListsMDX />
      </div>
    </main>
  );
}

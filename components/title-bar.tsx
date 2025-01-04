export default function TitleBar({ header }: { header: string }) {
  return (
    <div className="w-full h-96 overflow-hidden flex justify-center items-center bg-title bg-no-repeat bg-center bg-cover">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-primary">{header}</h1>
        <p>Home &gt; {header}</p>
      </div>
    </div>
  );
}

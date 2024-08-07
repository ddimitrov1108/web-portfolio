interface Props {
  count: number;
  title: React.ReactNode;
}

const Counter = ({ count, title }: Props) => {
  return (
    <div className="space-y-2">
      <h1 className="text-foreground text-5xl xl:text-6xl font-bold">{count}</h1>
      <p className="text-muted-foreground text-base xl:text-lg font-medium">{title}</p>
    </div>
  );
};
export default Counter;

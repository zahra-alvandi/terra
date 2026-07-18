type Props = {
  title: string;
  value: string | number;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-sm">
      <p className="text-sm text-text-secondary">{title}</p>

      <h3 className="mt-3 text-3xl font-bold text-text-primary">{value}</h3>
    </div>
  );
}

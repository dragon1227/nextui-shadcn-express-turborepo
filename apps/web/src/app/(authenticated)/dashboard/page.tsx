export default function DashboardIndexPage() {
  return <>
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Blank Page</h1>
    </div>
    <div
      className="flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm" x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          Start Here
        </h3>
      </div>
    </div>
  </>
}
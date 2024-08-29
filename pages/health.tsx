import useSWR from "swr";

export default function Home() {
  const { data, isLoading, error } = useSWR("/api/health", async (url) => {
    const response = await fetch(url);
    return response.json();
  });
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data.data);

  return (
    <main className="flex flex-col justify-center min-h-screen items-center bg-gradient-to-tr from-black to-[#322B44] text-white">
      <table className="w-[50%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Endpoint
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.data).map((key) => (
            <tr className="bg-white dark:bg-gray-800" key={key}>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {key}
              </td>
              <td>{data.data[key] ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

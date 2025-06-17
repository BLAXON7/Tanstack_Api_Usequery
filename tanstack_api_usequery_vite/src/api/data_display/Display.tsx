import { useQuery } from "@tanstack/react-query";
import { fetchdata } from "../data_fetch/DataFetch";

type datatype = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const Display = () => {
  const {
    data: Data = [],
    isLoading,
    isPending,
    isError,
  } = useQuery<datatype[]>({
    queryFn: fetchdata,
    queryKey: ["data"],
  });

  if (isLoading || isPending) {
    return <div className="text-lg text-emerald-400">Loading...</div>;
  }

  if (isError) return <p>Error!</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="gap-4">
        {Data.map((data: datatype) => (
          <div key={data.id} className="rounded border border-emerald-100 p-2">
            <p>
              <strong>User ID:</strong> {data.userId}
            </p>
            <p>
              <strong>ID:</strong> {data.id}
            </p>
            <p>
              <strong>Title:</strong> {data.title}
            </p>
            <p>
              <strong>Completed:</strong> {data.completed ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

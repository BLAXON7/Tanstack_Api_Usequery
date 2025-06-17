import { Homepage } from "@/Component/HomeData";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryclient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryclient}>
      <Homepage />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

import { Display } from "@/api/data_display/Display";

export const Homepage = () => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <div className="text-xl font-bold text-emerald-400">USER INFORMATION</div>
      <Display />
    </div>
  );
};

import { Skeleton } from "./skeleton";

export const SectionLoader = () => (
  <div className="px-6 py-16 flex flex-col gap-4 items-center">
    <Skeleton className="h-8 w-1/3" />
    <Skeleton className="h-4 w-2/3" />
    <Skeleton className="h-64 w-full max-w-5xl" />
  </div>
);

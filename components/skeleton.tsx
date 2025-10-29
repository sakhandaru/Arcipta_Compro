import clsx from "clsx";

export const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      "animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md",
      className
    )}
  />
);

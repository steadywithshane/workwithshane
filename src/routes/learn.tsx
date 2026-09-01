import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/learn")({
  beforeLoad: () => {
    throw redirect({ to: "/students" });
  },
  component: () => null,
});

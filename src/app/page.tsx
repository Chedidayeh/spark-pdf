import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getDevice } from "@/lib/device";
import Home from "./Home";

export default async function Page({ searchParams }: { searchParams: Record<string, string | string[]> }) {
  const userAgent = (await headers()).get("user-agent") || "";
  console.log("User Agent:", userAgent);

  const device = getDevice(userAgent);

  // Check if the query param 'source=app' exists
  if (!searchParams.source || searchParams.source !== "app") {
    if (device === "ios") {
      redirect("https://apps.apple.com");
    }
    if (device === "android") {
      redirect("https://play.google.com/store/apps");
    }
  }

  return <Home />;
}
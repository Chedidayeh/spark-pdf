import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getDevice } from "@/lib/device";
import Home from "./Home";

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[]>> }) {
  const userAgent = (await headers()).get("user-agent") || "";
  console.log("User Agent:", userAgent);

  const device = getDevice(userAgent);
  const params = await searchParams;

  // Check if the query param 'source=app' exists
  if (!params.source || params.source !== "app") {
    if (device === "ios") {
      redirect("https://apps.apple.com");
    }
    if (device === "android") {
      redirect("https://play.google.com/store/apps");
    }
  }

  return <Home />;
}
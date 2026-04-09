import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getDevice } from "@/lib/device";
import Home from "./Home";
export default async function Page() {
  const userAgent = (await headers()).get("user-agent") || "";
  console.log("User Agent:", userAgent);
  const device = getDevice(userAgent);

  if (device === "ios") {
    redirect("https://apps.apple.com");
  }

  if (device === "android") {
    redirect("https://play.google.com/store/apps");
  }
  return <Home />;
}

import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    accountAssociation: {
      header:
        "eyJmaWQiOjMzODgyNCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDEwZjY2Q0RkNTQ4MEIyNTJkNzY2NTliOTg0NThEOWE4RjdGQzcxQTgifQ",
      payload:
        "eyJkb21haW4iOiJzbmFrZS1nYW1lLWNoaS1kcmFiLnZlcmNlbC5hcHAifQ",
      signature:
        "MHgwMjhkOGZiZDRkYTk5Y2UzMDZkZTE0ZjEwZTdhOTAzMjBkNDM2Y2NjMzA1OTE4MGUyOWExYjFiYmNlYjZmYWYwNDEyOTYzZTQxOTgzYjI5MmU5ODYwZDJiNTdiMmUxOGQ4NDcyNWUxODc3ODQzYzE4NTJkZGQyZTYxYmFhYzk1NzFi",
    },
    frame: {
      version: "1",
      name: "Hungry snake",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["monad", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}

import { google } from "googleapis";
import keys from "@/creds.json" assert { type: "json" };

export async function handler() {
  const auth = await google.auth.getClient({
    projectId: keys.project_id,
    credentials: {
      type: "service_account",
      private_key: keys.private_key.split(String.raw`\n`).join("\n"),
      client_email: keys.client_email,
      client_id: keys.client_id,
      token_url: keys.token_uri,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: "1bWN4v6DJB0emsQUU5pydxRhIH6ibIERe3ujFBV5luEI",
    range: "Sheet1!A:D",
  });
  return data;
}

import { google } from "googleapis";
import keys from "@/creds.json" assert { type: "json" };

export async function readSpreadsheet(spreadsheetId: string, range: string) {
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
    spreadsheetId,
    range,
  });
  return data.data.values;
}

export async function writeSpreadsheet(
  spreadsheetId: string,
  range: string,
  valueInputOption: string,
  values: string[][]
) {
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

  const data = await sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption,
    requestBody: {
      values,
    },
  });
  return data.status;
}

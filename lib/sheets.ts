// connect to sheets api and make a function readSheet to get data from sheet given sheetId, and range
import { google } from "googleapis";
import { JWT } from "google-auth-library";

const sheets = google.sheets("v4");

const auth = new JWT({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function readSheet(spreadsheetId: string, range: string) {
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range,
  });

  return response.data.values;
}

export { readSheet };

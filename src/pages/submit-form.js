import { google } from 'googleapis';
import { promisify } from 'util';
import { readFile } from 'fs';
import { join } from 'path';
import { config } from 'dotenv';

config();

const readFileAsync = promisify(readFile);

export async function post({ request }) {
  try {
    const data = await request.json();
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A1:C1', // Adjust the range as needed
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[data.name, data.email, data.message]],
      },
    });

    return new Response(JSON.stringify({ message: 'Form submitted successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    return new Response(JSON.stringify({ message: 'Error inserting data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

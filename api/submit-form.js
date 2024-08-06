/*import { google } from 'googleapis';
import { config } from 'dotenv';

// Load environment variables from the .env file
config();

export async function post({ request }) {
  // Log the environment variables to check if they are loaded correctly
  console.log('GOOGLE_APPLICATION_CREDENTIALS:', process.env.GOOGLE_APPLICATION_CREDENTIALS);
  console.log('SPREADSHEET_ID:', process.env.SPREADSHEET_ID);

  const data = await request.json();

  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = process.env.SPREADSHEET_ID;

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:Z', // Adjust based on your sheet structure
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          [
            data.name,
            data.email,
            data.phone,
            data.birthdate,
            data.text
            // Add other fields as needed
          ],
        ],
      },
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating spreadsheet:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
*/
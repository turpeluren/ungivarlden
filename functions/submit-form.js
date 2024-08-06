const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const data = JSON.parse(event.body);

  const auth = new google.auth.GoogleAuth({
    keyFile: path.resolve(__dirname, process.env.GOOGLE_APPLICATION_CREDENTIALS),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = process.env.SPREADSHEET_ID;

  try {
    await sheets.spreadsheets.values.append({
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
            data.text,
            // Add other fields as needed
          ],
        ],
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error updating spreadsheet:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

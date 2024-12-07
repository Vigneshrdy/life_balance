import axios from 'axios';
const JDoodleAPI = 'https://api.jdoodle.com/v1/execute';
const JDoodleClientID = '39394d0ac9f50c216ed1a89324232e3d'; // Replace with your actual JDoodle client ID
const JDoodleClientSecret = '52d4bffabda9a05576dcc80da0b7ea2825fb317e34cdab2e43cc70c8a921fc49'; // Replace with your actual JDoodle client secret
// pages/api/compile.js


export async function POST(req) {
  try {
    const { language, code } = await req.json();

    // Mapping language selection to JDoodle language codes
    const languageMap = {
      c: 'c',
      cpp: 'cpp',
      python: 'python3',
      java: 'java',
    };

    const lang = languageMap[language];

    const payload = {
      script: code,
      language: lang,
      versionIndex: '0',
      clientId: JDoodleClientID,
      clientSecret: JDoodleClientSecret,
    };

    // Make a POST request to JDoodle API
    const response = await axios.post(JDoodleAPI, payload);
    const { output, error } = response.data;

    // Send the result back to the client
    return new Response(
      JSON.stringify({
        output: output || 'No output returned',
        error: error || 'No errors',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Error compiling code:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to compile the code.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

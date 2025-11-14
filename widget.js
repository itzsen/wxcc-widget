import { Desktop } from 'https://unpkg.com/@wxcc-desktop/sdk/dist/wxcc-desktop-sdk.esm.js';

Desktop.config({
  clientId: '<YOUR_CLIENT_ID>',
  redirectUri: '<YOUR_REDIRECT_URI>'
});

document.getElementById('message').innerText = 'Hello World from Webex Contact Center!';

Desktop.agent.getAgentDetails().then(agent => {
  document.getElementById('agentName').innerText = agent.name || 'Unknown';
  document.getElementById('agentState').innerText = agent.state || 'Unavailable';
});

import { Desktop } from 'https://cdn.jsdelivr.net/npm/@wxcc-desktop/sdk@2.0.11/dist/index.min.js';

Desktop.config({
  clientId: '<YOUR_CLIENT_ID>',
  redirectUri: '<YOUR_REDIRECT_URI>'
});

document.getElementById('message').innerText = 'Hello World from Webex Contact Center!';

Desktop.agent.getAgentDetails().then(agent => {
  document.getElementById('agentName').innerText = agent.name || 'Unknown';
  document.getElementById('agentState').innerText = agent.state || 'Unavailable';
});

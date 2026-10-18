const core = require('@actions/core');
const github = require('@actions/github');
try {
  const name = core.getInput('name', { required: true });
  const greeting = core.getInput('greeting') || 'Hello';
  const message = `${greeting}, ${name}! SAP 51650 - GitHub Actions activity`;
  core.info(message);
  core.info(`Actor: ${github.context.actor}; Event: ${github.context.eventName}`);
  core.setOutput('message', message);
} catch (error) { core.setFailed(error.message); }

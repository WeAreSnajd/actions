const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const myInput = core.getInput('myInput');
    const tag = myInput.replace('refs/tags/', '');
    console.log(`Hello ${myInput} from inside a container`);

    // Get github context data
    const context = github.context;
    console.log(`We can even get context data, like the repo: ${context.repo.repo}`)

    // core.setOutput('myOutput', myInput.replace('e', 'E').replace('refs/tags/', ''));
    core.exportVariable('TAG', tag);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

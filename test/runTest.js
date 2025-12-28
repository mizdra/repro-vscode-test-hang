import { resolve } from 'node:path';
import { runTests } from '@vscode/test-electron';

async function main() {
  try {
    const extensionDevelopmentPath = import.meta.dirname;

    // The following will hang the test.
    const extensionTestsPath = resolve(import.meta.dirname, 'runner.cjs');

    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: ['--disable-extensions'],
      // vscodeExecutablePath: '/Users/mizdra/src/github.com/microsoft/vscode/scripts/code.sh',
    });
  } catch (err) {
    console.error(err);
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();

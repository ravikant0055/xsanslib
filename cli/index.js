#!node
const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const program = new Command();

program.version('1.4.7');

// Add a specific component (e.g., XButton.jsx)
program
  .command('add <component>')
  .description('Add a component')
  .action(async (component) => {
    // Path to the component file in the packages directory
    const srcPath = path.join(__dirname, '..', 'packages', component, `${component}.jsx`);
    const destDir = path.join(process.cwd(), 'src/xcomponents');
    const destPath = path.join(destDir, `${component}.jsx`);

    console.log('Source Path:', srcPath);
    console.log('Destination Path:', destPath);

    // Check if the source file exists
    if (!fs.existsSync(srcPath)) {
      console.error(`Component ${component}.jsx does not exist at ${srcPath}`);
      process.exit(1);
    }

    // Ensure the destination directory exists
    await fs.ensureDir(destDir);
    // Copy the component file to the destination directory
    await fs.copy(srcPath, destPath);
    console.log(`Component ${component}.jsx added to src/xcomponents in your project.`);
  });

// Install all components
program
  .command('add-all')
  .description('Add all components')
  .action(async () => {
    const srcDir = path.join(__dirname, '..', 'packages');
    const destDir = path.join(process.cwd(), 'src/xcomponents');

    // List of components to install
    const components = ['xbutton', 'xloader']; // Add all components here

    // Ensure the destination directory exists
    await fs.ensureDir(destDir);

    for (const component of components) {
      const srcPath = path.join(srcDir, component, `${component}.jsx`);
      const destPath = path.join(destDir, `${component}.jsx`);

      if (fs.existsSync(srcPath)) {
        await fs.copy(srcPath, destPath);
        console.log(`Component ${component}.jsx added.`);
      } else {
        console.error(`Component ${component}.jsx does not exist at ${srcPath}`);
      }
    }

    console.log('All components added to src/xcomponents in your project.');
  });

program.parse(process.argv);

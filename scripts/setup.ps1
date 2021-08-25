$setup = @{
  step = 1
}

function incStep() {
  $setup.step++
}

function installDependencies() {
  Write-Host "Installing Dependencies...";
  Invoke-Expression "npm ci";
}

function setup() {
  Write-Host -ForegroundColor Green "$($setup.step). Setting up Development Workspace..."; incStep;
  installDependencies
}

function printSuccess() {
  Write-Host -ForegroundColor Green "Successfully set up Development Workspace!";
}

function printFail() {
  Write-Host -ForegroundColor Red "Something went wrong. Make sure Node.js is installed on your machine";
}

function run() {
  try {
    setup;
  }
  catch {
    printFail;
  }
  finally {
    printSuccess;
  }
}

run;

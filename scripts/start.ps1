
function startDev() {
  Invoke-Expression "npm run dev";
}

function run() {
  Write-Host -ForegroundColor Green "Starting AlpsBTE Website...";
  startDev;
}

run;

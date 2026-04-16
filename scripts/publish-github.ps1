# One-time: run "gh auth login" and complete the browser flow.
# Then: .\scripts\publish-github.ps1
$ErrorActionPreference = "Stop"
$gh = "C:\Program Files\GitHub CLI\gh.exe"
if (-not (Test-Path $gh)) {
  Write-Error "GitHub CLI not found at $gh. Install from https://cli.github.com/"
}
$repoName = "salexpert"

cmd /c "`"$gh`" auth status >nul 2>&1"
if ($LASTEXITCODE -ne 0) {
  Write-Host "Not logged in to GitHub. Run this first, then re-run this script:" -ForegroundColor Yellow
  Write-Host "  & `"$gh`" auth login" -ForegroundColor Cyan
  exit 1
}

Set-Location (Join-Path $PSScriptRoot "..")
if (-not (Test-Path ".git")) {
  Write-Error "Run this from the SaleXpert repo (no .git folder here)."
}

$hasOrigin = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
  Write-Host "Remote 'origin' already exists: $hasOrigin"
  Write-Host "Pushing to origin..."
  git push -u origin main
  exit $LASTEXITCODE
}

Write-Host "Creating GitHub repo tahaSawan/$repoName and pushing..."
& $gh repo create $repoName --public --source=. --remote=origin --push --description "SaleXpert marketing site (Next.js)"
exit $LASTEXITCODE

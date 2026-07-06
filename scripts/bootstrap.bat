@echo off
echo.
echo ========================================================
echo       EcoPilot Project Initialization (Windows)
echo ========================================================
echo.

echo [1/4] Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install dependencies.
    exit /b %ERRORLEVEL%
)

echo [2/4] Generating Prisma Client...
call npx prisma generate
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to generate Prisma client.
    exit /b %ERRORLEVEL%
)

echo [3/4] Running ESLint...
call npm run lint
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] ESLint found issues, but continuing...
)

echo [4/4] Running TypeScript Check...
call npm run typecheck
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] TypeScript compilation failed.
    exit /b %ERRORLEVEL%
)

echo.
echo ========================================================
echo   ✅ Setup Complete!
echo.
echo   Next steps:
echo   1. Copy .env.example to .env.local and fill in values
echo   2. Run 'npm run dev' to start the development server
echo ========================================================
echo.

#!/bin/bash
echo ""
echo "========================================================"
echo "      EcoPilot Project Initialization (Unix/Linux)"
echo "========================================================"
echo ""

set -e # Exit immediately if a command exits with a non-zero status

echo "[1/4] Installing dependencies..."
npm install

echo "[2/4] Generating Prisma Client..."
npx prisma generate

echo "[3/4] Running ESLint..."
npm run lint || echo "[WARNING] ESLint found issues, but continuing..."

echo "[4/4] Running TypeScript Check..."
npm run typecheck

echo ""
echo "========================================================"
echo "  ✅ Setup Complete!"
echo ""
echo "  Next steps:"
echo "  1. Copy .env.example to .env.local and fill in values"
echo "  2. Run 'npm run dev' to start the development server"
echo "========================================================"
echo ""

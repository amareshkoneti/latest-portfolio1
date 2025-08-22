#!/bin/bash

echo "Building portfolio website..."
cd "$(dirname "$0")"
bun run build
cd dist
zip -rFS ../../output.zip .
echo "Build completed!"

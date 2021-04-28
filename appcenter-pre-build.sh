#!/usr/bin/env bash

echo "Running HORUSEC..."
curl -fsSL https://horusec.io/bin/install.sh | bash && horusec start -p ./

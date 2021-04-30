#!/usr/bin/env bash

echo "Running Prebuild..."
echo "Appcenter env: " "$VERSION_NAME"
echo "Appcenter token: $APP_CENTER_TOKEN"

git --version
exit 1

curl -fsSL https://horusec.io/bin/install.sh | bash && horusec start -p . --disable-docker="true"

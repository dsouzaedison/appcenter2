#!/usr/bin/env bash

echo "Running Prebuild..."
echo "Appcenter token 2: $(APP_CENTER_TOKEN)"
echo "Appcenter token 3: $($APP_CENTER_TOKEN)"

curl -fsSL https://horusec.io/bin/install.sh | bash && horusec start -p . --disable-docker="true"

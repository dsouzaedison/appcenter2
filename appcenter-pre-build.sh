#!/usr/bin/env bash

echo "Running Prebuild..."
echo "Appcenter env: " "$VERSION_NAME"
echo "Appcenter token: $APP_CENTER_TOKEN"

#curl -fsSL https://horusec.io/bin/install.sh | bash && horusec start -p . --disable-docker="true"

curl -fsSL https://horusec.io/bin/install.sh | bash
echo "Starting HORUSEC"
results=$(horusec start -p . --disable-docker="true")
#Returns "HORUSEC ENDED THE ANALYSIS WITH STATUS OF "error" AND WITH THE FOLLOWING RESULTS:" on failure

#Compare if the error string exists
if [[ $results == *'HORUSEC ENDED THE ANALYSIS WITH STATUS OF "error"'* ]]; then
  echo "HORUSEC vulnerability check has failed"
  exit 1
fi

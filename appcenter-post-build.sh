#!/usr/bin/env bash

echo "Running Postbuild..."
ipaPath=$(find . -name "*.ipa" | head -1)
apkPath=$(find . -name "*.apk" | head -1)
commitMessage=$(git log -1 --pretty=%B)
pwa=$PWA # Store project root
timestamp=$(date +%Y-%m-%d_%H-%M-%S)
newName="custom_build_$($timestamp)"
npm install -g appcenter-cli

appcenter login --token "568cc4593d1f96eac42b595a4df7e4d68af5b29b"
#appcenter login --token "${APP_CENTER_TOKEN}"

# APPCENTER_BRANCH - Verify this before distribution to ensure, only develop and master branch builds are distributed

#if [ "$APP_CENTER_CURRENT_PLATFORM" == "ios" ] && [ -n "$ipaPath" ]; then
if [ -n "$ipaPath" ]; then
  cd "$(dirname "${ipaPath}")" || exit
  ipaName=$(find . -name "*.ipa" | head -1)
  mv "$ipaName" "${newName}.ipa"
  cd "$pwa" || exit
  generatedIpaPath=$(find . -name "${newName}.ipa" | head -1)
  appcenter distribute release -f "$generatedIpaPath" -r "${commitMessage}" -g Collaborators --app dsouzaedison11/appCenter2-ios
fi

#if [ "$APP_CENTER_CURRENT_PLATFORM" == "android" ] && [ -n "$apkPath" ]; then
if [ -n "$apkPath" ]; then
  cd "$(dirname "${apkPath}")" || exit                                                                                       # Move to apk file folder
  apkName=$(find . -name "*.apk" | head -1)                                                                                  # Find apk filename
  mv "$apkName" "${newName}.apk"                                                                                             # Rename apk with custom name
  cd "$pwa" || exit                                                                                                          # Get back to project root
  generatedApkPath=$(find . -name "${newName}.apk" | head -1)                                                                # Find the apk path from project root
  appcenter distribute release -f "$generatedApkPath" -r "${commitMessage}" -g Collaborators --app dsouzaedison11/appCenter2 # Distribute via appcenter
fi

#- ES lint and horusec errors should break the build
#Release notes integration
#ENV access

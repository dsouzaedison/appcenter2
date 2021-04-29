#!/usr/bin/env bash

ipaPath=$(find . -name "*.ipa" | head -1)
apkPath=$(find . -name "*.apk" | head -1)
pwa=$PWA # Store project root
timestamp=$(date +%Y-%m-%d_%H-%M-%S)
newName="custom_build_$($timestamp)"
npm install -g appcenter-cli

appcenter login --token "568cc4593d1f96eac42b595a4df7e4d68af5b29b"
#appcenter login --token "${APP_CENTER_TOKEN}"

# APPCENTER_BRANCH - Verify this before distribution to ensure, only develop and master branch builds are distributed

if [ "$APP_CENTER_CURRENT_PLATFORM" == "ios" ] && [ -n "$ipaPath" ]; then
  cd "$ipaPath" || exit
  ipaPath=$(find . -name "*.ipa" | head -1)
  mv "$ipaPath" "$(newName).ipa"
  cd "$pwa" || exit
  ipaPath=$(find . -name "*.ipa" | head -1)
  appcenter distribute release -f "$ipaPath" -g Collaborators --app Hidden-Brains/appCenter-iOS
fi

if [ "$APP_CENTER_CURRENT_PLATFORM" == "android" ] && [ -n "$apkPath" ]; then
  cd "$apkPath" || exit                                                                       # Move to apk file folder
  apkPath=$(find . -name "*.apk" | head -1)                                                   # Find apk filename
  mv "$apkPath" "$(newName).apk"                                                              # Rename apk with custom name
  cd "$pwa" || exit                                                                           # Get back to project root
  apkPath=$(find . -name "*.apk" | head -1)                                                   # Find the apk path from project root
  appcenter distribute release -f "$apkPath" -g Collaborators --app dsouzaedison11/appCenter2 # Distribute via appcenter
fi

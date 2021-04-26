#!/usr/bin/env bash

IPAFile=$(find . -name "*.ipa" | head -1)
APKFile=$(find . -name "*.apk" | head -1)

npm install -g appcenter-cli

appcenter login --token "568cc4593d1f96eac42b595a4df7e4d68af5b29b"

if [ -n "$IPAFile" ]; then
appcenter distribute release -f "$IPAFile" -g Collaborators --app Hidden-Brains/appCenter-iOS
fi

if [ -n "$APKFile" ]; then
appcenter distribute release -f "$APKFile" -g Collaborators --app Hidden-Brains/appCenter-Android
fi

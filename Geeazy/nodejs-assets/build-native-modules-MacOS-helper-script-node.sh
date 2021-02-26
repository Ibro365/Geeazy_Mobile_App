#!/bin/bash
      # Helper script for Gradle to call node on macOS in case it is not found
      export PATH=$PATH:/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/ibrahim/Documents/Geeazy_Mobile_App/Geeazy/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/ibrahim/Documents/Geeazy_Mobile_App/Geeazy/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/3.8/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Users/ibrahim/opt/anaconda3/bin:/Users/ibrahim/opt/anaconda3/condabin:/Users/ibrahim/Library/Android/sdk/emulator:/Users/ibrahim/Library/Android/sdk/tools:/Users/ibrahim/Library/Android/sdk/tools/bin:/Users/ibrahim/Library/Android/sdk/platform-tools
      node $@
    
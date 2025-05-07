# Challenges Encountered


## Version Migration

1. **Context:** Upgrading to Angular 15<br>**Error:** ./src/polyfills.ts - Error: Module build failed (from ./node_modules/@ngtools/webpack/src/ivy/index.js): Error: Transform failed with 1 error: path/to/component.module.css:17:100: ERROR: Unterminated string token
    - In angular.json, set `optimization: false` to reveal the true error
    - Led to → Error: The 'exportType' option with the 'css-style-sheet' or 'string' value requires the 'esModules' option to be enabled
    - Starting in Angular 15, stylesheets can no longer be named `*.module.styleext`, e.g. shared.module.less. 
    - **Solution:** All `*.module.css` must be renamed...
    - **!REF**
        - https://stackoverflow.com/questions/73046301/angular-14-error-transform-failed-with-1-error-error-unterminated-string-toke
        - https://stackoverflow.com/questions/77252961/error-module-build-failed-from-node-modules-css-loader-dist-cjs-js-while-up

1. **Context:** Upgrading to Angular 18<br>**Error:** X \[ERROR] TS2304: Cannot find name 'HttpClientModule'. \[plugin angular-compiler]
    - Related to migration comment below:
        - ❯ Replace deprecated HTTP related modules with provider functions.<br>
        UPDATE src/app/core/core.module.ts (836 bytes)<br>
            Migration completed (1 file modified).
        - ```ts
          import { provideHttpClient } from '@angular/common/http';
          @NgModule({ providers: [ provideHttpClient() ] })
          ```
    - **!REF** https://medium.com/@assiljanbeih/httpclientmodule-deprecated-angular-18-843832c663dc

1. **Context:** Upgrading to Angular 17<br>**Error:** ./src/polyfills.ts:53:0-27 - Error: Module not found: Error: Package path ./dist/zone is not exported from package ~\\...\project\node_modules\zone.js <br>(see exports field in ~\\...\project\node_modules\zone.js\package.json)
    - Issue in polyfills.ts, `import 'zone.js/dist/zone';  // Included with Angular CLI.`
    - **Solution:** Change import to `import 'zone.js';`
    - **!REF** https://stackoverflow.com/questions/57003624/error-in-src-polyfills-ts-module-not-found-error-cant-resolve-zone-js-dist


1. **Context:** Upgrading to Angular 19 #sass<br>**Error:** The plugin "angular-sass" was triggered by this import <br>angular:styles/global:styles:2:8: <br>2 │ @import 'src/styles.scss';<br><br>▲ [WARNING] Deprecation [plugin angular-sass]<br>src/styles.scss:6:8:<br>6 │ @import "node_modules/bootstrap/scss/reboot";<br>&nbsp;&nbsp;╵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^<br>Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.
    - **Solution:** Refactor stylesheets to use @use and @forward. Bootstrap 4.4 doesn't seem to support the new paradigm. Sunsetting VTU app.
    - **!REF** [Stop using @import with Sass | @use and @forward explained](https://youtu.be/CR-a8upNjJ0)

1. **Context:** Upgrading to Angular 17<br>**Error:** angular.json → Property buildTarget is not allowed
    - **Solution:** Re-open VS Code...

1. **Context:** Upgrade to Angular 18 #sass<br>**Error:** X [ERROR] Could not resolve "~src/assets/images/iceland/bruarfoss-waterfall.jpg" [plugin angular-css-resource]<br><br>
    src/app/features/udemy/courses/advanced-css-and-sass/Natours/natours-apex/natours-header/natours-header.component.scss:75:106:<br>
      75 │ ...0.75)), url("~src/assets/images/iceland/bruarfoss-waterfall.jpg");<br><br>
      You can remove the tilde and use a relative path to reference it, which should remove this error.<br>
      Preprocessor stylesheets may not show the exact file location of the error.
    - **Solution:** Direct pathing under `/assets` is possible for `url()`. Answer given by MS Copilot :exploding_head:
    - **!REF**
        - https://stackoverflow.com/questions/71081883/angular-scss-url-cant-resolve-relative-path-when-project-is-build
        - https://github.com/angular/angular-cli/issues/28638
        - https://stackoverflow.com/questions/70082698/tilde-in-scss-use-statement-no-longer-resolving-to-node-modules-as-of-angular
        - https://medium.com/@osinpaul/how-to-use-absolute-path-with-angular-sass-50431fdc2e9a
        - https://dev.to/muhammadawaisshaikh/how-to-avoid-long-relative-paths-import-in-your-angular-app-12j7

1. **Context:** SITUATION<br>**Error:** ERROR_MESSAGE
1. **Context:** SITUATION<br>**Error:** ERROR_MESSAGE
1. **Context:** SITUATION<br>**Error:** ERROR_MESSAGE
1. **Context:** SITUATION<br>**Error:** ERROR_MESSAGE
1. **Context:** SITUATION<br>**Error:** ERROR_MESSAGE

### To Investigate
- Application projects that are using the '@angular-devkit/build-angular' package's 'browser' and/or 'browser-esbuild' builders will be migrated to use the new 'application' builder - https://angular.dev/tools/cli/build-system-migration
    - The output location of the browser build has been updated from "dist/angular-jungle-gym" to "dist/angular-jungle-gym/browser". You might need to adjust your deployment pipeline or, as an alternative, set outputPath.browser to "" in order to maintain the previous functionality.

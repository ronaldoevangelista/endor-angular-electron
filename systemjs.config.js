/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        'ng2-material': 'node_modules/ng2-material',
        '@angular2-material/core': 'node_modules/@angular2-material/core',
        '@angular2-material/core/overlay': 'node_modules/@angular2-material/core/overlay',
        '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar',
        '@angular2-material/checkbox': 'node_modules/@angular2-material/checkbox',
        '@angular2-material/icon': 'node_modules/@angular2-material/icon',

        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-material': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular2-material/core': {
            main: 'core.js',
            defaultExtension: 'js'
        },
        '@angular2-material/checkbox': {
            main: 'checkbox.js',
            defaultExtension: 'js'
        },
        '@angular2-material/core/overlay': {
            main: 'overlay.js',
            defaultExtension: 'js'
        },
        '@angular2-material/icon': {
            main: 'icon.js',
            defaultExtension: 'js'
        },
        '@angular2-material/toolbar': {
            main: 'toolbar.js',
            defaultExtension: 'js'
        },
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    // No umd for router yet
    packages['@angular/router'] = {
        main: 'index.js',
        defaultExtension: 'js'
    };

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
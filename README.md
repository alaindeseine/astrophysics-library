# AstrophysicsLibrary

[![npm version](https://badge.fury.io/js/%40cabinfo.eu%2Fastrophysics-library.svg)](https://badge.fury.io/js/%40cabinfo.eu%2Fastrophysics-library)
[![HitCount](http://hits.dwyl.io/adeseine/@cabinfoeu/astrophysics-library.svg)](http://hits.dwyl.io/adeseine/@cabinfoeu/astrophysics-library)
![NPM](https://img.shields.io/npm/l/@cabinfo.eu/astrophysics-library.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/alaindeseine/astrophysics-library.svg)
![GitHub top language](https://img.shields.io/github/languages/top/alaindeseine/astrophysics-library.svg)
![GitHub package.json version](https://img.shields.io/github/package-json/v/alaindeseine/astrophysics-library.svg)


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

> Note: This library is currently a work in progress and is therefore subject to frequent changes. Use with care. 

## Installation

Run `npm install --save @cabinfo.eu/astrophysics-library` to install the library.

## Objects

For the moment, the library contains only one object. This object exposes physical constants and physical quantities as well as conversion methods.

### Example

````typescript
    let physicsConstants = new CPhysicsConstants();
    physicsConstants.logConstants();
    console.info( 'Light celerity in vaccum  : ', physicsConstants.c );
    console.info( 'Ligth celerity informations : ', physicsConstants.getConstantInfo( 'c' ) );
    console.info( 'Ligth celerity unit : ', physicsConstants.getConstantInfo( 'c' ).unit );
    console.info( '******************************************************************************************' );
    console.info( 'Convert 1.49597870e11 meter to astronomical unit : ', physicsConstants.meter2au( 1.49597870e11 ) );
    console.info( 'Convert 3.085677581e16 meter to parsec : ', physicsConstants.meter2pc( 3.085677581e16 ) );
    console.info( 'Convert 9460730472580800 meter to light year : ', physicsConstants.meter2lr( 9460730472580800 ) );
    console.info( 'Convert 1 astronomical unit to meter : ', physicsConstants.au2meter( 1 ) );
    console.info( 'Convert 1 astronomical unit to kilometer : ', physicsConstants.au2kilometer( 1 ) );
    console.info( 'Convert 63241.07708427 astronomical unit to light year : ', physicsConstants.au2lr( 63241.07708427 ) );
    console.info( 'Convert 206264.806471 astronomical unit to parsec : ', physicsConstants.au2pc( 206264.806471 ) );
    console.info( 'Convert 1 parsec to meter : ', physicsConstants.pc2meter( 1 ) );
    console.info( 'Convert 1 parsec to kilometer : ', physicsConstants.pc2kilometer( 1 ) );
    console.info( 'Convert 1 parsec to astronomical unit : ', physicsConstants.pc2au( 1 ) );
    console.info( 'Convert 0.30660139 parsec to light year : ', physicsConstants.pc2lr( 0.30660139 ) );
    console.info( 'Convert 1 light year to meter : ', physicsConstants.lr2meter( 1 ) );
    console.info( 'Convert 1 light year to kilometer : ', physicsConstants.lr2kilometer( 1 ) );
    console.info( 'Convert 1 light year to astronomical unit : ', physicsConstants.lr2au( 1 ) );
    console.info( 'Convert 1 light year to parsec : ', physicsConstants.lr2pc( 1 ) );

````



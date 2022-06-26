# Promokit React SPA

## About the App

This is a Single Page Application developed using React. It works like a lightweight front office of Prestashop eCommerce shops. Currently the App is designed for mobile devices only and development is still in progress.

## Getting Started

1. Install REST API module https://github.com/promokit/prestashop-rest using native prestashop module installation system
2. Install current Prestashop React App module

Download compiled module here https://amp.promokit.eu/pkreact.zip

## Compilation

### Configure .env file

**Adjust .env file to compile production build**

- **REACT_APP_DIR** : _Domain folder path. Set the variable if you want to define it manually. Leave empty to use the domain where APP running. This variable can be useful in development mode to direct request to installed prestashop instance_
- **REACT_APP_SUBDIR** : _Domain subfolder path. Leave "/" for websites in domain root folder (Ex. /www/subdomain/)_
- **REACT_APP_BUILD_PATH** : _path to folder where the app should be build. By default it's ${REACT_APP_SUBDIR}modules/pkreact/app/build_

**.env file example**

```bash
REACT_APP_DEBUG=0
REACT_APP_DIR=
REACT_APP_SUBDIR=/www/prestashop/
REACT_APP_BUILD_PATH=${REACT_APP_SUBDIR}modules/pkreact/app/build
```

## App accessibility

After module installation find the App under https://your.domain/react where "react" is a value defined by default in the module settings

## Demo Link

https://amp.promokit.eu/react

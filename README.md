# Forecast

Generate a forecast for any website. A pretty wrapper for Google PageSpeed Insights.

### Usage

To run this project locally, navigate to the project folder and run `yarn` to install the necessary packages. Then run `yarn start` to launch it. The project does not currently require any environment variables, although this is likely to change soon.

### Caveats

In its current state, this project includes the following caveats which should be removed or replaced if you want to run it yourself:

* Google Tag Manager script, in `/public/index.html`.
* 'Gotham Screensmart' font from Hoefler & Co, which is linked in `/public/index.html`, with files at `/public/fonts`.

This project was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app), uses the [Google PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v2/reference/?hl=en-US&utm_source=PSI&utm_medium=incoming-link&utm_campaign=PSI) and is styled in part with Fuel.

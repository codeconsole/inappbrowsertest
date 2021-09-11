# Cordova InAppBrowser Does Not Display Correctly on iOS

https://github.com/apache/cordova-plugin-inappbrowser

https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/index.html

InAppBrowser Should respect safe insets
```
env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
```
## location bar is transparent and not readable and can not e set
## Portrait Orientaion does not respect safe-area-inset-top and safe-area-inset-bottom
![Portrait](/screenshots/ios-layout.jpg)
## Landscape Orientaion does not respect safe-area-inset-left and safe-area-inset-right
![Landscape](/screenshots/landscape.jpg)


# This is how it looks in Safari and how it should work
![Portrait](/screenshots/safari-portrait.jpg)
![Portrait](/screenshots/safari-landscape.jpg)

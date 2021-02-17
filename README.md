# 2D CAD

Online 2D CAD Tool for precise drawings.

**WORK IN PROGRESS**

## Features

-   [x] Fullsceen svg (our canvas) where user can **zoom** and **move around** (basic buttons for navigation)
-   [x] **Grid** grid in the background, which gets smaller gaps when zooming in (and vise versa)
-   [x] **Grid Labels** which show x & y values of the bigger grid lines. Positioned always at the right / bottom edge of the browser view.
-   User can **create shapes**
    -   [ ] Rectangle
    -   [ ] Line
    -   [ ] Circle
    -   [ ] Polygon
    -   [ ] Text
-   [ ] Show edge length of shapes
-   [ ] Show area of shapes
-   [ ] History / Redo feature
-   [ ] User can upload **background images**

## Motivation

(2021-02-14)

I messured the front of my kitchen and wanted to create a precise scale plan digitally without learning a complicated tool or paying for some account.

I tried the following tools and weren't happy with any of those (for my purpose):

-   draw.io
    -   measurement are either px or mm/inch, but you cannot even scale the document how you want
    -   doesn't calculate and show areas
-   libreCAD
    -   need's installation
    -   difficult to create a plan (by commands & and a lot of typing)
    -   you cannot edit the rectangles afterwards (just scale them)
    -   you cannot show the messurements or areas of forms (you need to create manually some dimension lines)

## Idea

A drawing tool based on svg which is easy to use, and where it's possible to

-   create forms / lines in exact sizes & positions
-   enable labels for forms & lines:
    -   length
    -   area
-   edit global scale and units

## Develop

-   this project is based on [Create React App](https://create-react-app.dev/) with a TypeScript template.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

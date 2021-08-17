# 2D CAD

Online 2D CAD Tool for precise drawings.

**WORK IN PROGRESS**

## Features

-   [x] **zoom**: endless zooming via wheel events and zoom buttons
-   [x] **pan**: moving the view by grabbing & moving the mouse when **hand tool** is selected)
-   [x] **grid** in the background, which gets smaller gaps when zooming in (and vise versa)
-   [x] **grid labels** which show x & y values of the bigger grid lines. Positioned always at the right / bottom edge of the browser view.
-   user can **create shapes**

    -   [x] Rectangle
    -   [x] Line
    -   [ ] Circle
    -   [ ] Polygon
    -   [ ] Text

-   edit global scale and units
-   [x] select objects
-   [x] delete objects
-   [x] show edge length of shapes
-   [ ] show area of shapes
-   [ ] history / redo feature
-   [ ] user can upload **background images**
-   [ ] create shapes in exact sizes & positions (form input)
-   [ ] labels for shapes:
    -   text
    -   area (length if shape is line)
-   [ ] labels for edges:
    -   text
    -   length

## Why this tool?

-   web application (no installation)
-   free
-   easy to use
-   create shapes with precise sizes
-   dynamic scale (no matter if the plan consists of many kilometers or some millimeters)
-   get most important geometric information
    -   area
    -   length of edges
    -   angles
-   endless zooming
-   export svg
    -   which is 100% accurate to what you see while editing, as the whole tool is svg based

### Benefit vs ...

draw.io

-   measurement are either px or mm/inch, but you cannot even scale the document how you want
-   doesn't calculate and show areas

libreCAD

-   need's installation
-   difficult to create a plan (by commands & and a lot of typing)
-   you cannot edit the rectangles afterwards (just scale them)
-   you cannot show the measurements or areas of forms (you need to create manually some dimension lines)

miro.com

-   different focus: mindmaps, moodboards, etc. instead of precise plans
-   miro has no units and therefore no possibility to draw something true to scale

### Personal motivation

It all started with me moving to a new apartment. First I wanted to plan my kitchen by drawing the single elements in a front view and moving them around.
Miro was nice, as it was a web app (no installation), for free and easy to use. The problem: it didn't have any possibility to create shapes true to scale.

Later I planned to install some fairy lights on my balcony ceiling in a zigzag pattern, but didn't know the length I needed to cover the area.
So I decided to create a tool where users can create shapes true to scale and get the most important geometric information (area, length, ...).

## Develop

-   this project is based on [Create React App](https://create-react-app.dev/) with a TypeScript template.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

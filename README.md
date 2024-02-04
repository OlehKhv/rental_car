# RENTAL CAR

This project is a web application for a company that provides car rental
services in Ukraine.

## Table of Contents

1. [Description](#description)
2. [Car Catalog](#car-catalog)
3. [Favorite Listings](#favorite-listings)
4. [Modal Window](#modal-window)
5. [Filtering](#filtering)
6. [Routing](#routing)
7. [Backend](#backend)

## Description

The home page containing a general description of the services provided by the
company. Styling and formatting are done according to the design.

## Car Catalog

A page with a catalog of cars of various configurations. Users can filter cars
by brand, hourly rental price, and mileage.

## Favorite Listings

A page displaying listings that the user has added to their favorites. It shows
a list of favorite listings.

## Modal Window

Clicking on the "Learn more" button opens a modal window with detailed
information about the car and its rental conditions. The modal window can be
closed by clicking the "x" button, clicking on the backdrop, or pressing the Esc
key.

## Filtering

Added filtering by car brand using a dropdown with car brands from the
makes.json file.

## Routing

Used React Router to create routes:

-   "/" - the home page
-   "/catalog" - the page with the car catalog
-   "/favorites" - the page with favorite listings

A user who enters a non-existent route will be redirected to the home page.

## Backend

For working with listings, a personal backend was created using
[mockapi.io](https://mockapi.io/). The "adverts" resource is used to describe
the listing object.

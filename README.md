# Петрушка

A project starter based upon Gatsby & Material UI.

### A couple of quirks

Material UI v5 comes with Emotion out of the box. Styled Components is supported with a custom installation, however, at the time of creating of this project (march 2022) SSR projects don't play well with Material UI + Styled Components.

Gatsby must be included in that set, because that setup does not work with it at all.

So just using the out of the box Material UI setup, and leveraging `styled` library of Emotion, that resembles the workings of Styled Components quite closely.

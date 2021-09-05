# CSS Flexbox and Grid Tutorial – How to Build a Landing Page with Just HTML and CSS

```html
<div class="navbar">
  <div class="container flex">
    <h1 class="logo">Skilllz</h1>
    <nav>
      <ul>
        <li class="nav"><a class="outline" href="">Log in</a></li>
        <li class="nav"><a href="" class="outline">Check courses</a></li>
      </ul>
    </nav>
  </div>
</div>
```

On the div wrapping the elements inside this section (the navbar), we register the container and flex class.

- `.container`: we will use this utility class in every section to make sure that the inner elements do not exceed a certain width which we'll specify in CSS
- `.flex`: we will use this utility class to display children elements in a horizontally aligned manner (side-by-side) using CSS Flexbox.

```css
/* Centers it, sets a maximum width and makes sure elements can flow past it*/
.container {
  margin: 0 auto;
  max-width: 1200px;
  overflow: visible;
}

/* Sets background color, height and padding*/
.navbar {
  background-color: purple;
  height: 70px;
  padding: 0 30px;
}

/* Sets font size, reduces font-weight, adds margin and line height */
.navbar h1 {
  font-size: 30px;
  font-weight: 300;
  margin: 10px 0;
  line-height: 1.2;
}
```

Now we need to display both child elements inside the container h1 and nav side-by-side using Flexbox.

```css
.navbar .flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
```

First, we set the display mode to `flex`. This will align the elements side by side by default.
We then justify the content, adding a considerable space between each item using the space-between value. 
We align the items to appear at the center (middle) of the container and set its height to take up the entire container.

**However**, we also do not want both of our navigation link stacked on top of each other. 
Instead, we want them to be displayed side-by-side. Guess how we do that? **With Flexbox!**

```css
.navbar ul {
  display: flex;
}

/* Changes the color of both links to white, adds padding between them and margin as well */
.navbar a {
  color: white;
  padding: 9px;
  margin: 0 10px;
}

.navbar a:hover {
  color: #9867C5;
  border-bottom: 3px solid #9867C5;
}
```

To add a nice effect, we target the puesdo-element `hover` so our links are a different shade of purple when the user hovers over them

## How to Build the Showcase Area

The showcase area is going to house the headline text, supporting text, a form for signing up new users, as well as a headline image.

This section is going to be divided in two: the left side and the right side. In other words, it will be displayed as a grid of two units.


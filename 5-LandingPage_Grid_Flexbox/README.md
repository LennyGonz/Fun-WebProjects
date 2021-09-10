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

<hr>

## How to Build the Showcase Area

The showcase area is going to house the headline text, supporting text, a form for signing up new users, as well as a headline image.

This section is going to be divided in two: the left side and the right side. In other words, it will be displayed as a grid of two units.

```html
<!-- START SHOWCASE -->
<section class="showcase">
  <div class="container">
    <div class="grid">
      <div class="grid-item-1">
        <div class="showcase-text">
          <h1>Learn any digital skill of your choice today</h1>
          <p class="supporting-text">
            Over 30,000 students currently learn with us
          </p>
        </div>
        <div class="showcase-form">
          <form action="">
            <input type="email" placeholder="Enter your email address" />
            <input type="submit" class="btn" value="Start Learning" />
          </form>
          <p class="little-info">
            Try out our free courses today. No risk, no credit card required
          </p>
        </div>
      </div>

      <div class="grid-item-2">
        <div class="image">
          <img src="./images/transparent.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
<!-- END SHOWCASE -->
```

```css
.showcase {
  height: 300px;
  background-color: purple;
}

/* Adds margin below the text */
.showcase p {
  margin-bottom: 30px;
}

/* Adds a shadow below the image */
.showcase img {
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.2);
}

/* Adds some padding on the form content */
.showcase-form {
  padding-left: 7px;
}
```

Inside the showcase container there will be two sections (grids)

With the grid class registered on that container, we can align its content using CSS grid display like this:

```css
.grid {
  overflow: visible;
  display: grid;
  grid-template-columns: 60% 40%;
}
```
This will create two columns inside of our showcase container. 
The first part will take up 60 percent of the container, and the second part will take up the remaining 40 percent of the container.

The overflow visible will ensure that the image (if bigger than the container) will flow beyond the container.

Next, we need to set some space between the navigation area and the showcase area.

```css
.grid-item-1,
.grid-item-2 {
  position: relative;
  top: 50px;
}
```

Now, we need to style both of our form inputs because they don't look so nice. We select the first input by its type (email) and select the second by its class name, `btn`

```css
.showcase input[type='email'] {
  padding: 10px 70px 10px 0;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  padding-left: 6px;
}

.btn {
  border-radius: 6px;
  padding: 12px 20px;
  background: #9867C5;
  border: none;
  margin-left: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
```

<hr>

## How to build the lower part of the page

The lower part of the page is going to contain two sections, the stats section and the testimonials section

The stats container which displays the services offered by Skilllz will be made up of three `div`s, each of which houses a font awesome icon, an `h3` of class `title`, and a paragraph `p` of class `text`.

The testimonial container will hold the testimonials of three random people who learned using Skillz.
I grabbed the pictures from unsplash.

```html
<div class="lower-container container">
  <section class="stats">
    <div class="flex">
      <div class="stat">
        <i class="fa fa-folder-open fa-2x" aria-hidden="true"></i>
        <h3 class="title">Over 300 available courses</h3>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="stat">
        <i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
        <h3 class="title">Free certificate offered on all courses</h3>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="stat">
        <i class="fa fa-credit-card-alt fa-2x" aria-hidden="true"></i>
        <h3 class="title">Book 1on1 session for as low as $5</h3>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </section>
```

The text color is `white` so it looks like a blank page

```css
/* Centers the container, sets a maximum width
.lower-container {
  margin: 120px auto;
  padding: 0;
  max-width: 1400px;
}


/* Targets all h3 with class of title */
.title {
  color: black;
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
  padding-top: 10px;
}

/* Targets the paragraphs with class name of text */
.text {
  color: black;
  font-size: 19px;
  width: 100%;
  padding: 10px;
  margin: 0, 20px;
  text-align: justify;
}
```

The added styling makes our text visible now

We intend for all of the three stat divs to be aligned horizontally (side-by-side). 
To achieve that, we will once again be using CSS Flexbox:

```css
/* Display horizontally, put a little space around them */
.flex {
  display: flex;
  justify-content: space-around;
}

/* Add some padding around the container. Align text centrally */
.stats {
  padding: 45px 50px;
  text-align: center;
}

/* Set margin and width */
.stat {
  margin: 0 30px;
  text-align: center;
  width: 800px;
}
```

<hr>

## How to build the testimonials page

In the second section inside of the lower container `div` of the page is the testimonials section.

This section is going to be made up of three cards, each of which contains the image of the person (clipped inside a circle), their name, and the person's testimonial.

```html
<section class="testimonials">
  <div class="container">
    <div class="testimonial grid-3">
      <div class="card">
        <div class="circle">
          <img src="./images/4.jpg" alt="" />
        </div>
        <h3>Aston</h3>
        <p>
          I have learnt web development using this platfrom and I am going
          to say this is the best platform for learning. Absolutely worth
          the investment!
        </p>
      </div>
      <div class="card">
        <div class="circle">
          <img src="./images/5.jpg" alt="" />
        </div>
        <h3>Beth</h3>
        <p>
          I have learnt copywriting using this platfrom and I am going to
          say this is the best platform for learning. Absolutely worth the
          investment!
        </p>
      </div>
      <div class="card">
        <div class="circle">
          <img src="./images/6.jpg" alt="" />
        </div>
        <h3>Chris</h3>
        <p>
          I have learnt affilitate marketing using this platfrom and I am
          going to say this is the best platform for learning. Absolutely
          worth the investment!
        </p>
      </div>
    </div>
  </div>
</section>
```

we set the image to take up the height of its parent container:

```css
/* Wrap the image inside a cirle shape and set height to take up all of parent element */

.testimonial img {
  height: 100%;
  clip-path: circle();
}

/* Align text centrally */

.testimonial h3{
  text-align: center;
}
```

If you check the final layout in the gif, you will notice that all three testimonial cards are aligned side-by-side on the same line.

So we will need to create a div of three equal columns using the CSS grid arrangement.

```css
/* Create a grid of three equal columns. Set a gap of 40 px between them */

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}


/* Create a white card with some shadow around it */
.card {
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: -7px -7px 20px rgba(0, 0, 0, 0.2),
               7px  7px 20px rgba(0, 0, 0, 0.2)
}
```

Finally, we style the circle `div` and position it relative to the top border of the card using CSS:

```css
.circle {
  background-color: transparent;
  border:3px solid purple;
  height:90px;
  position: relative;
  top: -30px;
  left: 120px;
  border-radius:50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  width:90px;
}
```

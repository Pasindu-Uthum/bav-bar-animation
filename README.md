### Welcome back, guys. ✌ In this article you will be learning how to create this beautiful navigation bar with HTML, CSS, and a little bit of JavaScript.

![banner](./design/active-state.png)

It is very easy and simple to understand. So let's make this 😉. I have discussed step by step how to create this and at the end, there is a complete code also.

# **HTML CODE**

```html
<nav>
  <ul>
    <li>
      <span data-color="#3f3f64">
        <img src="./images/service-icon.png" alt="service-icon" />
        <img
          class="color-image"
          src="./images/service-icon-color.png"
          alt="service-icon"
        />
      </span>
    </li>

    <li>
      <span data-color="#794343">
        <img src="./images/support-icon.png" alt="support-icon" />
        <img
          class="color-image"
          src="./images/support-icon-color.png"
          alt="support-icon"
        />
      </span>
    </li>

    <li>
      <span data-color="#8be8ff">
        <img src="./images/home-icon.png" alt="home-icon" />
        <img
          class="color-image"
          src="./images/home-icon-color.png"
          alt="home-icon"
        />
      </span>
    </li>

    <li>
      <span data-color="#f7a11fa2">
        <img src="./images/stats-icon.png" alt="stats-icon" />
        <img
          class="color-image"
          src="./images/stats-icon-color.png"
          alt="stats-icon"
        />
      </span>
    </li>

    <li>
      <span data-color="#b33136">
        <img src="./images/feedback-icon.png" alt="feedback-icon" />
        <img
          class="color-image"
          src="./images/feedback-icon-color.png"
          alt="feedback-icon"
        />
      </span>
    </li>
  </ul>
</nav>
```

So as this is a navigation bar I decided to use the _\<nav>_ element to create this. Everything is inside the _\<nav>_ tag, and there is an unordered list in it to create the links.

## **CSS for Nav Bar**

```css
nav {
  width: 50%;
}

nav ul {
  list-style-type: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #8395a7;
  border-radius: 10px;
}
```

Created a flex box and _justify-content: space-around_ to create equal spaces between images. _list-style-type: none_ to remove the bullets and _overflow: hidden_ to avoind overflowing the content. set a _bacground-color_ and _border-radius_ to look better. 😏

### **\<li> Tag**

```html
<span data-color="#3f3f64">
  <img src="./images/service-icon.png" alt="service-icon" />
  <img
    class="color-image"
    src="./images/service-icon-color.png"
    alt="service-icon"
  />
</span>
```

The images are created inside the _\<span>_ tag. And you can see there are two images inside the _\<span>_ tag. One is the black and white and the other is color image. the _data-color_ attribute in the _\<span>_ tag is made for the function of JavaScript. You can see it at the end of this article.

```css
nav ul li span {
  display: block;
  padding: 15px 0;
  cursor: pointer;
  position: relative;
}
```

These are the stylings for _\<span>_ tag. _display: block_ unless we can't change the padding values because it is a inline element by default. _position: relative_ because the colored image is going to be absolute to that element.

```css
img {
  width: 70px;
}
```

Set an fixed _width_ to the image.

The most important part is positioning the colored image. I position the colored image right in front of the black and white image. So that the black and white image is under the colored image. Then I set the colored image's _opacity: 0_ so that the colored image cannot be seen. But still, the colored image is in front of the black and white image. So the hover effect is to bring back the opacity with a transition. And it will be like an animation of color-changing 😁.

```css
.color-image {
  position: absolute;
  left: 0;
  opacity: 0;
  transition: all 0.25s;
}

.color-image:hover {
  opacity: 1;
}
```

👍 _So here is the complete CSS code for the project._

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  background-color: #3f3f64;
}

nav {
  width: 50%;
}

nav ul {
  list-style-type: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #8395a7;
  border-radius: 10px;
}

nav ul li span {
  display: block;
  padding: 15px 0;
  cursor: pointer;
  position: relative;
}

img {
  width: 70px;
}

.color-image {
  position: absolute;
  left: 0;
  opacity: 0;
  transition: all 0.25s;
}

.color-image:hover {
  opacity: 1;
}
```

## **JAVASCRIPT**

This is the JavaScript part. It is very simple. All it does is change the _background-color_ of the document when an icon is clicked. (Just for fun 😂). So here it is...

```javascript
const link = document.querySelectorAll("span"); // Getting all the span elements
const body = document.querySelector("body"); // Getting the body

link.forEach((item) => {
  item.addEventListener("click", () => {
    const bodyColor = item.dataset.color;
    body.style.backgroundColor = bodyColor;
  });
});
```

So in here I have selected all the _\<span>_ elements using _querySelectorAll_ and when a _\<span>_ element is clicked, it takes the _data-color_ attribute of that element and set that color as the _background-color_ of the document.

## 🔗 **LINKS**

- Link to the [Github Repository](https://github.com/Pasindu-Uthum/nav-bar-animation)
- Follow me on [Twitter](https://twitter.com/PasinduUthum)
- Follow me on [Instagram](https://www.instagram.com/pasindu_uthum/)
- Download SVG icons from [flaticon](https://www.flaticon.com/)

Leave a like 👍 and share 🤙 this article to your friends so that they will also learn what you learned from this. Comment 💬 down you ideas about this,

---
title: First Real Work with Serverless Functions
date: "2018-11-02"
---
Today I built my first serverless function that actually performs work. I’ve written a few “hello world” cloud functions over the last couple months, just to get the overall idea, to get my brain to switch into this mode of thinking. (Historically I’ve relied on PHP to handle this kind of processing.)

I’m using Netlify, so it’s really easy to deploy a serverless function.

Each serverless function receives three arguments: `event`, `context`, and `callback`.

I had no idea what was in each of these arguments, and I’d really hoped I could just `console.log()` them to check em out. And to my delight, Netlify’s functions page shows a real time log of my function’s output, so `console.log()` just worked!

![real time functions log](/assets/img/functions-log.png)

In my case, I’m using their `submission-created` [event hook](https://www.netlify.com/docs/functions/#event-triggered-functions) so that my function is called immediately whenever a form is submitted.

I assumed the form data would be in the `event` object, but I couldn’t get it to log to the console. I ran into a few other snags, too.

*Some tips (and for my own future reference):*

* This [Netlify blog post](https://www.netlify.com/blog/2018/09/14/forms-and-functions/) by Divya Sasidharan really helped
* Name the function the same thing as the event’s name. For example, `functions/submission-created.js` is automatically triggered when a form is submitted (must have `data-netlify="true"`)
* Give the `form` element a `name` attribute that matches the below hidden input
* Place a hidden `input` inside the form having `name="form-name"` and value the same as the form’s name above:
  ```
  <form name=“my-form”>
    <input type=“hidden” name=“form-name” value=“my-form“>
  </form>
  ```
* Use `POST`  as the form method: `<form method=“POST”>`
* Use the `data-netlify-honeypot=` on the `<form>`
* Parse `event.body` in the function to get the form data payload. This tripped me up. Not sure why a `console.log(event)` wouldn’t show the form data, but it worked after parsing `event.body`:
  `const body = JSON.parse(event.body).payload`


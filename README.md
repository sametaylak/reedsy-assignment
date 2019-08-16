## Notes
- q4/server/src/server.js: line 10 `host: 'localhost'` added for sake of clarity

## 1. About you
- My name is Samet Aylak. I am 23 years old. I graduated from university this summer. I have been working at Protel about 1.5 years. We have a project called Simpra. Simpra is a POS system for restaurants. I am a front-end developer in this project. We are using Vue, Vuex, ORM, GraphQL, Pug, SCSS for Simpra. We have a full pipeline with CircleCI. Recently, I switched to GitHub Actions from CircleCI but it has some problems. GitHub Actions is still in beta.

## 2. General

##### 2.1. What kind of front end projects do you enjoy working on? Why?
- Well, Team is the most important thing for me. I really like challenging stuff. I prefer, flexible, high-tech, well-designed and high-communicate front-end projects. User Experience is important for front-end projects. Because project getting more complicated as grows and to do handle that UX is required.

##### 2.2. Which are your favorite features of HTML5? How have you used them before?
- Local Storage, I often use this feature for persistent data such as store management in vue
- Semantic Elements(header, footer, etc.), I am using this all the time :)
- New Input Attributes and Types, I think, this is the most important feature

##### 2.3. Explain the difference between creating a DOM element setting `innerHTML` and using `createElement`.
- Well, basically innerHTML updating the DOM and recreating. And you are losing all the past references and events. If you don't want to update but to create, you can use createElement and innerHtml may be slower than createElement because of updating-recreating cycle.

##### 2.4. Compare two-way data binding vs one-way data flow.
- Two-way data binding means inputs connected to models. When input changes, the model changes with it. And when model changes, input changes with it. Basically, one-way is more simple binding rather than two-way. There is one emitter. Also, React has a one-way data flow.

##### 2.5. Why is asynchronous programming important in JavaScript?
- First of all, what is asynchronous? We should answer this question. Asynchronous means start and end times are separate, but not at the same time. It means, whenever a blocking operation is emitted, the operation waits for the result but the rest of the codes keeps running. And whenever the response is ready, the handler starts to run, returns response and flow continues.

## 3. Styling
- q3 folder for q3.html

## 4. SPA
- About SPA with Vue

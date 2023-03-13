This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Project built using NewsApi https://newsapi.org/


I have added 3 predefined search queries , but in **index.tsx** you can rename or generate more query buttons to experiment. 

## How to make app start ? 
-Create **.env.local** file in the root directory and follow example from **env.example**

-Run *npm install*

-Run *npm run dev*

You can change **pageSize** variable to see more than 10 results.

With my API key I am not allowed to deploy app and can only show articles for the last month.

However if you want to see a forever loading spinner go here => https://news-api-project-4tu9yw6io-raissa-kisseljova.vercel.app/ 
My api requests are block by CORS , since I have a limited usage with my api key.

I took Loader from https://cssloaders.github.io/

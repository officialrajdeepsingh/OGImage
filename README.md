# OGImage example
OGImage static blog project is a real-life example of og-image-generation. you can play with code and deploy with easily. For the og-image-generation, I create an API on the following `api/og.tsx` file.

I use `next-seo` npm package and tailwind CSS for web design.


## How to use it.
1. clone the repo `git clone  https://github.com/officialrajdeepsingh/OGImage.git`.
2. install all dependencies with `pnpm install`.
3. run local dev server with `pnpm run dev` or `pnpm dev`.


### Config the domain
```javascript

//  replace with your production domain
export const domain="https://og-image-angpfhma2-officialrajdeepsingh.vercel.app/"

// local development
export const domain="http://localhost:3000/"
```
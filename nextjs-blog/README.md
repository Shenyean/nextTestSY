This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# This is a record of my journey learning how to use Next.js

## 19 Aug 2023

### Some of the major difference betweeen Next.JS and react observed by me as a dev

1. Routing seems easier which only require you to put the component in the right places for now.
2. instead of compenents we use pages
3. Need to learn about the dynamic routing (bold when understood)
4. next.js does code splitting, that mean the app does not reload completely when using `<link>` tag
5. The `<link>` Component in Next.js actually prefetch the data in production, so it would cut down the time need for

### There is an entire section on the `<link>` component, at the moment i am trying to understand the follow props

- **`href` this is for the routing**
- **`replace` this is for replacing the URL in the browser history**
- `scroll` I do not understand what this does completely , but at the moment i think it is for scrolling to the destination in a single page application

### images

- render images using the `<image>` tags from the `next/image` component

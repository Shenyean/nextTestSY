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

### props in a component

    export default function Layout({ children, home }) {
        if( !home){
            style :{ font: 55px}
        }
        else
        { there is most prob a sytax error}
    }

The children prop refer to the content between the oepn and close tag of the component, while the we can make use the other home prob in the code

    <Layout home>
    this is the content of the layout component
    </ Layout>

### Alert.js

Clsx library will determine the style based on the prop

    export default function Alert({ children, type }) {
    return (
    <div
      className={clsx({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>

);
}

the code will check the type prop from the component then decide the css style it will use.

What up next?

- [ ] understanding static generation

## 1st NOV 2023

I tried to update some learning today but i am too tired and i gotaa be up early tml.

But i have been thinking about static generation, a pre rendering method that generate html during build time. so most and the same html is reused every request. so most prob some part of a web page that done change often. like a logo page that talks about the origin of a company??
but are we able to mix static generation with sever side rendering , hope i can come back and read more before i sleep.

# keep-my-cat-2025

A remake of an original interactive story game [I made 8 years ago](https://github.com/weilidai2001/keep-my-cat) when Node was on version 9, styling was done using SASS + BEM notation, React components were defined as Class components and every component method has to use .bind(this) to bind the context in the constructor.

## What has changed?

- The project has been rebuilt using Next.js with TypeScript and TailwindCSS.
- TailwindCSS completely replaced the previous SASS definitions which used to be located in different directories to the React component, and the previous use of `&__` made searching for references very tricky. Now all React components are self sufficient and uses Tailwind classes such as `className="w-[80%] max-w-[calc(var(--virtual-screen-max-width)*0.8)] h-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl"`
- Game logic has been moved from client-side to server-side.
- Strong typings have been added using TypeScript to catch errors at compile time instead of runtime.
- Game state is now saved in `localStorage` instead of on the `window` object, making it more persistent and tolerant of page refreshes. Previously, refreshing the page would corrupt the game by resetting the balance to 0 and leaving it in an inconsistent state.
- React pure components with Hooks are now used instead of class components with `.bind(this)` in constructors.
- The data structure has been improved significantly by using a directed graph to represent the state machine. Graph traversal algorithms replace previously hardcoded logic, making it more extensible.
- Jest has been added for unit testing, replacing the previous Karma setup.
- Components are now highly reusable and more generic to reduce duplication. For example, the `Slide` component is used in both the intro and mission pages, replacing a third-party carousel library that was not intuitive for this project.
- Prettier has been added to maintain consistent code styling.

This screenshot shows replacing hardcoded list of tiles with a .map() call:

![Screenshot](/screenshot-hardcoded_vs_map.png)

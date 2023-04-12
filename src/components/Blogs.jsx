import React from 'react';


const Blogs = () => {
    return (
        <div className='m-5'>
            <h1 className='text-3xl font-bold'>when should we use Context API?</h1>
            <p>Ans : Context API that allows one to share state across the entire app or part of it lightly and with ease. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.It allows you to share props or state with an indirect child or parent.</p>
            <h1 className='text-3xl font-bold'>what is custom hook in react?</h1>
            <p>Ans: Custom Hooks are reusable functions. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.Custom Hooks offer the flexibility of sharing logic that wasn't possible in React components before.it  starts with the word “use” and may call other Hooks.</p>
            <h1 className='text-3xl font-bold'>what is useRef hook in react?</h1>
            <p>Ans: useRef is like a 'box' that can hold a mutable value in its current property.it allows to directly create a reference to the DOM element in the functional component. useRef can be used to reference any type of object.</p>
            <h1 className='text-3xl font-bold'>what is usememo hook in react?</h1>
            <p>Ans: useMemo is a React Hook that helps us to cache the result of a calculation between re-renders.it is  used in the functional component of react that returns a memoized value.useMemo in React is essential react hook for improving the performance and speed of our application by caching the output. </p>
        </div>
    );
    
};


export default Blogs;
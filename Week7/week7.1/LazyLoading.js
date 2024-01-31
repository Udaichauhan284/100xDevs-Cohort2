import {Suspense, lazy} from "react";
const Component1 = lazy(() => import(
  "../src/LazyContent/myComponent1"
));
const Component2 = lazy(() => import(
  "../src/LazyContent/myComponent2"
))

function App(){
  return (
    <>
      <h1>Lazy Load</h1>
      <Suspense fallback = {
        <div>Component is loading</div>
      }><Component1 /></Suspense>

      <Suspense fallback = {
        <div>Compoent is loading 2</div>
      }><Component2 /></Suspense>
    </>
  ) 
}
export default App;
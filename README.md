# React18-intermediate


# Section 1: Getting started

# Section 2

#### What is React-Query?
 - It's an alternative for Redux.
 - It's a library for managing data fetching and caching in React applications
#### How to install React-Query?
`npm install @tanstack/react-query@4.28`

#### How to plugin React-Query to react application?
- `QueryClient` is the core object we use to manage and cache remote data.  

`main.tsx`
```
  Import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

  const queryClient = new QueryClient(); //Create a QueryClient object

  ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client = {queryClient}> //Add QueryClientObject to Provider
      <App />
    </QueryClientProvider>
  </React.StrictMode>
  )
```
  
#### What is `react-devtools` and how to install it?
 - React-Query comes with React-devtools to monitor and debug our react query objects.
 - `npm install @tanstack/react-query-devtools@4.28`
 - Import `<ReactQueryDevTools/>`  

   ```
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
    ```

#### How to use queryObject?
  - Hint: create interface > create state variable for that interface.
  - Example: 
  ```
  interface DummyQuery{
    name: string;
    email: string
  }

  function Dummy(){
    const [dummy, setDummy] = useState<DummyQuery>({} as DummyQuery)
  }
  ```

#### How to use useQuery({}) hook from `React-Query` library.
  - Hint: Replace useEffect with userQuery and implement it's props.
  ```
    const queryObj = useQuery<Dummy>({
      queryKey: ["dummy"],
      queryFn: ()=>{
        axios.get("https://dummy.url.com")
          .then(res => res.data)
      }
    })
    

    //you can access API response properties like below
    queryObj.name
    queryObj.email
  ```

# Section 3

#### What is a reducer?
  - We can maintain state modifications (based on conditions) in a centralized file, and we expose that file as `reducer`
  - We use that reducer in a hook (useReducer) - which acts similar to `useState`
  - Hint: Go through commits, to find how to use reducer.

#### What is context?
  - It's like a global object to maintain state (data for different classes)
  - We use `React.createContext` and pass all necessary data into this.
  - We can use `useContext` hook to access this data again in any other file.

#### What is a provider?
  - It's a wrapper `.tsx` file around context.

#### What is zustand?
  - It's a `client-state management library`. Other alternatives include libraries like Redux.  
  - Meaning it's easy to do CRUD operations on client-state, as `zustand` caches client-state.
  - Server-state is maintained by library called `React-Query`

#### What is the difference between client-state and server-state?
  - `Server-state` is data coming from API.
  - `Client-state` is data we transfer from one file to another in a react-app.

#### How to install zustand?
  - npm i zustand@4.3.7
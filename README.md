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

- How to use queryObject?
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
- How to use useQuery({}) hook from `React-Query`
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
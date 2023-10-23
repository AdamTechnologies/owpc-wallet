// // import useSWR from 'swr'
// import axios from 'axios'

// // const fetcher = (...args:[string, ...any[]]) => fetch(...args).then(res => res.json())

// const fetcher = (url:any,data:any) => axios.post(url,data).then((res) => res.data);


// export function useUser (id:any) {
//     const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)
   
//     return {
//       user: data,
//       isLoading,
//       isError: error
//     }
//   }
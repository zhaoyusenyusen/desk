import axios from 'axios'
export default function request(next){
    axios.get('/app/list').then(res=>{
       next({ type: "USER_APP" ,data:res.data.data});
       console.log(res.data.data)
    })
}
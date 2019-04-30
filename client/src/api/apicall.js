import axios from "axios";


export default function (method,path,data){
    return new Promise((resolve,reject)=>{
        return axios[method](path,data)
                .then(res=>{
                    return resolve(res.data);
                }).catch(err=>{
                    return reject(err.message);
                })
    })
}
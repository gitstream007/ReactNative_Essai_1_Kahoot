import ConstantsAPI from "../ConstantsAPI";

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': ''
};

class APIService{
    static  FetchFunction() {
   return fetch(ConstantsAPI.URL_TEST)
       .then((response) =>
           {
               if(response.status === 200)
               {
                   console.log('promise ok');
                   return Promise.resolve(response.json())
               }
               else
               {
                   console.log('promise PAS ok');
                   return Promise.reject(response.json())
               }
           }
       )
    }
}

export default APIService;

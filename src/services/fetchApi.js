export default class FetchApi
{
    constructor()
    {
      this.baseApi='http://10.12.6.1:8080/';
    }
   getApi=async (rout)=>
    {
        try{
           
            let result=await fetch(`${this.baseApi}${rout}`);
            let data=await result.json();
            debugger;
            return data;
        }
        catch(ex)
        {
            console.error(ex);
            alert(ex);
        }
        
    }
    postApi=async (rout,dataToPost)=>
    {
        try{
            let rawResponse=await fetch(`${this.baseApi}${rout}`,{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToPost)
              });
                const content = await rawResponse.json();
                console.log(content);
                return content;
        }
        catch(ex)
        {
            console.error(ex);
            alert(ex);
        }
     }
}

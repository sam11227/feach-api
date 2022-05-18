import React, { useEffect, useState } from "react";

const Search = () => {
    // in user  we have api data
    const [user, setuser] = useState([])
    const [filtered,setFilter] = useState([])
    const [Term, setTerm] = useState("")
    


    useEffect((Term) => {
    
        fetch(`https://api.github.com/users`)
         .then((response) =>response.json())
         .then((actualData) =>{
            const allUsers = actualData.map((data)=>{
                return data
                    } )
            setuser(allUsers)
            setFilter(allUsers)
         })

       }, []);
    
       const filterUsers = (e)=>{
           const filteredUsers = user.filter(userObj=>{
               return  userObj.login.includes(e.target.value)
           })
           setFilter(filteredUsers)
       }
    return (
        <div>
            <h2>List of GitHub Users </h2>
            <hr/>
            <div className="ui search">
                <div className="ui icon input"> 
                <input type='text' placeholder='Search for profile' className="prompt"
                onChange={e =>filterUsers(e)}
                
                />
                <i className="search icon"></i>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        filtered?.map((CurElem) => {
                            return (
                                <div className="col-10 col-md-4 mt-5">
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"><img src={CurElem.avatar_url} className="rounded" width='155' /></div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{CurElem.login}</h4><span className="textLeft">Web Developer</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column"><span className="ariticles">Ariticles</span><span className="number1">38</span></div>
                                                    <div className="d-flex flex-column"><span className="followers">Followers</span><span className="number1">390</span></div>
                                                    <div className="d-flex flex-column"><span className="Rating">Rating</span><span className="number1">669</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Search;
import React from 'react'
import { v4 as uuid } from 'uuid'
import User from './User'
const Users = (props) => {
   
  return (
    <section>
      {
        props.users.map((user)=>{
           
            return <User {...user} key ={user.id} onRemove={props.onRemove}/>
        })
      }
    </section>
  )
}

export default Users

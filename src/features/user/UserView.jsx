import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './UserSlice'

/*
Here is what happens when you call dispatch(fetchUsers()) 

1. It creates a thunk function: 
    Calling fetchUsers() executes the action 
    creator and returns a function behind the scenes.

2. Thunk middleware intercepts it:
    The Redux Thunk middleware catches this function, 
    automatically dispatches fetchUsers.pending, 
    and executes your async code (e.g., fetching data from an API).

3. It dispatches lifecycle actions: 
    Once the network request finishes, it automatically dispatches fetchUsers.
    fulfilled with the data or fetchUsers.rejected if an error occurs.
*/
export const UserView = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    //fetchUsers is an async action creator 
    // (also called a thunk action creator).
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
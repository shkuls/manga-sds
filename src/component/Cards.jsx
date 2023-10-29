import React from 'react'

export default function Cards(props) {
  return (
    <>
     < div className="card my-5 mx-5" style={{width : '18rem'}}>
    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      
      <a href={props.url} className="btn btn-primary">Open Link</a>
    </div>
  </div>
    </>
  )
}

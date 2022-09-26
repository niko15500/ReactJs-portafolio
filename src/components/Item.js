import React from 'react'

const Item = ({itemData}) => {
  return (
    <div>
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pading: 25,
          margin: 25,
        }}
      >
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={itemData.img} height="400" width="300"></img>
            </figure>
            <div className="card-body">
              <strong>{itemData.name}</strong>
              <div>{itemData.parraf}</div>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
import React from 'react'
import Card from "../../components/card";
import { useEffect,useState } from "react"
import { Link } from 'react-router-dom';



import axios from 'axios';
const Products = () => {
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setDataArr(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className="main-div">
      {dataArr.length > 0 ? dataArr.map((item,index)=>{
            return <Card key={index} title={item.title} description={item.description} src={item.image} price={item.price} id={item.id} />
        }): <h1>Loading...</h1>}

      </div>
    </>

  )
}

export default Products 
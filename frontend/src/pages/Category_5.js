import React, { useState, useEffect } from "react";
import axios from "axios";
import './Category_5.css'

const API_URL = "http://localhost:8000";
var size=3;

const Category_5 = () => {
  //we change here
  const [Items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  //setting tha initial page
  const [page, setPage] = useState(0);
  //we need to know if there is more data
  const [HasMore, setHasMore] = useState(true);
    
  //on initial mount
  useEffect(() => {
    loadMoreItems();
  }, []);
 function  IncrementItem() {
    
    size=size+2;
    console.log(size);
      
  }
  
  function loadMoreItems() {
    setIsFetching(true);

    //using axios to access the third party API
    axios({
      method: "GET",
      url: "http://localhost:8000/image/readImage",
      params: { _page: page, _limit: 40 },
    })
      .then((res) => {
        setItems((prevTitles) => {
         
          return [...new Set([...prevTitles, ...res.data.map((b) => b.imageData)])];
        });
      
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(res.data.length > 0);
        setIsFetching(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function clickAction(){
    loadMoreItems()
    IncrementItem()
    
  }


  return (
      
    <div className="Category_5">
        <div>
      {Items.slice(0,size).map((item, index) => {
        
        HasMore    
        if (Items.length === index + 1) {
            
          return (
            <div key={index}>
              <img alt="Source-products" className="td-image" src={API_URL+"/"+item } />
            </div>
          );
        } else {
          return <div key={index}><img alt="Source-products" className="td-image" src={API_URL+"/"+item } /></div>;
        }
      })} 
      {isFetching && <p>...Loading</p> }
      {!isFetching && HasMore &&   (  
       Items.length > size?
     <button className="btnCategory" onClick={clickAction}>Load more</button>:null
         )}

      </div>
    </div>
  );
};

export default Category_5;
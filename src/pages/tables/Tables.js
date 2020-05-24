import React from "react";
import {Grid, Toolbar} from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";
import { useState, useEffect } from 'react';
var datatableData =[];
const columns = [
 {
  name: "rname",
  label: "Name",
  options: {
   filter: true,
   sort: true,
  }
 },{
  name: "brand",
  label: "Brand",
  options: {
   filter: true,
   sort: true,
  }
 },{
  name: "description",
  label: "Description",
  options: {
   filter: true,
   sort: true,
  }
 },{
  name: "quantity",
  label: "Quantity",
  options: {
   filter: true,
   sort: true,
  }
 },{
  name: "price",
  label: "Price",
  options: {
   filter: true,
   sort: true,
  }
 },{
  name: "rid",
  label: "Actions",
  options: {
   filter: true,
   sort: true,
   
   customBodyRender: (value, tableMeta, updateValue) => {
     var selectedQuantity;
            return (
            <><input type="number" style={{width:50}} onChange={(event => selectedQuantity=event.target.value)}/>
              <button onClick={ () => {
                var d = new Date();
                var m = "PayPal";

                console.log("userID", localStorage.getItem("id_token"));
                console.log("value", value);
                console.log("quantity", selectedQuantity);
                console.log("date", d.getTime())
                console.log("method", m);

                buyHandler(parseInt(localStorage.getItem("id_token")), parseInt(value) , parseInt(selectedQuantity), d.getTime(), m)
              }}>
                Buy
              </button>
                <button onClick={() => {
                var d = new Date();

                console.log("userID", localStorage.getItem("id_token"));
                console.log("value", value);
                console.log("quantity", selectedQuantity);
                console.log("date", d.getTime())
                

                reserveHandler(parseInt(localStorage.getItem("id_token")), parseInt(value) , parseInt(selectedQuantity), d.getTime())
              }}>
                Reserve
              </button>
                <button onClick={() => {
                var d = new Date();

                console.log("userID", localStorage.getItem("id_token"));
                console.log("value", value);
                console.log("quantity", selectedQuantity);
                console.log("date", d.getTime())
                

                requestHandler(parseInt(localStorage.getItem("id_token")), parseInt(value) , parseInt(selectedQuantity), d.getTime())
              }}>
                Request
              </button>
                </>
            );
          }
  }
 }

 ]

async function buyHandler(userID, resourceID, quantity, date, method){
  //send user id, resources id, quantities, date in milliseconds, payment method
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({uid: userID, rids : [resourceID], quantities : [quantity], date_milliseconds : date, method : method })
  };
  const response = await fetch('http://disaster-relief-x.herokuapp.com/aid/resources/buy/', requestOptions);
  const data = await response.json();
  return data;
}

async function reserveHandler(userID, resourceID, quantity, date){
  //send user id, resources id, quantities, date in milliseconds
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({uid: userID, rids : [resourceID], quantities : [quantity], date_milliseconds : date })
  };
  const response = await fetch('http://disaster-relief-x.herokuapp.com/aid/resources/reserve/', requestOptions);
  const data = await response.json();
  return data;
}

async function requestHandler(userID, resourceID, quantity, date){
  //send user id, resources id, quantities, date in milliseconds
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({uid: userID, rids : [resourceID], quantities : [quantity], date_milliseconds : date })
  };
  const response = await fetch('http://disaster-relief-x.herokuapp.com/aid/resources/request/', requestOptions);
  const data = await response.json();
  return data;
}

export class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    async componentWillMount() {
        await fetch('http://disaster-relief-x.herokuapp.com/aid/resources/')
        .then(res => res.json())
        .then((dataResponse) => {
          datatableData=dataResponse.resources;
          this.setState({data:dataResponse.resources})
        })
        .catch(console.log)
    }

    render (){
        return(
             <>
            <PageTitle title="Resources" />
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <MUIDataTable
                  title="Resource List"
                  data={this.state.data}
                  columns={columns}
                  options={{
                    filterType: "checkbox",
                  }}
                />
              </Grid>
            </Grid>
          </>
        )

    }


}

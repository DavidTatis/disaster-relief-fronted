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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from "../notifications/styles";
// import useStyles from "./styles";

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
            let selectedQuantity;
            return (
            <><input type="number" style={{width:50}} onChange={(event => selectedQuantity=event.target.value)}/>
              <button onClick={() => {

                toast('Toast Message');
                console.log("value ", value);
                console.log("quantity ", selectedQuantity);
                var d = new Date();
                console.log("date ",d.getTime());

              }}>
                Buy
              </button>
                <button onClick={() => {
                console.log("value ", value);
              }}>
                Reserve
              </button>
                <button onClick={() => {
                console.log("value ", value);
              }}>
                Request
              </button>
                </>
            );
          }
  }
 }

 ]


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
                 <ToastContainers/>
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

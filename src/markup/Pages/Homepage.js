import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import CountUp from 'react-countup';
import IndexBanner from '../Element/IndexBanner';
import Jobcategories from '../Element/Jobcategories';
import Featureblog from '../Element/Featureblog';
import Jobsection from '../Element/Jobsection';
import Owltestimonial from '../Element/Owlblog1';
import { useSelector } from 'react-redux';
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid'
import { forwardRef } from 'react';
import LanguageCreate from './Langauge/LanguageCreate';
import LanguageList from './Langauge/LanguageList';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



function Homepage() {
  // var columns = [
  //   {title: "id", field: "id", hidden: true},
  //   {title: "Language", field: "name"},
  // ]
  
  // const [langData, setLangData] = useState([]);
  // const [iserror, setIserror] = useState(false)
  // const [errorMessages, setErrorMessages] = useState([])
  
  // useEffect(() => { 
  //   axios.get(`/api/v1.0/languages`)
  //     .then(res => {               
  //       setLangData(res.data.langData)
  //    })
  //    .catch(error=>{
  //        console.log("Error")
  //    })
        
  // }, [])
  
  // const handleRowAdd = (newData, resolve) => {
  //   //validation
  //   let errorList = []
  //   if(newData.name === undefined){
  //     errorList.push("Please enter language")
  //   }
  
  //   if(errorList.length < 1){ //no error
  //     axios.post("/api/v1.0/languages/create", newData)
  //     .then(res => {
  //       let dataToAdd = [...langData];
  //       dataToAdd.push(newData);
  //       setLangData(dataToAdd);
  //       resolve()
  //       setErrorMessages([])
  //       setIserror(false)
  //     })
  //     .catch(error => {
  //       setErrorMessages(["Cannot add data. Server error!"])
  //       setIserror(true)
  //       resolve()
  //     })
  //   }else{
  //     setErrorMessages(errorList)
  //     setIserror(true)
  //     resolve()
  //   }
  // }
  
  // const handleRowDelete = (oldData, resolve) => {
  //   axios.get(`/api/v1.0/languages/delete/${oldData.id}`)
  //     .then(res => {
  //       const dataDelete = [...langData];
  //       const index = oldData.tableData.id;
  //       dataDelete.splice(index, 1);
  //       setLangData([...dataDelete]);
  //       resolve()
  //     })
  //     .catch(error => {
  //       setErrorMessages(["Delete failed! Server error"])
  //       setIserror(true)
  //       resolve()
  //     })
  // }
    
  return (
    <div className="page-wraper">
      <LanguageList></LanguageList>
    </div>
  );
}
export default Homepage;

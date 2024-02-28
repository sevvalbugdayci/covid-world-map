import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDataRequest } from '../actions/dataActions';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const CountryDetail = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();
  const countryData = useSelector(state => state.data.countries); 


  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);
   
  const selectedCountry = countryData && countryData.find(country => country.country === countryName);


  return (
    <div className="country-detail">
      <h2>{countryName} Details</h2>
       {selectedCountry ? (
         <div className='content'>
           <p>Total Cases: {selectedCountry.activeCases || '-'}</p>
           <p>New Cases: {selectedCountry.newCases || '-'}</p>
           <p>Total Deaths: {selectedCountry.totalDeaths || '-'}</p>
           <p>New Deaths: {selectedCountry.newDeaths || '-'}</p>
           <p>Total Recovered: {selectedCountry.totalRecovered || '-'}</p>
          <p>Total Cases: {selectedCountry.totalCases || '-'}</p>
          
         </div>
       ) : (
        <div className='loader'>
            <p>Loading country data </p> <Spin indicator={<LoadingOutlined style={{fontSize: 20, marginLeft:'5px'}}spin/>}/>
        </div>
         
       )}
     </div>

    
    
  );
};

export default CountryDetail;

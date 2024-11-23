import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import { getCategoryChildService, getCategoryService } from '../../services/category';
import Actions from './Actions';
import { useLocation} from 'react-router-dom';
import  handleError  from '../../App';
import { useDataStore } from '../../zustand/dataStateStore';

const TableManageProduct = ({ parentId}) => {
  const { data , setData} = useDataStore((state) => state); 

  const location = useLocation()

  console.log(location)

 


  const [loading, setLoading] = useState(false);

  const handleGetCategories = async () => {

    setLoading(true); // Start loading
    try {
      
      const res = parentId
        ? await getCategoryChildService(parentId)
        : await getCategoryService()
      if (res.status === 200) {
        setData(res.data.data); // Set the fetched data to state
        console.log(res.data.data)
      
      }

    } catch (error) {
      //httpservice error
      console.error("Error fetching data:", error);
      // error toast
      handleError("Error fetching data. Please try again.")
    } finally {
      setLoading(false); // Stop loading
  }
  };

  useEffect(() => {
    handleGetCategories();
    console.log(parentId)
  }, [parentId]);

  const tabaleHeadInfo = [
    { key: 'id', label: '#' },
    { key: 'title', label: 'Title' },
    { key: 'parent', label: 'Parent' },
    { key: 'descriptions', label: 'descriptions' },
    { key: 'show', label: 'Show In Menu' },
    { key: 'actions', label: 'Actions' },
  ];

  return (
    <div className=' flex  m-auto w-5/6 overflow-x-auto'>

      {loading ? (
        <LoadingSpinner />
      ) : data.length ? (
        <table className="text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
          <thead className="font-inter">
            <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter ">
              {tabaleHeadInfo.map((col) => (
                <th className='text-center p-4' key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="font-inter">
            {data.map((product, index) => (
              <tr key={product.id} className="border-b font-inter">
                <td className='p-3'>{index + 1}</td>
                <td className='p-3'>{product.title}</td>
                <td className='p-3'>{parentId? location.state.data.title : "No parent"}</td>
                <td className='p-3'>{product.descriptions || "No descriptions available"}</td>
                <td className='p-3'>{product.is_active == 1 ? "Yes" : "No"}</td>
                <td className="p-3 py-3 sm:px-4 text-center">
                  <Actions data={product} parentId={parentId}/>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      ) : (
        <h5 className="text-center my-5 text-danger">No record has found</h5>
      )}
    </div>
  );
}

export default TableManageProduct;

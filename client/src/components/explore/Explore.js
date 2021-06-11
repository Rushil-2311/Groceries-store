import React,{ useEffect,useState }  from 'react'
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; 
import { Input} from 'antd';
import './Explore.css'
import axios from 'axios'

// import vegi from '../home/Five/vegi.png'

// import data from './data';

const { Search } = Input;

const Explore = () => {
  const [data, setData] = useState([]);
   
  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));    bytes.forEach((b) => binary += String.fromCharCode(b));    return window.btoa(binary);
};

  useEffect(() => {
    axios.get('http://localhost:5008/mainproduct')
    .then(response=>{
      setData(response.data)
      // console.log(response)
    })
    .catch(error=>console.log(error))
  }, [])
  
   console.log(data)
    // const image=data[0].img1.data.data.toString('base64');
    // console.log(data[10].imges)
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );

      const onSearch = value => console.log(value);


    return (
        <div>
           <div className="main__div">
               <div className="find__product">
                 <h2>Find Products</h2>
               </div>
               <div className="explore__search">
                            <Search
                                    placeholder="input search text"
                                    enterButton="Search"
                                    size="large"
                                    suffix={suffix}
                                    onSearch={onSearch}
                            />
               </div>
               <div className="loop__cahle">

               {/* {
                   data.map((data,i)=>{
                       return(
                       )
                   })
               } */}
                        <div className="explore__catagories">
                             <div className="explore__image">
                                 <img src="" alt=""/>
                             </div>
                             <div className="title__name">
                                 <p>vegies ans many more</p>
                             </div>
                         </div>
               
               </div>
           </div> 
        </div>
    )
}

export default Explore

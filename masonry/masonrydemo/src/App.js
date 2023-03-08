
import style from './App.module.scss';
import { useEffect, useState } from 'react';
import data from './data.json'
function App() {
  let [arr1, setArr1] = useState([])
  let [arr2, setArr2] = useState([])
  let [arr3, setArr3] = useState([])
  useEffect(() => {
    let data1 = [], data2 = [], data3 = []
    let index = 0
    while (index < data.length) {
      data1.push(data[index++])
      if (index < data.length) {
        data2.push(data[index++])
      }
      if (index < data.length) {
        data3.push(data[index++])
      }
    }
    setArr1(data1)
    setArr2(data2)
    setArr3(data3)
    console.log(arr1);
  }, [])
  return (
    <div className={style.masonry}>
      adsa
      <div className={style.column}>

        {
          arr1.map(item=>{
            return (< img key={item.id} alt={item.id} src={item.img} onError={()=>{}} />)
          })
        }
      </div>
      <div className={style.column}>
      {
          arr2.map(item=>{
            return (< img key={item.id} src={item.img} className={style.item} />)
          })
        }
      </div>
      <div className={style.column}>
      {
          arr3.map(item=>{
            return (< img key={item.id} src={item.img} />)
          })
        }
      </div>
    </div>
  );
}

export default App;

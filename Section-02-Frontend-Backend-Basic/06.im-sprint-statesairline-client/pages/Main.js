/*
🧩 Main 컴포넌트에서 항공편을 조회합니다
✕ Main 컴포넌트 내 `search` 함수는 검색 조건을 담고 있는 상태 객체 `condition`을 업데이트해야 합니다 (131 ms)
  
useEffect(()=>{
    setisLoading(true)//아직 로딩중이니까
    getFlight(condition).then(filtered => {
      //필터된거를 받아와서
      setFlightList(filtered)
      setisLoading(false)//로딩 끝나서
    })
    //getFlight가 리턴하는건 프로미스 타입이어서 댄을 씀.
    //LoadingIndicator(alt);
  },[condition]);

  const search = ({ departure, destination }) => { //우리가 고정했던 인천이랑 친 데스티네이션이 들어가서
    if (condition.departure !== departure || condition.destination !== destination) {
      //setCondition({departure, destination}); 
      // 저 출발지랑 도착지를 받아서 업데이트.
      setCondition({ //여기에 안착!
        departure: departure, //그래서 컨디션이 업데이트됨.
        destination: destination
      });
    }
  }
*/

import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getFlight } from '../api/FlightDataApi'
import FlightList from './component/FlightList'
import LoadingIndicator from './component/LoadingIndicator'
import Search from './component/Search'
import Debug from './component/Debug'

export default function Home() {
  const [condition, setCondition] = useState({
    departure: 'ICN'
  })
  const [flightList, setFlightList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const search = ({ departure, destination }) => {
    if (condition.departure !== departure || condition.destination !== destination) {
      setCondition({ departure, destination })
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getFlight(condition)
      .then(filtered => {
        setFlightList(filtered)
        setIsLoading(false)
      })
  }, [condition])

  global.search = search

  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          여행가고 싶을 땐, States Airline
        </h1>
        <Search onSearch={search} />
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {isLoading ? <LoadingIndicator /> : <FlightList list={flightList} />}
        </div>

        <div className="debug-area">
          <Debug condition={condition} />
        </div>
      </main>
    </div>
  )
}
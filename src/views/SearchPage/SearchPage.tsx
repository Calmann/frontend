import './SearchPage.css'
import NavbarComponent from '../../components/UI/molecules/NavbarComponent/NavbarComponent';
import logo from '../../assets/google-logo.png';
import FooterComponent from '../../components/UI/molecules/FooterComponent/FooterComponent';
import { FaSearch } from 'react-icons/fa';
import React from 'react';
import getData from '../../services/FakeService';
import { FakeRespModel } from '../../models/FakeModel';
import { useDebounce } from '../../utils/debounce';
import Skeleton from 'react-loading-skeleton';import "react-loading-skeleton/dist/skeleton.css";

export default function SearchPage() {
  const [search, delayedSearch,setSearch] = useDebounce('')
  const [isSearch, setIsSearch] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState<FakeRespModel[]>([])
  const [selectedData, setSelectedData] = React.useState<FakeRespModel | undefined>(undefined)
  React.useEffect(() => {
    setIsLoading(true)
    getData(delayedSearch)
    .then(res => {
      setData(res );
      setIsLoading(false);
    })
    setSelectedData(undefined);
  }, [delayedSearch])
  return (
    <div className='page-container'>
      <NavbarComponent isSearch={isSearch} search={search} setSearch={setSearch} />
      {!isSearch ?<>
      <img src={logo} className='logo-search' />
      <div className='input-box'>
        <FaSearch/>
        <input className='input'value={search} onChange={input => setSearch(input.target.value)}/>
      </div>
      <button className='search-button' onClick={() => setIsSearch(true)}>Buscar</button>
      </> : 
      <>
      {!isLoading ? data.length > 0 ? data.map((item, i) =><div key={i} className='search-result-box'>
      <p className='search-result-url'>{item.url}</p>
      <p className='search-result-title' onClick={()=>setSelectedData(item)}>{item.title}</p>
      <p className='search-result-description'>{item.description}</p>
      </div>
      ): <div className='search-result-box'>
      {search && <p className='search-result-description'>No results found for: '<strong>{search}</strong>'</p>}
      <p className='search-result-description'>Try looking for: <strong>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.</strong></p>
      </div> : [...new Array(100)].map(item => <div className='search-result-box'>
        <Skeleton height={15} width={300}/>
        <Skeleton height={30} width={200}/>
        <Skeleton height={50} width={600}/>
        </div>)}
      </>}
      {selectedData && <><div className='image-background' onClick={() => setSelectedData(undefined)}></div>
      <div className='card-box'>  
        <img className='card-img' src={selectedData.image}/>
        <p className='search-result-description'><strong>{selectedData.title}</strong></p>
        <p className='search-result-description'>{selectedData.description}</p>
        
      </div></>}
      <FooterComponent />
    </div>
  );
}

import './SearchPage.css'
import NavbarComponent from '../../components/UI/organisms/NavbarComponent/NavbarComponent';
import logo from '../../assets/google-logo.png';
import FooterComponent from '../../components/UI/molecules/FooterComponent/FooterComponent';
import { FaSearch } from 'react-icons/fa';
import React from 'react';
import getData from '../../services/FakeService';
import { FakeRespModel } from '../../models/FakeModel';
import { useDebounce } from '../../utils/debounce';
import Skeleton from 'react-loading-skeleton';import "react-loading-skeleton/dist/skeleton.css";
import ContainerComponent from '../../components/UI/atoms/ContainerComponent/ContainerComponent';
import InputComponent from '../../components/UI/atoms/InputComponent/InputComponent';
import ImageComponent from '../../components/UI/atoms/ImageComponent/ImageComponent';
import TextComponent from '../../components/UI/atoms/TextComponent/TextComponent';
import ButtonComponent from '../../components/UI/atoms/ButtonComponent/ButtonComponent';

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
    <ContainerComponent className='page-container'>
      <NavbarComponent isSearch={isSearch} search={search} setSearch={setSearch} />
      {!isSearch ?<>
      <ImageComponent src={logo} className='logo-search' />
      <ContainerComponent className='input-box'>
        <FaSearch/>
        <InputComponent className='input'value={search} onChange={input => setSearch(input.target.value)}/>
      </ContainerComponent>
      <ButtonComponent className='search-button' onClick={() => setIsSearch(true)}>Buscar</ButtonComponent>
      </> : 
      <>
      {!isLoading ? data.length > 0 ? data.map((item, i) =><ContainerComponent key={i} className='search-result-box'>
      <TextComponent className='search-result-url'>{item.url}</TextComponent>
      <TextComponent className='search-result-title' onClick={()=>setSelectedData(item)}>{item.title}</TextComponent>
      <TextComponent className='search-result-description'>{item.description}</TextComponent>
      </ContainerComponent>
      ): <ContainerComponent className='search-result-box'>
      {delayedSearch && <TextComponent className='search-result-description'>No results found for: '<strong>{delayedSearch}</strong>'</TextComponent>}
      <TextComponent className='search-result-description'>Try looking for: <strong>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.</strong></TextComponent>
      </ContainerComponent> : [...new Array(100)].map((item, i) => <ContainerComponent key={i} className='search-result-box'>
        <Skeleton height={15} width={300}/>
        <Skeleton height={30} width={200}/>
        <Skeleton height={50} width={600}/>
        </ContainerComponent>)}
      </>}
      {selectedData && <><ContainerComponent className='image-background' onClick={() => setSelectedData(undefined)}></ContainerComponent>
      <ContainerComponent className='card-box'>  
        <ImageComponent  className='card-img' src={selectedData.image}/>
        <TextComponent className='search-result-description'><strong>{selectedData.title}</strong></TextComponent>
        <TextComponent className='search-result-description'>{selectedData.description}</TextComponent>
        
      </ContainerComponent></>}
      <FooterComponent />
    </ContainerComponent>
  );
}

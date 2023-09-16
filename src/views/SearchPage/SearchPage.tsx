import "./SearchPage.css";
import NavbarComponent from "../../components/UI/organisms/NavbarComponent/NavbarComponent";
import FooterComponent from "../../components/UI/molecules/FooterComponent/FooterComponent";
import React from "react";
import getData from "../../services/FakeService";
import { FakeRespModel } from "../../models/FakeModel";
import { useDebounce } from "../../utils/debounce";
import ContainerComponent from "../../components/UI/atoms/ContainerComponent/ContainerComponent";
import SearchComponent from "../../components/UI/organisms/SearchComponent/SearchComponent";
import ResultCardComponent from "../../components/UI/organisms/ResultCardComponent/ResultCardComponent";
import LoadingComponent from "../../components/UI/organisms/LoadingComponent/LoadingComponent";
import ResultListComponent from "../../components/UI/organisms/ResultListComponent/ResultListComponent";

export default function SearchPage() {
  const [search, delayedSearch, setSearch] = useDebounce("");
  const [isSearch, setIsSearch] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<FakeRespModel[]>([]);
  const [selectedData, setSelectedData] = React.useState<
    FakeRespModel | undefined
  >(undefined);
  React.useEffect(() => {
    setIsLoading(true);
    getData(delayedSearch).then((res) => {
      setData(res);
      setIsLoading(false);
    });
    setSelectedData(undefined);
  }, [delayedSearch]);
  return (
    <ContainerComponent className="page-container">
      <NavbarComponent
        isSearch={isSearch}
        search={search}
        setSearch={setSearch}
      />
      {!isSearch ? (
        <SearchComponent
          search={search}
          onChange={(value) => setSearch(value)}
          onClick={() => setIsSearch(true)}
        />
      ) : (
        <LoadingComponent isLoading={isLoading}>
          <ResultListComponent
            data={data}
            delayedSearch={delayedSearch}
            setSelectedData={setSelectedData}
          />
        </LoadingComponent>
      )}
      {selectedData && (
        <ResultCardComponent
          selectedData={selectedData}
          onClickBackground={() => setSelectedData(undefined)}
        />
      )}
      <FooterComponent />
    </ContainerComponent>
  );
}

import type { Dispatch, SetStateAction } from 'react';
import { SearchBarStyle, SearchWrapper } from './SearchBar.style';
import Button from '../Button/Button';


type SearchBarProps = {
  onChange: Dispatch<SetStateAction<string>>;
  search: () => void;
  placeholder?: string;
}

const SearchBar = ({ onChange, placeholder, search }: SearchBarProps) => {
  return (
    <SearchWrapper>
      <SearchBarStyle
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') search();
        }}
        placeholder={placeholder || '검색어를 입력하세요!!!'} />
      <Button width='fit-content' text='검색' onClick={search} />
    </SearchWrapper>
  )
}

export default SearchBar
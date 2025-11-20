import styled from 'styled-components'

const SearchBarStyle = styled.input`
  border: 0;
  border-radius: 4px;
  padding: 6px;
  width: 30%;
  &:focus {
    outline: 0;
  }
`

type SearchBarProps = {
  onChange : () => void;
  placeholder?: string;
}

const SearchBar = ({ onChange, placeholder } : SearchBarProps) => {
  return (
    <SearchBarStyle placeholder={placeholder || '검색어를 입력하세요.'} />
  )
}

export default SearchBar
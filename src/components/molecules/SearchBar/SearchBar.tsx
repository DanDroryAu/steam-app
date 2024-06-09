import Input, { type Props as InputProps } from "@/components/atoms/Input";
import classes from './SearchBar.module.scss';

export type Props = {
  label: string;
  value: string;
  onInput: InputProps['onInput'];
}

export const SearchBar = ({
  value,
  onInput,
  label,
}: Props) =>
  <div className={classes.searchBar}>
    <label>{ label }</label>
    <Input value={value} onInput={onInput} placeholder="Enter steam Id"/>
  </div>;


export default SearchBar;

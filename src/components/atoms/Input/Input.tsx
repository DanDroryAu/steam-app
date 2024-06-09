
import { Input as AntdInput, InputProps } from 'antd';

export type Props = Pick<InputProps, 'disabled' | 'onInput' | 'value' | 'placeholder'>;

export const Input = ({
  onInput,
  value,
  placeholder,
  disabled,
}: Props) => <AntdInput placeholder={placeholder} onInput={onInput} value={value} disabled={disabled} />;

export default Input;

// Simple MUI button wrapper
// (comments in English as requested)
import Button from '@mui/material/Button';

export default function Btn({ children }: { children?: React.ReactNode }) {
  return <Button variant="contained">{children}</Button>;
}

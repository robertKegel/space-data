import { Button, ButtonGroup } from '@mui/material';

export default function SearchSelector(props) {


  let availablePages = [];
  if (props.pages) {
    availablePages = Object.keys(props.pages);
  }

  return (
    <ButtonGroup className='button-group' variant="contained" color="primary" aria-label="contained primary button group">
      {availablePages.map((page) => {
        let isDisabled = page === props.page;
        return (
          <Button disabled={isDisabled} onClick={ () => { props.changeSearch(page) }} >{page.toUpperCase()}</Button>
        )
      })}
    </ButtonGroup>
  )
}
import {FC} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useSectionLayoutStyles = makeStyles({
  container: {
    display: 'grid',
    gap: '64px',
    paddingBottom: '64px',
    paddingTop: '64px',
  },
});

const SectionLayout: FC = ({children}) => {
  const styles = useSectionLayoutStyles()

  return (
    <Container className={styles.container}>
      {children}
    </Container>
  )
}

export default SectionLayout
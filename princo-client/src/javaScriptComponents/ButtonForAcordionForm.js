import { Button, useAccordionButton,} from 'react-bootstrap';

const ButtonForAcordionForm=({ children, eventKey })=> {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
        <Button type="button" variant="outline-dark" onClick={decoratedOnClick}>{children}</Button>
    );
}
export default ButtonForAcordionForm;
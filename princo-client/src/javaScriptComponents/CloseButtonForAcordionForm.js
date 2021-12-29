import { Button, useAccordionButton,} from 'react-bootstrap';

const CloseButtonForAcordionForm=({ children, eventKey })=> {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
        <Button type="button" variant="outline-danger" size="sm" style={{ position: "relative", right: "-40%" }}  onClick={decoratedOnClick}>{children}</Button>
    );
}
export default CloseButtonForAcordionForm;